import type { FC } from "react"

type UnknownObject = Record<string | number | symbol, unknown>

export type PathParamPage<
  S extends Record<string, string>,
  P = UnknownObject,
> = FC<
  P & {
    params: Promise<S>
  }
>
