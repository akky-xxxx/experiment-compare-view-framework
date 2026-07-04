import { CalendarCell } from "@/components/pages/Calendar/components/ui/CalendarCell"
import styles from "./index.module.css"

import type { FC } from "react"

export const CalendarBody: FC = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <button>&lt;</button>
        <div>X月</div>
        <button>&gt;</button>
      </header>

      <ul className={styles.ul}>
        <li>
          <CalendarCell isCurrentMonth={false} />
        </li>
        <li>
          <CalendarCell isCurrentMonth={false} />
        </li>
        <li>
          <CalendarCell isCurrentMonth={true} />
        </li>
        <li>
          <CalendarCell isCurrentMonth={true} />
        </li>
        <li>
          <CalendarCell isCurrentMonth={true} />
        </li>
        <li>
          <CalendarCell isCurrentMonth={true} />
        </li>
        <li>
          <CalendarCell isCurrentMonth={true} />
        </li>
        <li>
          <CalendarCell isCurrentMonth={true} />
        </li>
      </ul>
    </div>
  )
}
