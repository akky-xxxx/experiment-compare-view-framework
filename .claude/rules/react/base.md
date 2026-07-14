# react package について

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
  切り出し、`useHooks` から呼び出す（facade, service の分割をイメージ）
- 現在の feature フォルダの外側にあるものについては、相対パス (`../../..`) ではなく `@/*` パス
  エイリアス (`src/*` にマップ) 経由でリポジトリ内モジュールを import する。
- フォームは `react-hook-form` + `zod/mini` スキーマを使用する (`TaskIdEdit/modules/useTaskForm`
  を参照)。スキーマ自体は `schemas/FormSchema` という独立フォルダに切り出す。
