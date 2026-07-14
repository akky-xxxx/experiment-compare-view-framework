import { z } from "zod"

import type { SchedulesRequest } from "@/utilities/apiClient/types/SchedulesRequest"

export const FormSchema = z.object({
  body: z.string().min(1),
  date: z.string(),
  title: z.string().min(1),
} satisfies Record<keyof SchedulesRequest, unknown>)
