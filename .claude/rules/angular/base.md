# angular package について

ルーティングは意図的に薄く保たれています。`app/app.routes.ts` は `components/pages/**` の
component を path にマッピングするだけで、実際のロジック・マークアップはすべて `components/`
以下にあります(React 版の `app/**/page.tsx` に相当する役割)。

```
app/                          Angular Router 設定のみ — app.routes.ts / app.config.ts / app.ts (ルートシェル)
components/
  pages/<page-name>/          ルートごとに1フォルダ、kebab-case、`<page-name>.ts/.html/.css` がページ本体
    modules/<fnName>/         ページ固有の composable 関数 (例: getTask, getTaskList)、1関数につき1フォルダ
    components/
      features/<name>/        複合的・振る舞いを持つサブコンポーネント、自身も components/modules を持ちうる
      layouts/<name>/         構造的・レイアウト用サブコンポーネント
      ui/<name>/               表示専用の末端サブコンポーネント
  layouts/<name>/              アプリ全体のレイアウトコンポーネント (例: main-layout, task-detail)
  ui/<name>/                    アプリ全体で再利用される表示用コンポーネント (例: main-header)
  features/<name>/              複数ページ間で再利用される振る舞いを持つコンポーネント (例: task-form)
domains/<Entity>/               純粋なドメイン型 (例: Task)
utilities/apiClient.service/    HttpClient をラップした Angular Service (ApiClientService)
  interceptors/<name>/          HttpInterceptorFn。1つにつき1フォルダ、app.config.ts の
                                 provideHttpClient(withInterceptors([...])) で登録する
  types/<Name>/                 リクエスト/レスポンス型
utilities/<name>/                横断的に使う汎用ユーティリティ関数 (例: formatScheduleDate)
```

このツリーに追加する際に従うべき慣習:

- コンポーネントは Angular CLI の慣習通り、ディレクトリ名 = ファイル名 (kebab-case) とし、
  `<name>.ts` / `<name>.html` / (必要なら) `<name>.css` を同階層に並べる。React 側の
  「`index.tsx` に集約し親階層に同名ファイルを置かない」ルールとは逆なので混同しない。
- `modules/<fnName>/index.ts` に切り出す composable 関数は `get〜` で命名する (React の `use〜`
  に相当。Angular では React Hooks ではなく `inject()` を使うプレーン関数のため use ではなく get を
  使う)。ページ/コンポーネントの `.ts` 本体は、これらの関数を呼び出して signal を input/output に
  結びつけるだけの薄い組み立て層に保つ (React の `useHooks.ts` に相当する役割だが、独立ファイルには
  分離せずコンポーネント本体がそのまま担う)。
- CSS は CSS Modules ではなく素の `.css` を `styleUrls` で読み込む (Angular のデフォルトの
  ViewEncapsulation によりコンポーネントごとに自動でスコープされるため)。クラス名は `camelCase`
  (stylelint の `selector-class-pattern` により React 側と同じ正規表現で強制)。
- コンポーネントセレクタは prefix なしの kebab-case 要素セレクタ、ディレクティブセレクタは
  camelCase の属性セレクタ (`@angular-eslint/component-selector` / `directive-selector`)。
- template や input/output から参照する signal には `public readonly` / `protected readonly` を明示
  する (`@typescript-eslint/explicit-member-accessibility` と `prefer-readonly` /
  `@angular-eslint/prefer-output-readonly` により強制)。
- 状態は Angular Signals (`signal` / `computed` / `input` / `output` / `effect` / `toSignal`) で
  一貫して扱う。
- フォームは Angular の Reactive Forms (`ReactiveFormsModule` + `NonNullableFormBuilder` +
  `Validators`) を使う (`components/features/task-form/modules/getTaskForm` を参照)。React 版の
  react-hook-form + zod/mini スキーマに相当する、Angular 標準の選択。
- React の `@/*` パスエイリアスに相当するものは存在しない。リポジトリ内モジュールは常に相対パス
  (`../../..`) で import する。
- API アクセスは `ApiClientService` (`providedIn: 'root'`) 経由で行う。GET は `httpResource`
  (signal ベース)、POST/PUT は `HttpClient` のメソッドをそのまま返す。ベース URL 付与やエラー
  ロギングなどの横断的関心事は `interceptors/*` に切り出す。
