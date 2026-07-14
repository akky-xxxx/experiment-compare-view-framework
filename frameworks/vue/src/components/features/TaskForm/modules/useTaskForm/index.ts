import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import { computed } from "vue"
import { useRouter } from "vue-router"

import { apiClient } from "@/utilities/apiClient"

import { FormSchema } from "./schemas/FormSchema"

export type Input =
  | { mode: "create"; date?: string }
  | { mode: "edit"; id: string }

export const useTaskForm = (input: Input) => {
  const router = useRouter()
  const { defineField, handleSubmit, meta, setValues } = useForm({
    validationSchema: toTypedSchema(FormSchema),
  })

  const [title, titleAttrs] = defineField("title")
  const [date, dateAttrs] = defineField("date")
  const [body, bodyAttrs] = defineField("body")

  const isEnabledSubmit = computed(() => meta.value.dirty && meta.value.valid)

  const onSubmit = handleSubmit((values) => {
    const response =
      input.mode === "edit"
        ? apiClient.putScheduleId({ ...values, id: input.id })
        : apiClient.postSchedules(values)

    response.then(() => {
      router.push("/calendar")
    })
  })

  if (input.mode === "edit") {
    apiClient.getScheduleId(input.id).then((response) => {
      setValues(response.data)
    })
  } else if (input.date !== undefined) {
    setValues({ date: input.date })
  }

  return {
    body,
    bodyAttrs,
    date,
    dateAttrs,
    isEnabledSubmit,
    onSubmit,
    title,
    titleAttrs,
  }
}
