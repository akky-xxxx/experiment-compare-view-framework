import { CalendarCell } from "./components/features/CalendarCell"
import { TaskList } from "./components/features/TaskList"
import { MonthSelector } from "./components/layouts/MonthSelector"
import { SiblingMonthButton } from "./components/ui/SiblingMonthButton"
import { getDates } from "./modules/getDates"

import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  currentMonth: number
  currentYear: number
}

export const CalendarBody: FC<Props> = (props) => {
  const { currentMonth, currentYear } = props
  const dates = getDates(currentYear, currentMonth).map((date) => ({
    date: date.toString(),
    taskList: [],
  }))

  return (
    <div className={styles.root}>
      <MonthSelector
        monthElement={<div>{currentMonth}月</div>}
        previousButtonElement={<SiblingMonthButton direction="previous" />}
        nextButtonElement={<SiblingMonthButton direction="next" />}
      />

      <ul className={styles.ul}>
        {dates.map((datum) => {
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
