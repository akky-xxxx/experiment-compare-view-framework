import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { fn } from "storybook/test"

import { CalendarBody } from "./index"

import type { Task } from "@/domains/Task"

const TASK_LIST: Task[] = [
  { id: "task-001", date: "2026-07-03", title: "Team meeting" },
  { id: "task-002", date: "2026-07-03", title: "Design review" },
  { id: "task-003", date: "2026-07-14", title: "Release" },
]

const meta = {
  title: "Pages/Calendar/Features/CalendarBody",
  component: CalendarBody,
  tags: ["autodocs"],
  args: {
    handleNextMonthClick: fn(),
    handlePreviousMonthClick: fn(),
  },
} satisfies Meta<typeof CalendarBody>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentYear: 2026,
    currentMonth: 7,
    taskList: TASK_LIST,
  },
}

export const NoTasks: Story = {
  args: {
    currentYear: 2026,
    currentMonth: 7,
    taskList: [],
  },
}
