import type { FC } from "react"

type UnknownObject = Record<string | number | symbol, unknown>

export type PathParamPage<
  S extends Record<string, string> = Record<string, string>,
  Q extends Record<string, string | undefined> = Record<
    string,
    string | undefined
  >,
  P = UnknownObject,
> = FC<
  P & {
    params: Promise<S>
    searchParams: Promise<Q>
  }
>
