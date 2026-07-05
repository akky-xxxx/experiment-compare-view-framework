import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  today: string
  isCurrentMonth: boolean
}

const getCellColor = (isCurrentMonth: boolean) => {
  return isCurrentMonth ? 1 : 0.6
}

export const CalendarCell: FC<Props> = (props) => {
  const { today, isCurrentMonth } = props
  const cellColor = {
    "--opacity": getCellColor(isCurrentMonth),
  }
  const currentDate = new Date(today).getDate()

  return (
    <div className={styles.root} style={cellColor}>
      <header className={styles.header}>{currentDate}</header>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <button className={styles.liButton}>schedule1</button>
        </li>
        <li className={styles.li}>
          <button className={styles.liButton}>schedule2</button>
        </li>
      </ul>

      <button className={styles.cellButton}></button>
    </div>
  )
}
