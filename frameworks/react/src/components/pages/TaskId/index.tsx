import type { FC } from "react"

type Props = {
  id: string
}

export const TaskId: FC<Props> = (props) => {
  const { id } = props

  return id
}
