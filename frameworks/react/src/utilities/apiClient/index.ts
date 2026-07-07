import axios from "axios"

import type { SchedulesResponse } from "./types/SchedulesResponse"

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
})

export const apiClient = {
  schedules: () => axiosInstance.get<SchedulesResponse>("/schedules"),
} as const
