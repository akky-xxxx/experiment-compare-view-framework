import { zodResolver } from "@hookform/resolvers/zod"
import { apiClient } from "@/utilities/apiClient"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod/mini"

import { FormSchema } from "./schemas/FormSchema"

export type Input =
  | { mode: "create"; date?: string }
  | { mode: "edit"; id: string }

export const useTaskForm = (input: Input) => {
  const { formState, handleSubmit, register, setValues } = useForm<
    z.infer<typeof FormSchema>
  >({
    resolver: zodResolver(FormSchema),
  })
  const router = useRouter()
  const { isDirty, isValid } = formState
  const isEnabledSubmit = [isDirty, isValid].every(Boolean)

  const onSubmit = handleSubmit((data) => {
    const response =
      input.mode === "edit"
        ? apiClient.putScheduleId({ ...data, id: input.id })
        : apiClient.postSchedules(data)

    response.then(() => {
      router.push("/calendar")
    })
  })

  useEffect(() => {
    if (input.mode === "edit") {
      apiClient.getScheduleId(input.id).then((response) => {
        setValues(response.data)
      })
      return
    }

    if (input.date !== undefined) {
      setValues({ date: input.date })
    }
  }, [])

  return { isEnabledSubmit, onSubmit, register }
}
