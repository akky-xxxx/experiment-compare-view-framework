import Link from "next/link"

import styles from "./index.module.css"

import type { FC } from "react"
import type { Task } from "@/domains/Task"

type Props = {
  taskList: readonly Pick<Task, "id" | "title">[]
}

export const TaskList: FC<Props> = (props) => {
  const { taskList } = props

  if (taskList.length === 0) return null

  return (
    <ul className={styles.root}>
      {taskList.map((taskData) => {
        const { id, title } = taskData

        return (
          <li key={id} className={styles.li}>
            <Link href={`/task/${id}`} className={styles.listAnchor}>
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
