import { isSameDay } from "date-fns"

import { CalendarCell } from "./components/features/CalendarCell"
import { TaskList } from "./components/features/TaskList"
import { MonthSelector } from "./components/layouts/MonthSelector"
import { DayCell } from "./components/ui/DayCell"
import { SiblingMonthButton } from "./components/ui/SiblingMonthButton"
import { getDates } from "./modules/getDates"

import styles from "./index.module.css"

import type { FC } from "react"

type Task = {
  date: string
  task: string
}

type Props = {
  currentMonth: number
  currentYear: number
  taskList: readonly Task[]
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export const CalendarBody: FC<Props> = (props) => {
  const { currentMonth, currentYear, taskList } = props
  const dates = getDates(currentYear, currentMonth).map((date) => {
    return {
      date: date.toString(),
      taskList: taskList.reduce<string[]>((previousValue, currentValue) => {
        if (isSameDay(new Date(currentValue.date), date)) {
          previousValue.push(currentValue.task);
        }
        return previousValue;
      }, [] satisfies string[]),
    }
  })

  return (
    <div className={styles.root}>
      <MonthSelector
        monthElement={<div>{currentMonth}月</div>}
        previousButtonElement={<SiblingMonthButton direction="previous" />}
        nextButtonElement={<SiblingMonthButton direction="next" />}
      />

      <ul className={styles.ul}>
        {DAYS.map((day) => (
          <DayCell key={day} day={day} />
        ))}
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
