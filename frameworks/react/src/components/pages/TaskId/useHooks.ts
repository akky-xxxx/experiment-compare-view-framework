import type { Task } from "@/domains/Task"
import {useEffect} from "react"
import {apiClient} from "@/utilities/apiClient"

type Input = Pick<Task, "id">

export const useHooks = (input: Input) => {
  const { id } = input

  useEffect(() => {
    apiClient.schedules().then((response) => {
      const targetTask = response.data.find((task) => task.id === id) ?? null
    })
  }, []);
}
