# vue package について

ルーティングは意図的に薄く保たれています。`router/index.ts` は `components/pages/**` の component を
path にマッピングするだけで、実際のロジック・マークアップはすべて `components/` 以下にあります
(React 版の `app/**/page.tsx`、Angular 版の `app/app.routes.ts` に相当する役割)。

```
router/
  index.ts                     vue-router 設定のみ — path と components/pages/** の component の対応付け
components/
  pages/<PageName>/            ルートごとに1フォルダ、PascalCase、`<PageName>.vue` がページ本体
    useHooks.ts                 ページのデータ/振る舞いを組み立てるページレベルの composable
    modules/<useName>/         ページ固有の composable (例: useDate, useTaskList)、1関数につき1フォルダ
    components/
      features/<Name>/         複合的・振る舞いを持つサブコンポーネント、自身も components/modules を持ちうる
      layouts/<Name>/          構造的・レイアウト用サブコンポーネント
      ui/<Name>/                表示専用の末端サブコンポーネント
  layouts/<Name>/               アプリ全体のレイアウトコンポーネント (例: MainLayout, TaskDetail)
  ui/<Name>/                    アプリ全体で再利用される表示用コンポーネント (例: Header)
domains/<Entity>/               純粋なドメイン型 (例: Task)
utilities/apiClient/            axios インスタンスと型付きメソッド。リクエスト/レスポンス型は types/ 配下
utilities/<name>/                横断的に使う汎用ユーティリティ関数 (例: formatScheduleDate)
```

このツリーに追加する際に従うべき慣習:

- コンポーネントは Vue SFC (Single File Component) の慣習に従い、`<PageName>.vue` 1ファイルに
  template/script/style を集約する。React 版のような `index.tsx` + `index.module.css` の分離や、
  Angular 版のような `<name>.ts` + `<name>.html` + `<name>.css` の分離は行わない — Vue では SFC が
  最小単位であり、分割するとかえって Vue の慣習に反する。
- コンポーネントファイル名は Vue の公式スタイルガイドに従い PascalCase
  (`CalendarCell.vue` など)。ディレクトリ名も同じ PascalCase にして 1 コンポーネント 1 フォルダを保つ
  (React 版の構造に合わせているが、ファイル名自体は `index.vue` ではなくコンポーネント名を用いる)。
- 親から子へ ReactNode 相当のものを渡す箇所 (React 版の `titleNode`/`bodyNode`/`headerComponent` など)
  は、Vue のネイティブな slot (named slot) に置き換える。これは Angular 版の `<ng-content select>`
  による content projection と同じ発想であり、React の「要素を prop として渡す」トリックより両者の
  慣習に近い。例: `TaskDetail.vue` は `id` prop + `#title`/`#date`/`#body` の named slot、
  `MainLayout.vue` は `#header` slot + default slot。
- ページ/コンポーネント固有の composable は `modules/<useName>/index.ts` に切り出し、`use〜` で命名する
  (Vue 公式ドキュメントの composable 命名規則そのもの。React の hooks 命名を借りているわけではなく、
  Vue 自身の慣習と一致する)。ページの `useHooks.ts` はこれらの composable を呼び出して束ねるだけの
  薄い組み立て層に保つ (React 版の `useHooks.ts` と同じ役割)。
- 状態は Composition API (`ref` / `computed` / `reactive` / `onMounted` / `watchEffect`) で一貫して
  扱う。`<script setup lang="ts">` を必須とし、Options API は使わない。
- CSS は SFC の `<style module>` (Vue 組み込みの CSS Modules) を使い、`:class="$style.xxx"` で束ねる。
  `<style scoped>` は採用していない — `scoped` は属性セレクタ (`[data-v-hash]`) を元のクラス名に
  付与するだけで、クラス名自体はリネームされない。しかも Vue は「親のスコープ属性を子コンポーネントの
  ルート要素にも fallthrough attribute として伝播させる」ため、親子で同じクラス名 (`.root` など) を
  使うと親の scoped ルールが子のルート要素にも意図せず適用され、React 版の CSS Modules が保証する
  「別コンポーネントなら絶対に衝突しない」という性質を再現できない
  (実際に `CalendarBody` の `.root` が `MonthSelector`/`DayCell`/`CalendarCell` のルート要素の
  `.root` に漏れて上書きする不具合が発生したため、`<style module>` に切り替えた経緯がある)。
  クラス名は `camelCase` (stylelint の `selector-class-pattern` により React/Angular 側と同じ正規表現
  で強制)。stylelint 側は `postcss-html` + `stylelint-config-html/vue` で `.vue` 内の `<style>` を
  直接解析させ、`stylelint-config-css-modules` で CSS Modules 特有の記法に対応させている
  (React 版の `stylelint-config-css-modules` と同じ構成)。
- フォームは `vee-validate` + `zod` を使う (`components/features/TaskForm/modules/useTaskForm` を
  参照)。React 版の react-hook-form + zod/mini に相当する、Vue エコシステムでの定番構成。ただし
  `@vee-validate/zod` の peer dependency が `zod` v3 系までしか対応していないため
  (2026-07 時点、v4 の Standard Schema を vee-validate 自身はまだ直接サポートしない)、
  他フレームワークと異なり本パッケージのみ `zod` を v3 系 (`catalog:vue`) に固定している。
  スキーマ自体は `schemas/FormSchema` という独立フォルダに切り出す点は React 版と同じ。
- ルーティングは `vue-router` を素で使う (Nuxt のようなメタフレームワークには依存しない — Angular が
  Angular Router を素で使うのと同じ立ち位置)。動的セグメントやクエリパラメータは
  `router/index.ts` の `props` オプション (`props: true` / `props: (route) => ({...})`) で
  ページコンポーネントの props にマッピングし、Next.js の `params`/`searchParams` (Promise) や
  Angular の `withComponentInputBinding()` に相当する役割を持たせる。
- React の `@/*` パスエイリアスに相当するものを Vite の `resolve.alias` で用意している
  (`src/*` にマップ)。現在の feature フォルダの外側にあるものを import する際は相対パスではなく
  `@/*` を使う。
