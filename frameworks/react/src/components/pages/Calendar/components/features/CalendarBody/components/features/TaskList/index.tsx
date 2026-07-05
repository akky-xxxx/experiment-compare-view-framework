import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  taskList: readonly string[]
}

export const TaskList: FC<Props> = (props) => {
  const { taskList } = props

  if (taskList.length === 0) return null

  return (
    <ul className={styles.root}>
      {taskList.map((task) => (
        <li key={task} className={styles.li}>
          <button className={styles.liButton}>{task}</button>
        </li>
      ))}
    </ul>
  )
}
