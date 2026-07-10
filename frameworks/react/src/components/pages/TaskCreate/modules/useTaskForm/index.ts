import { zodResolver } from "@hookform/resolvers/zod"
import { apiClient } from "@/utilities/apiClient"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod/mini"

import { FormSchema } from "./schemas/FormSchema"

type Input = {
  date?: string
}

export const useTaskForm = (input: Input) => {
  const { date } = input
  const { formState, handleSubmit, register, setValues } = useForm<
    z.infer<typeof FormSchema>
  >({
    resolver: zodResolver(FormSchema),
  })
  const router = useRouter()
  const { isDirty, isValid } = formState
  const isEnabledSubmit = [isDirty, isValid].every(Boolean)
  const onSubmit = handleSubmit((data) => {
    apiClient.postSchedules(data).then(() => {
      router.push("/calendar")
    })
  })

  useEffect(() => {
    if (date === undefined) return

    setValues({ date })
  }, [])

  return { isEnabledSubmit, onSubmit, register }
}
