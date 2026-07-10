# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際に Claude Code (claude.ai/code) に向けたガイダンスを提供します。

## 目的

このリポジトリは、同じ小さなタスク／カレンダーアプリを React (Next.js) 版と Angular 版の2通りで実装し、
両フレームワークを比較するためのものです。両者は共通の `sample-api` (json-server) をバックエンドとして
利用します。`frameworks/react` 配下の React アプリは実装が作り込まれている一方、`frameworks/angular` は
まだルーティングやコンポーネントが未実装のまっさらな CLI スキャフォールドのままです。機能を両者間で
移植する際は、React を「参照実装」として扱い、その構文ではなく構造・振る舞いを模倣してください。

## ワークスペース構成

pnpm workspace (`pnpm-workspace.yaml`) を使用し、パッケージは `frameworks/**` と `server/**` 配下にあります。

- `frameworks/react` — Next.js 16 (App Router) アプリ。Storybook、Vitest を使用。
- `frameworks/angular` — Angular 22 アプリ (スタンドアロンコンポーネント)。Vitest を使用。
- `server/sample-api` — json-server によるモック API を生成・提供 (ポート 4000)。

依存パッケージのバージョンは `pnpm-workspace.yaml` の `catalog:` および名前付きカタログ
(`production-infrastructure`、`angular`、`react`) に集約管理されています。新しい依存を追加する際は、
各パッケージの `package.json` に直接バージョンを固定するのではなく、必ずカタログ経由
(`"catalog:react"` など) で追加してください。

## よく使うコマンド

特に指定がない限りリポジトリのルートから実行します。ルートのスクリプトはルート直下の設定ファイルの
lint のみを行い、各パッケージ固有の作業はそれぞれのパッケージディレクトリ内 (または
`pnpm --filter <pkg> <script>` 経由) で行います。

```bash
pnpm install                # 全体をインストール (ワークスペース全体)

# sample API (どちらのフロントエンドがデータを取得するにも起動が必要)
pnpm --filter sample-api act        # src/ から db.json/routes.json を再生成し、:4000 で起動
pnpm --filter sample-api gen        # db.json/routes.json の再生成のみ
pnpm --filter sample-api serve      # 既存の db.json/routes.json をそのまま起動

# react アプリ (frameworks/react)
pnpm --filter react dev             # Next.js の開発サーバー
pnpm --filter react build           # 本番ビルド
pnpm --filter react storybook       # Storybook の開発サーバー (:6006)
pnpm --filter react lint            # eslint + prettier + stylelint + sort-package-json (並列実行)
pnpm --filter react fix             # 上記の自動修正版

# angular アプリ (frameworks/angular)
pnpm --filter angular start         # ng serve
pnpm --filter angular test          # ng test (Vitest)
pnpm --filter angular lint          # ng lint + prettier + stylelint + sort-package-json (並列実行)
```

すべてのパッケージ (root、react、angular、sample-api) は同じ `lint` / `fix` の慣習に従っています。
`lint` はすべての `lint:*` スクリプトを並列実行し (`run-p "lint:*" -c --aggregate-output`)、`fix` は
`fix:*` について同様に実行します。パッケージの lint や fix を頼まれた場合は、個々のサブスクリプトを
推測するのではなく、この集約された `lint`/`fix` スクリプトを優先してください。

ルートに「全テスト実行」や「型チェック」を一括で行うスクリプトはありません。各パッケージ固有の
スクリプトを個別に実行してください (angular なら `ng test`。react には Storybook の
`addon-vitest` 以外、テストスクリプトはまだ定義されていません)。

## コミットメッセージ

husky の `commit-msg` フック (`commitlint.config.cjs`) 経由で commitlint により Conventional Commits
形式が強制されます。

- 形式: `type(scope): subject`
- `type` は次のいずれか: `chore, feat, fix, docs, style, refactor, test, revert`
- `scope` は**必須**（空不可）で、次のいずれか: `root, angular, react, server` (または `*`)
- 本文がある場合は、件名との間に空行が必要

直近の例: `refactor(react): cut out to FormSchema`

## React アプリのアーキテクチャ (`frameworks/react/src`)

ルーティングは意図的に薄く保たれています。`app/**/page.tsx` 配下のファイルは、`components/pages/**`
にある対応コンポーネントをレンダリングするだけで、実際のロジックやマークアップはすべて `app/` の
外側にあります。

```
app/                          Next.js App Router — ルーティングのみ、components/pages に委譲
components/
  pages/<PageName>/           ルート/ページごとに1フォルダ、PascalCase、`index.tsx` がページの外殻
    useHooks.ts                ページのデータ/振る舞いを組み立てるページレベルのフック
    modules/<hookName>/       ページ固有のフック (例: useDate, useTaskList)、1フックにつき1フォルダ
    components/
      features/<Name>/        複合的・振る舞いを持つサブコンポーネント、自身も components/modules を持ちうる
      layouts/<Name>/         構造的・レイアウト用サブコンポーネント
      ui/<Name>/               表示専用の末端サブコンポーネント
  layouts/<Name>/             アプリ全体のレイアウトコンポーネント (例: MainLayout, TaskDetail)
  ui/<Name>/                  アプリ全体で再利用される表示用コンポーネント (例: Header)
domains/<Entity>/             純粋なドメイン型 (例: Task)
utilities/apiClient/          axios インスタンスと型付きメソッド。リクエスト/レスポンス型は types/ 配下
types/                        横断的に使う共有型 (例: FcWithChildren, PathParamPage)
```

このツリーに追加する際に従うべき慣習:

- コンポーネント/フックはそれぞれ自分の名前を冠したディレクトリに置き、`index.ts`/`index.tsx` から
  export する (親階層に同名の兄弟ファイルを置かない)。
- CSS Modules は `index.tsx` の隣に `index.module.css` として同居させる。クラス名は `camelCase`
  (stylelint の `selector-class-pattern` により強制)。
- ページの `useHooks.ts` は薄い組み立て層のままにする — 実際のロジックは `modules/*` のフックに
  切り出し、`useHooks` から呼び出す (`components/pages/Calendar/useHooks.ts` を参考に)。
- 現在の feature フォルダの外側にあるものについては、相対パス (`../../..`) ではなく `@/*` パス
  エイリアス (`src/*` にマップ) 経由でリポジトリ内モジュールを import する。
- フォームは `react-hook-form` + `zod/mini` スキーマを使用する (`TaskIdEdit/modules/useTaskForm`
  を参照)。スキーマ自体は `schemas/FormSchema` という独立フォルダに切り出す。
- セミコロンなし (Prettier の `semi: false`)。これは React に限らずリポジトリ全体で強制される。

## sample-api のアーキテクチャ (`server/sample-api/src`)

このパッケージは `db.json`/`routes.json` を手書きせず、生成します。

- `constants/ENDPOINTS` — データキー (例: `schedules`) を URL パスにマッピング。
- `constants/SCHEDULES`、`constants/JSON_SCHEMA` — `db.json` に含まれる実際のシードデータ/スキーマ。
- `functions/createRoutes` — `ENDPOINTS` と db のキーから json-server の `routes.json` を導出。
- `src/index.ts` — `db` (`$schema` + すべてのエンドポイントデータ) を `Record<keyof typeof
  ENDPOINTS | "$schema", Node>` に対して型付けしつつ組み立て、`db.json` と `routes.json` を
  ディスクに書き出す。

新しいリソースを追加するには: `ENDPOINTS` にキーを追加し、対応するシードデータの定数を追加した上で、
`pnpm --filter sample-api gen` を再実行して json-server が読み込む JSON ファイルを再生成する。
