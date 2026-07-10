import { Fragment } from "react"

import styles from "./index.module.css"

import type { FC, ReactNode } from "react"

type Props = {
  bodyNode: ReactNode
  dateNode: ReactNode
  idNode?: ReactNode
  titleNode: ReactNode
}

type Task = {
  label: string
  data: ReactNode
}

export const TaskDetail: FC<Props> = (props) => {
  const { bodyNode, dateNode, idNode, titleNode } = props
  const taskData: Task[] = []
  if (idNode !== undefined) {
    taskData.push({
      label: "ID",
      data: idNode,
    })
  }
  ;(
    [
      {
        label: "Title",
        data: titleNode,
      },
      {
        label: "Date",
        data: dateNode,
      },
      {
        label: "Body",
        data: bodyNode,
      },
    ] satisfies Task[]
  ).forEach((record) => {
    taskData.push(record)
  })

  return (
    <dl className={styles.root}>
      {taskData.map((record) => (
        <Fragment key={record.label}>
          <dt>{record.label}</dt>
          <dd>{record.data}</dd>
        </Fragment>
      ))}
    </dl>
  )
}
