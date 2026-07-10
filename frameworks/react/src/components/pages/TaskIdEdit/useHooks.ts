import { useTaskForm } from "./modules/useTaskForm"

import type { ScheduleIdResponse } from "@/utilities/apiClient/types/ScheduleIdResponse"

type Input = Pick<ScheduleIdResponse, "id">

export const useHooks = (input: Input) => {
  const { id } = input
  const { isEnabledSubmit, onSubmit, register } = useTaskForm({ id })

  return { isEnabledSubmit, onSubmit, register }
}
