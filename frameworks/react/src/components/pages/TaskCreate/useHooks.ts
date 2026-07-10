import { useTaskForm } from "./modules/useTaskForm"

type Input = {
  date?: string
}

export const useHooks = (input: Input) => {
  const { date } = input
  const { isEnabledSubmit, onSubmit, register } = useTaskForm({ date })

  return { isEnabledSubmit, onSubmit, register }
}
