import { zodResolver } from "@hookform/resolvers/zod"
import { apiClient } from "@/utilities/apiClient"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod/mini"

import { FormSchema } from "./schemas/FormSchema"

import type { ScheduleIdResponse } from "@/utilities/apiClient/types/ScheduleIdResponse"

type Input = Pick<ScheduleIdResponse, "id">

export const useTaskForm = (input: Input) => {
  const { id } = input
  const { formState, handleSubmit, register, setValues } = useForm<
    z.infer<typeof FormSchema>
  >({
    resolver: zodResolver(FormSchema),
  })
  const router = useRouter()
  const { isDirty, isValid } = formState
  const isEnabledSubmit = [isDirty, isValid].every(Boolean)
  const onSubmit = handleSubmit((data) => {
    apiClient
      .putScheduleId({
        ...data,
        id,
      })
      .then(() => {
        router.push("/calendar")
      })
      .catch((error: unknown) => {
        console.log(error)
      })
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

  return { isEnabledSubmit, onSubmit, register, setValues }
}
