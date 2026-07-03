import fs from "fs"

import { ENDPOINTS } from "./constants/ENDPOINTS"
import { JSON_SCHEMA } from "./constants/JSON_SCHEMA"
import { SCHEDULES } from "./constants/SCHEDULES"
import { createRoutes } from "./functions/createRoutes"

import type { Node } from "./types/Node"

const db = {
  $schema: JSON_SCHEMA,
  ...SCHEDULES,
} as const satisfies Record<keyof typeof ENDPOINTS | "$schema", Node>

const routes = createRoutes(db)

fs.writeFileSync("./db.json", JSON.stringify(db, null, 2) + "\n")
fs.writeFileSync("./routes.json", JSON.stringify(routes, null, 2) + "\n")
