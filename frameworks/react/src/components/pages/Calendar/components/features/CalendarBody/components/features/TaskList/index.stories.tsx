import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { TaskList } from "./index"

const meta = {
  title: "Pages/Calendar/CalendarBody/Features/TaskList",
  component: TaskList,
  tags: ["autodocs"],
} satisfies Meta<typeof TaskList>

export default meta

type Story = StoryObj<typeof meta>

export const WithTasks: Story = {
  args: {
    taskList: [
      { id: "task-001", title: "Team meeting" },
      { id: "task-002", title: "Design review" },
    ],
  },
}

export const Empty: Story = {
  args: {
    taskList: [],
  },
}
