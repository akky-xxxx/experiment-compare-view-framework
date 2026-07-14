import { onMounted, ref } from "vue"

import { apiClient } from "@/utilities/apiClient"
import { formatScheduleDate } from "@/utilities/formatScheduleDate"

import type { Task } from "@/domains/Task"

export const useTaskList = () => {
  const taskList = ref<Task[]>([])

  onMounted(() => {
    apiClient.getSchedules().then((response) => {
      taskList.value = response.data.map((schedule) => {
        const { id, date, title } = schedule

        return {
          id,
          date: formatScheduleDate(new Date(date)),
          title,
        }
      })
    })
  })

  return taskList
}
