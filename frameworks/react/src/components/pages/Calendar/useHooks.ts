import { useDate } from "./modules/useDate"
import { useTaskList } from "./modules/useTaskList"

export const useHooks = () => {
  const taskList = useTaskList()
  const {
    currentMonth,
    currentYear,
  } = useDate()

  return {
    currentMonth,
    currentYear,
    taskList,
  }
};
