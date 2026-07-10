import { isSameDay } from "date-fns"

import type { Task } from "@/domains/Task"

export const getTargetTaskList =
  (date: Date) =>
  (targetTaskList: Pick<Task, "id" | "title">[], task: Task) => {
    if (isSameDay(task.date, date)) {
      targetTaskList.push({
        id: task.id,
        title: task.title,
      })
    }
    return targetTaskList
  }
