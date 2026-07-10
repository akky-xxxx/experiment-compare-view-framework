import { format } from "date-fns"
import { useState, useEffect } from "react"

import { apiClient } from "@/utilities/apiClient"

import type { Task } from "@/domains/Task"

export const useTaskList = () => {
  const [taskList, setTaskList] = useState<Task[]>([])

  useEffect(() => {
    apiClient.getSchedules().then((response) => {
      setTaskList(
        response.data.map((schedule) => {
          const { id, date, title: task } = schedule

          return {
            id,
            date: format(new Date(date), "yyyy-MM-dd"),
            task,
          }
        }),
      )
    })
  }, [])

  return taskList
}
