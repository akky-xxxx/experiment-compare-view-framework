"use client"

import { TaskDetail } from "@/components/layouts/TaskDetail"

import { useTaskForm } from "./modules/useTaskForm"

import styles from "./index.module.css"

import type { Input } from "./modules/useTaskForm"
import type { FC } from "react"

type Props = Input

export const TaskForm: FC<Props> = (props) => {
  const { isEnabledSubmit, onSubmit, register } = useTaskForm(props)
  const idNode = props.mode === "edit" ? props.id : undefined

  return (
    <form onSubmit={onSubmit}>
      <TaskDetail
        bodyNode={
          <textarea className={styles.inputElement} {...register("body")} />
        }
        dateNode={
          <input
            type="text"
            className={styles.inputElement}
            {...register("date")}
          />
        }
        idNode={idNode}
        titleNode={
          <input
            type="text"
            className={styles.inputElement}
            {...register("title")}
          />
        }
      />

      <div className={styles.registerWrapper}>
        <button disabled={!isEnabledSubmit} type="submit">
          Register
        </button>
      </div>
    </form>
  )
}
