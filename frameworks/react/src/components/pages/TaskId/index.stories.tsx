import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { TaskId } from "./index"

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
