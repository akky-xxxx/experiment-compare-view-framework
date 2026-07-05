import { CalendarBody } from "./components/features/CalendarBody"

import type { FC } from "react"

export const Calendar: FC = () => {
  return (
    <div>
      <CalendarBody currentMonth={7} currentYear={2026} />
    </div>
  )
}
