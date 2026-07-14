import type { Meta, StoryObj } from "@storybook/vue3-vite"

import TaskId from "./TaskId.vue"

const meta = {
  title: "Pages/TaskId",
  component: TaskId,
  tags: ["autodocs"],
} satisfies Meta<typeof TaskId>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "task-001",
  },
}
