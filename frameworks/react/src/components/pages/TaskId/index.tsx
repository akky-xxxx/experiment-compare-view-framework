"use client"

import Link from "next/link"

import { TaskDetail } from "@/components/layouts/TaskDetail"

import { useHooks } from "./useHooks"

import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  id: string
}

export const TaskId: FC<Props> = (props) => {
  const { task } = useHooks(props)

  if (task === null) return null

  const { body, date, id, title } = task

  return (
    <div>
      <TaskDetail
        bodyNode={body}
        dateNode={date}
        idNode={id}
        titleNode={title}
      />

      <div className={styles.editWrapper}>
        <Link href={`/task/${id}/edit`}>edit</Link>
      </div>
    </div>
  )
}
