"use client"

import { CalendarBody } from "./components/features/CalendarBody"
import { useHooks } from "./useHooks"

import type { FC } from "react"

export const Calendar: FC = () => {
  const props = useHooks()

  return (
    <div>
      <CalendarBody {...props} currentMonth={7} currentYear={2026} />
    </div>
  )
}
