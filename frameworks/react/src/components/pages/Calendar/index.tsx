"use client"

import { format } from "date-fns"
import { useState, useEffect } from "react"

import { apiClient } from "@/utilities/apiClient"

import { CalendarBody } from "./components/features/CalendarBody"

import type { FC } from "react"

type Task = {
  date: string
  task: string
}

export const Calendar: FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([])

  useEffect(() => {
    apiClient.schedules()
      .then((response) => {
        setTaskList(response.data.map((schedule) => {
          const { date, title: task } = schedule

          return {
            date: format(new Date(date), "yyyy-MM-dd"),
            task,
          }
        }))
      })
      .catch((error: unknown) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <CalendarBody currentMonth={7} currentYear={2026} taskList={taskList} />
    </div>
  )
}
