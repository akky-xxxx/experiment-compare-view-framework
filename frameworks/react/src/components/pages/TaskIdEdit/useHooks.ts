import { zodResolver } from "@hookform/resolvers/zod"
import { apiClient } from "@/utilities/apiClient"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod/mini"

import type { ScheduleIdResponse } from "@/utilities/apiClient/types/ScheduleIdResponse"

type Input = Pick<ScheduleIdResponse, "id">

const schema = z.object({
  body: z.string().check(z.minLength(1)),
  date: z.string(),
  title: z.string().check(z.minLength(1)),
} satisfies Record<keyof Omit<ScheduleIdResponse, "id">, unknown>)
type Schema = z.infer<typeof schema>

export const useHooks = (input: Input) => {
  const { id } = input
  const { formState, handleSubmit, register, setValues } = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  const { isDirty, isValid } = formState
  const isEnabledSubmit = [isDirty, isValid].every(Boolean)
  const onSubmit = handleSubmit((data) => {
    // TODO: implement submit logic
    console.log(`submit: ${JSON.stringify(data)}`)
  })

  useEffect(() => {
    apiClient
      .getScheduleId(id)
      .then((response) => {
        setValues(response.data)
      })
      .catch((error: unknown) => {
        console.log(error)
      })
  }, [])

  return { isEnabledSubmit, onSubmit, register }
}
