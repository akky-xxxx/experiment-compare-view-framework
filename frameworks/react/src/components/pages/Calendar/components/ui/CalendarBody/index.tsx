"use client"

import { CalendarCell } from "@/components/pages/Calendar/components/ui/CalendarCell"
import styles from "./index.module.css"

import type { FC } from "react"
import { TaskList } from "@/components/pages/Calendar/components/ui/TaskList"
import { MonthSelector } from "@/components/pages/Calendar/components/layouts/MonthSelector"
import { SiblingMonthButton } from "@/components/pages/Calendar/components/ui/SiblingMonthButton"

const Dates = [
  {
    date: "2022-12-31",
    taskList: [],
  },
  {
    date: "2023-01-01",
    taskList: ["task1"],
  },
  {
    date: "2023-01-02",
    taskList: ["task2"],
  },
  {
    date: "2023-01-03",
    taskList: ["task3", "task4"],
  },
  {
    date: "2023-01-04",
    taskList: [],
  },
  {
    date: "2023-01-05",
    taskList: [],
  },
  {
    date: "2023-01-06",
    taskList: [],
  },
  {
    date: "2023-01-07",
    taskList: [],
  },
] as const

export const CalendarBody: FC = () => {
  const currentMonth = 1

  return (
    <div className={styles.root}>
      <MonthSelector
        monthElement={<div>{currentMonth}月</div>}
        previousButtonElement={
          <SiblingMonthButton direction="previous" handleClick={() => {}} />
        }
        nextButtonElement={
          <SiblingMonthButton direction="next" handleClick={() => {}} />
        }
      />

      <ul className={styles.ul}>
        {Dates.map((datum) => {
          const { date, taskList } = datum
          const isCurrentMonth = new Date(date).getMonth() + 1 === currentMonth

          return (
            <li key={date}>
              <CalendarCell
                today={date}
                isCurrentMonth={isCurrentMonth}
                taskListComponent={<TaskList taskList={taskList} />}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
