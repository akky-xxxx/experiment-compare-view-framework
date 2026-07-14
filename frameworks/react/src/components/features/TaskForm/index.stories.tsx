import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { TaskForm } from "./index"

const meta = {
  title: "Features/TaskForm",
  component: TaskForm,
  tags: ["autodocs"],
} satisfies Meta<typeof TaskForm>

export default meta

type Story = StoryObj<typeof meta>

export const Create: Story = {
  args: {
    mode: "create",
  },
}

export const CreateWithDate: Story = {
  args: {
    mode: "create",
    date: "2026-07-14",
  },
}

export const Edit: Story = {
  args: {
    mode: "edit",
    id: "task-001",
  },
}
