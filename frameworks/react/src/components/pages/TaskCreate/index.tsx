"use client"

import { TaskDetail } from "@/components/layouts/TaskDetail"

import { useHooks } from "./useHooks"

import styles from "./index.module.css"

import type { FC } from "react"

type Props = {
  date?: string
}

export const TaskCreate: FC<Props> = (props) => {
  const { isEnabledSubmit, onSubmit, register } = useHooks(props)

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
