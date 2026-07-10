import axios from "axios"

import type { SchedulesResponse } from "./types/SchedulesResponse"
import type { ScheduleIdResponse } from "./types/ScheduleIdResponse"

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
})

export const apiClient = {
  schedules: () => axiosInstance.get<SchedulesResponse>("/schedules"),
  scheduleId: (id: string) =>
    axiosInstance.get<ScheduleIdResponse>(`/schedules/${id}`),
} as const
