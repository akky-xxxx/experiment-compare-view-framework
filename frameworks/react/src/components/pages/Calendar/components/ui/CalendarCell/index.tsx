import styles from "./index.module.css"

import type { FC } from "react"

export const CalendarCell: FC = () => {
  return (
    <div className={styles.root}>
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
