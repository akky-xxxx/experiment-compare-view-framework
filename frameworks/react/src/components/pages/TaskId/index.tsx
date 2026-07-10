"use client"

import { useHooks } from "./useHooks"

import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  id: string
}

export const TaskId: FC<Props> = (props) => {
  const { id } = props

  const { task } = useHooks({ id })

  if (task === null) return null

  return (
    <dl className={styles.root}>
      <dt>ID</dt>
      <dd>{task.id}</dd>

      <dt>title</dt>
      <dd>{task.title}</dd>

      <dt>date</dt>
      <dd>{task.date}</dd>

      <dt>body</dt>
      <dd>{task.body}</dd>
    </dl>
  )
}
