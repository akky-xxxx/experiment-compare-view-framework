import { onMounted, ref } from "vue"

import { apiClient } from "@/utilities/apiClient"

import type { ScheduleIdResponse } from "@/utilities/apiClient/types/ScheduleIdResponse"

type Input = Pick<ScheduleIdResponse, "id">

export const useHooks = (input: Input) => {
  const { id } = input
  const task = ref<ScheduleIdResponse | null>(null)

  onMounted(() => {
    apiClient.getScheduleId(id).then((response) => {
      task.value = response.data
    })
  })

  return { task }
}
