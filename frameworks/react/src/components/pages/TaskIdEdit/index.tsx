import { TaskForm } from "@/components/features/TaskForm"

import type { FC } from "react"

type Props = {
  id: string
}

export const TaskIdEdit: FC<Props> = (props) => {
  const { id } = props

  return <TaskForm mode="edit" id={id} />
}
