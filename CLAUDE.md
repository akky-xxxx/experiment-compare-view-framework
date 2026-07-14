# CLAUDE.md

## モノレポ概要

view library, framework 毎の設計の差異を見る
極力 component 設計に注視するため、それぞれのツールに依存した作りは避ける
ただし慣習には則っていくスタンス

題材としてはカレンダーアプリとしている

## ワークスペース構成

pnpm workspace (`pnpm-workspace.yaml`) を使用し、パッケージは `frameworks/**` と `server/**` 配下にあります。

- `frameworks/react` — Next.js 16 (App Router) アプリ
- `frameworks/angular` — Angular 22 アプリ (スタンドアロンコンポーネント)
- `frameworks/vue` — Vue 3 (Vite + vue-router) アプリ
- `server/sample-api` — json-server によるモック API を生成・提供 (ポート 4000)。

依存パッケージのバージョンは `pnpm-workspace.yaml` の `catalog:` および名前付きカタログ
(`production-infrastructure`、`angular`、`react`、`vue`) に集約管理されています。新しい依存を追加する際は、
各パッケージの `package.json` に直接バージョンを固定するのではなく、必ずカタログ経由
(`"catalog:react"` など) で追加してください。

## よく使うコマンド

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

# vue アプリ (frameworks/vue)
pnpm --filter vue dev               # Vite の開発サーバー
pnpm --filter vue build             # 型チェック + 本番ビルド
pnpm --filter vue storybook         # Storybook の開発サーバー (:6006)
pnpm --filter vue lint              # eslint + prettier + stylelint + sort-package-json (並列実行)
pnpm --filter vue fix               # 上記の自動修正版
```

## 共通ルール
-
- セミコロンなし (Prettier の `semi: false`)

### コミットメッセージ

husky の `commit-msg` フック (`commitlint.config.cjs`) 経由で commitlint により Conventional Commits
形式が強制されます。

- 形式: `type(scope): subject`
- `type` は次のいずれか: `chore, feat, fix, docs, style, refactor, test, revert`
- `scope` は**必須**（空不可）で、次のいずれか: `root, angular, react, vue, server` (または `*`)
- 本文がある場合は、件名との間に空行が必要


## React アプリのアーキテクチャ (`frameworks/react/src`)

`.claude/rules/react/base.md` を参照

## Angular アプリのアーキテクチャ (`frameworks/angular/src`)

`.claude/rules/angular/base.md` を参照

## Vue アプリのアーキテクチャ (`frameworks/vue/src`)

`.claude/rules/vue/base.md` を参照

## sample-api のアーキテクチャ (`server/sample-api/src`)

`.claude/rules/api/base.md` を参照
