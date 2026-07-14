import { addDays, eachDayOfInterval } from "date-fns"

export const getDates = (year: number, month: number) => {
  const startOfMonth = new Date(year, month - 1, 1)
  const previousDates = 0 - startOfMonth.getDay()
  const startOfDates = addDays(startOfMonth, previousDates)

  const endOfMonth = new Date(year, month, 0)
  const nextDates = 6 - endOfMonth.getDay()
  const endOfDates = addDays(endOfMonth, nextDates)

  return eachDayOfInterval({ start: startOfDates, end: endOfDates })
}
