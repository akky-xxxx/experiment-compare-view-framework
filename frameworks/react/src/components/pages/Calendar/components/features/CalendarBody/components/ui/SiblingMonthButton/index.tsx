import type { FC } from "react"

type Props = {
  direction: "previous" | "next"
}

export const SiblingMonthButton: FC<Props> = (props) => {
  const { direction } = props

  return <button>{direction === "previous" ? "◀" : "▶"}</button>
}
