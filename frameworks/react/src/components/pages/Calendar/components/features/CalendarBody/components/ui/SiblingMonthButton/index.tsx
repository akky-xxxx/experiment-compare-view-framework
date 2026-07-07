import type { FC } from "react"

type Props = {
  direction: "previous" | "next"
  handleClick: () => void
}

export const SiblingMonthButton: FC<Props> = (props) => {
  const { direction, handleClick } = props

  return <button onClick={handleClick}>{direction === "previous" ? "◀" : "▶"}</button>
}
