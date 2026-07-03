import { ENDPOINTS } from "../../constants/ENDPOINTS"

import type { Node } from "../../types/Node"

const map: Record<string, string> = { ...ENDPOINTS }

export const createRoutes = (
  db: Record<keyof typeof ENDPOINTS | "$schema", Node>,
) =>
  Object.fromEntries(
    Object.keys(db).reduce<Array<[string, string]>>((previousValue, key) => {
      const maybeKey = map[key]
      if (maybeKey) {
        previousValue.push([maybeKey, `/${key}`])
      }
      return previousValue
    }, []),
  )
