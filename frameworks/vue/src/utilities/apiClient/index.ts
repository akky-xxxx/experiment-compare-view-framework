import axios from "axios"

import type { SchedulesRequest } from "./types/SchedulesRequest"
import type { SchedulesResponse } from "./types/SchedulesResponse"
import type { ScheduleIdRequest } from "./types/ScheduleIdRequest"
import type { ScheduleIdResponse } from "./types/ScheduleIdResponse"

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
})

axiosInstance.interceptors.response.use(
  (axiosResponse) => {
    return axiosResponse
  },
  (error: unknown) => {
    console.error(error)
    return Promise.reject(error)
  },
)

export const apiClient = {
  getSchedules: () => axiosInstance.get<SchedulesResponse>("/schedules"),
  getScheduleId: (id: string) =>
    axiosInstance.get<ScheduleIdResponse>(`/schedules/${id}`),
  postSchedules: (requestBody: SchedulesRequest) =>
    axiosInstance.post<ScheduleIdResponse>("/schedules", requestBody),
  putScheduleId: (requestBody: ScheduleIdRequest) =>
    axiosInstance.put(`/schedules/${requestBody.id}`, requestBody),
} as const
