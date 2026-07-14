import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { TaskList } from "../TaskList"

import { CalendarCell } from "./index"

const meta = {
  title: "Pages/Calendar/CalendarBody/Features/CalendarCell",
  component: CalendarCell,
  tags: ["autodocs"],
} satisfies Meta<typeof CalendarCell>

export default meta

type Story = StoryObj<typeof meta>

export const CurrentMonthWithTasks: Story = {
  args: {
    date: new Date(2026, 6, 14),
    isCurrentMonth: true,
    taskListElement: (
      <TaskList
        taskList={[
          { id: "task-001", title: "Team meeting" },
          { id: "task-002", title: "Design review" },
        ]}
      />
    ),
  },
}

export const CurrentMonthNoTasks: Story = {
  args: {
    date: new Date(2026, 6, 15),
    isCurrentMonth: true,
    taskListElement: <TaskList taskList={[]} />,
  },
}

export const OtherMonth: Story = {
  args: {
    date: new Date(2026, 6, 1),
    isCurrentMonth: false,
    taskListElement: <TaskList taskList={[]} />,
  },
}
