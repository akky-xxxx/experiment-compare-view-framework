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
          <CalendarCell />
        </li>
        <li>
          <CalendarCell />
        </li>
        <li>
          <CalendarCell />
        </li>
        <li>
          <CalendarCell />
        </li>
        <li>
          <CalendarCell />
        </li>
        <li>
          <CalendarCell />
        </li>
        <li>
          <CalendarCell />
        </li>
        <li>
          <CalendarCell />
        </li>
      </ul>
    </div>
  )
}
