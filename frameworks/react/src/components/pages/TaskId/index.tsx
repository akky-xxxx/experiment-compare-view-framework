"use client"

import Link from "next/link"
import { Fragment } from "react"

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
  const taskData = [
    {
      label: "ID",
      data: id,
    },
    {
      label: "Title",
      data: title,
    },
    {
      label: "Date",
      data: date,
    },
    {
      label: "Body",
      data: body,
    },
  ] as const satisfies Record<"label" | "data", string>[]

  return (
    <div>
      <dl className={styles.dl}>
        {taskData.map((record) => (
          <Fragment key={record.label}>
            <dt>{record.label}</dt>
            <dd>{record.data}</dd>
          </Fragment>
        ))}
      </dl>

      <div className={styles.editWrapper}>
        <Link href={`/task/edit/${id}`}>edit</Link>
      </div>
    </div>
  )
}
