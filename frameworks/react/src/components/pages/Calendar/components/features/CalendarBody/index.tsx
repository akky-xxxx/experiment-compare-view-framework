import { CalendarCell } from "./components/features/CalendarCell"
import { TaskList } from "./components/features/TaskList"
import { MonthSelector } from "./components/layouts/MonthSelector"
import { DayCell } from "./components/ui/DayCell"
import { SiblingMonthButton } from "./components/ui/SiblingMonthButton"
import { getDates } from "./modules/getDates"
import { getTargetTaskList } from "./modules/getTargetTaskList"

import styles from "./index.module.css"

import type { Task } from "@/domains/Task"
import type { FC } from "react"

type Props = {
  currentMonth: number
  currentYear: number
  taskList: readonly Task[]
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export const CalendarBody: FC<Props> = (props) => {
  const { currentMonth, currentYear, taskList } = props
  const dates = getDates(currentYear, currentMonth)

  return (
    <div className={styles.root}>
      <MonthSelector
        monthElement={<div>{currentMonth}月</div>}
        previousButtonElement={<SiblingMonthButton direction="previous" />}
        nextButtonElement={<SiblingMonthButton direction="next" />}
      />

      <ul className={styles.ul}>
        {DAYS.map((day) => <DayCell key={day} day={day} />)}

        {dates.map((date) => {
          const isCurrentMonth = date.getMonth() + 1 === currentMonth
          const stringDate = date.toString()
          const targetTaskList = taskList.reduce(getTargetTaskList(date), [])

          return (
            <li key={stringDate}>
              <CalendarCell
                today={stringDate}
                isCurrentMonth={isCurrentMonth}
                taskListComponent={<TaskList taskList={targetTaskList} />}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
