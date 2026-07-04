import type { FC, PropsWithChildren } from "react"

type UnknownObject = Record<string | number | symbol, unknown>

export type FcWithChildren<P = UnknownObject> = FC<PropsWithChildren<P>>
