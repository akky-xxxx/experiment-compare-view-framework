import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  isCurrentMonth: boolean
}

const getCellColor = (isCurrentMonth: boolean) => {
  return isCurrentMonth ? 1 : 0.6
}

export const CalendarCell: FC<Props> = (props) => {
  const { isCurrentMonth } = props
  const cellColor = {
    "--opacity": getCellColor(isCurrentMonth),
  }

  return (
    <div className={styles.root} style={cellColor}>
      <header className={styles.header}>12</header>

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
