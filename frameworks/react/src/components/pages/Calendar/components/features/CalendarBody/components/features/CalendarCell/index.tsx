import styles from "./index.module.css"

import type { CSSProperties, FC, ReactElement } from "react"

type Props = {
  today: string
  isCurrentMonth: boolean
  taskListComponent: ReactElement
}

const getCellColor = (isCurrentMonth: boolean) => {
  return isCurrentMonth ? 1 : 0.6
}

export const CalendarCell: FC<Props> = (props) => {
  const { today, isCurrentMonth, taskListComponent } = props
  const cellColor = {
    "--opacity": getCellColor(isCurrentMonth),
  } as CSSProperties
  const currentDate = new Date(today).getDate()

  return (
    <div className={styles.root} style={cellColor}>
      <header className={styles.header}>{currentDate}</header>

      {taskListComponent}

      <button className={styles.cellButton}></button>
    </div>
  )
}
