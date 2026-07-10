import { format } from "date-fns"
import Link from "next/link"

import styles from "./index.module.css"

import type { CSSProperties, FC, ReactElement } from "react"

type Props = {
  today: string
  isCurrentMonth: boolean
  taskListElement: ReactElement
}

const getCellColor = (isCurrentMonth: boolean) => {
  return isCurrentMonth ? 1 : 0.6
}

export const CalendarCell: FC<Props> = (props) => {
  const { today, isCurrentMonth, taskListElement } = props
  const cellColor = {
    "--opacity": getCellColor(isCurrentMonth),
  } as CSSProperties
  const date = new Date(today)
  const currentDate = date.getDate()

  return (
    <div className={styles.root} style={cellColor}>
      <header className={styles.header}>{currentDate}</header>

      {taskListElement}

      <Link
        href={`/task/create?date=${format(date, "yyyy-MM-dd")}`}
        className={styles.cellLink}
      />
    </div>
  )
}
