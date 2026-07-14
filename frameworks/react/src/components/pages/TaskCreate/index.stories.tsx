import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { TaskCreate } from "./index"

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
