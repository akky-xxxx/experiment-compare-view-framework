import Link from "next/link"

import { formatScheduleDate } from "@/utilities/formatScheduleDate"

import styles from "./index.module.css"

import type { CSSProperties, FC, ReactElement } from "react"

type Props = {
  date: Date
  isCurrentMonth: boolean
  taskListElement: ReactElement
}

const getCellColor = (isCurrentMonth: boolean) => {
  return isCurrentMonth ? 1 : 0.6
}

export const CalendarCell: FC<Props> = (props) => {
  const { date, isCurrentMonth, taskListElement } = props
  const cellColor = {
    "--opacity": getCellColor(isCurrentMonth),
  } as CSSProperties
  const currentDate = date.getDate()

  return (
    <div className={styles.root} style={cellColor}>
      <header className={styles.header}>{currentDate}</header>

      {taskListElement}

      <Link
        href={`/task/create?date=${formatScheduleDate(date)}`}
        className={styles.cellLink}
      />
    </div>
  )
}
