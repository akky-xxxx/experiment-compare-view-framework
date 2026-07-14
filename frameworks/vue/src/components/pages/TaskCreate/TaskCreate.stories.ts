import type { Meta, StoryObj } from "@storybook/vue3-vite"

import TaskCreate from "./TaskCreate.vue"

const meta = {
  title: "Pages/TaskCreate",
  component: TaskCreate,
  tags: ["autodocs"],
} satisfies Meta<typeof TaskCreate>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithDate: Story = {
  args: {
    date: "2026-07-14",
  },
}
