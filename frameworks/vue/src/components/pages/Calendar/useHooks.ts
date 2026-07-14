import { useDate } from "./modules/useDate"
import { useTaskList } from "./modules/useTaskList"

export const useHooks = () => {
  const taskList = useTaskList()
  const {
    currentMonth,
    currentYear,
    handleNextMonthClick,
    handlePreviousMonthClick,
  } = useDate()

  return {
    currentMonth,
    currentYear,
    handleNextMonthClick,
    handlePreviousMonthClick,
    taskList,
  }
}
