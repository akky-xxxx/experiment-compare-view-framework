import { isSameDay } from "date-fns"

import type { Task } from "@/domains/Task"

export const getTargetTaskList =
  (date: Date) => (targetTaskList: Pick<Task, "id" | "task">[], task: Task) => {
    if (isSameDay(task.date, date)) {
      targetTaskList.push({
        id: task.id,
        task: task.task,
      })
    }
    return targetTaskList
  }
