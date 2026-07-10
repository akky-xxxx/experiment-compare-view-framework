"use client"

import { TaskDetail } from "@/components/layouts/TaskDetail"

import { useHooks } from "./useHooks"

import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  id: string
}

export const TaskIdEdit: FC<Props> = (props) => {
  const { task } = useHooks(props)

  if (task === null) return null

  const { body, date, id, title } = task

  return (
    <form>
      <TaskDetail
        bodyNode={<textarea className={styles.inputElement}>{body}</textarea>}
        dateNode={
          <input type="text" value={date} className={styles.inputElement} />
        }
        idNode={id}
        titleNode={
          <input type="text" value={title} className={styles.inputElement} />
        }
      />

      <div className={styles.registerWrapper}>
        <button type="submit">Register</button>
      </div>
    </form>
  )
}
