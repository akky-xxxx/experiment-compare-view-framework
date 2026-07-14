import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { TaskIdEdit } from "./index"

const meta = {
  title: "Pages/TaskIdEdit",
  component: TaskIdEdit,
  tags: ["autodocs"],
} satisfies Meta<typeof TaskIdEdit>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "task-001",
  },
}
