import styles from "./index.module.css"

import type { FC } from "react"
import type { Task } from "@/domains/Task"

type Props = {
  taskList: readonly Pick<Task, "id" | "task">[]
}

export const TaskList: FC<Props> = (props) => {
  const { taskList } = props

  if (taskList.length === 0) return null

  return (
    <ul className={styles.root}>
      {taskList.map((taskData) => {
        const { id, task } = taskData

        return (
          <li key={id} className={styles.li}>
            <button className={styles.liButton}>{task}</button>
          </li>
        )
      })}
    </ul>
  )
}
