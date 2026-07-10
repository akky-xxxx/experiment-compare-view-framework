import { TaskForm } from "@/components/features/TaskForm"

import type { FC } from "react"

type Props = {
  date?: string
}

export const TaskCreate: FC<Props> = (props) => {
  const { date } = props

  return <TaskForm mode="create" date={date} />
}
