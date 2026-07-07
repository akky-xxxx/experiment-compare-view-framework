import { addMonths } from "date-fns"
import { useState } from "react"

export const useDate = () => {
  const [today, setToday] = useState(new Date())
  const currentMonth = today.getMonth() + 1
  const currentYear = today.getFullYear()

  const handleNextMonthClick = () => {
    setToday((current) => addMonths(current, 1))
  }
  const handlePreviousMonthClick = () => {
    setToday((current) => addMonths(current, -1))
  }

  return {
    currentMonth,
    currentYear,
    handleNextMonthClick,
    handlePreviousMonthClick,
  }
}
