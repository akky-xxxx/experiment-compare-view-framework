import { useEffect, useState } from "react"
import { apiClient } from "@/utilities/apiClient"

import { ScheduleIdResponse } from "@/utilities/apiClient/types/ScheduleIdResponse"

type Input = Pick<ScheduleIdResponse, "id">

export const useHooks = (input: Input) => {
  const { id } = input
  const [task, setTask] = useState<ScheduleIdResponse | null>(null)

  useEffect(() => {
    apiClient
      .getScheduleId(id)
      .then((response) => {
        setTask(response.data)
      })
      .catch((error: unknown) => {
        console.log(error)
      })
  }, [])

  return { task }
}
