import { CalendarCell } from "@/components/pages/Calendar/components/ui/CalendarCell"
import styles from "./index.module.css"

import type { FC } from "react"

const Dates = [
  {
    date: "2022-12-31",
  },
  {
    date: "2023-01-01",
  },
  {
    date: "2023-01-02",
  },
  {
    date: "2023-01-03",
  },
  {
    date: "2023-01-04",
  },
  {
    date: "2023-01-05",
  },
  {
    date: "2023-01-06",
  },
  {
    date: "2023-01-07",
  },
] as const

export const CalendarBody: FC = () => {
  const currentMonth = 1

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <button>&lt;</button>
        <div>{currentMonth}月</div>
        <button>&gt;</button>
      </header>

      <ul className={styles.ul}>
        {Dates.map((datum) => {
          const { date } = datum
          const isCurrentMonth = new Date(date).getMonth() + 1 === currentMonth

          return (
            <li key={date}>
              <CalendarCell today={date} isCurrentMonth={isCurrentMonth} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
