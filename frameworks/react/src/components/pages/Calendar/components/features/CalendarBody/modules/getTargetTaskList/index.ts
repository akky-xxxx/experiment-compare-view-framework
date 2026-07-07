import { isSameDay } from "date-fns"

import type { Task } from "@/domains/Task"

export const getTargetTaskList = (date: Date) => (targetTaskList: string[], task: Task) => {
  if (isSameDay(task.date, date)) {
    targetTaskList.push(task.task)
  }
  return targetTaskList
}
