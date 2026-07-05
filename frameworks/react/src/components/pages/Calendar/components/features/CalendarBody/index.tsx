import { CalendarCell } from "./components/features/CalendarCell"
import { TaskList } from "./components/features/TaskList"
import { MonthSelector } from "./components/layouts/MonthSelector"
import { SiblingMonthButton } from "./components/ui/SiblingMonthButton"

import styles from "./index.module.css"

import type { FC } from "react"

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
    taskList: ["task3", "task4", "task4-2"],
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
        previousButtonElement={<SiblingMonthButton direction="previous" />}
        nextButtonElement={<SiblingMonthButton direction="next" />}
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
