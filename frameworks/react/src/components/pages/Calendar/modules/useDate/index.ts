import { useState } from "react"

export const useDate = () => {
  const [today, setToday] = useState(new Date())
  const currentMonth = today.getMonth() + 1
  const currentYear = today.getFullYear()

  return {
    currentMonth,
    currentYear,
  }
}
