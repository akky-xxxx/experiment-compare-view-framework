# sample-api のアーキテクチャ (`server/sample-api/src`)

このパッケージは `db.json`/`routes.json` を手書きせず、生成します。

- `constants/ENDPOINTS` — データキー (例: `schedules`) を URL パスにマッピング。
- `constants/SCHEDULES`、`constants/JSON_SCHEMA` — `db.json` に含まれる実際のシードデータ/スキーマ。
- `functions/createRoutes` — `ENDPOINTS` と db のキーから json-server の `routes.json` を導出。
- `src/index.ts` — `db` (`$schema` + すべてのエンドポイントデータ) を `Record<keyof typeof
  ENDPOINTS | "$schema", Node>` に対して型付けしつつ組み立て、`db.json` と `routes.json` を
  ディスクに書き出す。

新しいリソースを追加するには: `ENDPOINTS` にキーを追加し、対応するシードデータの定数を追加した上で、
`pnpm --filter sample-api gen` を再実行して json-server が読み込む JSON ファイルを再生成する。
