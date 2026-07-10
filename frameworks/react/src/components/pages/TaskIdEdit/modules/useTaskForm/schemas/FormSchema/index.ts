import * as z from "zod/mini"

import type { ScheduleIdResponse } from "@/utilities/apiClient/types/ScheduleIdResponse"

export const FormSchema = z.object({
  body: z.string().check(z.minLength(1)),
  date: z.string(),
  title: z.string().check(z.minLength(1)),
} satisfies Record<keyof Omit<ScheduleIdResponse, "id">, unknown>)
