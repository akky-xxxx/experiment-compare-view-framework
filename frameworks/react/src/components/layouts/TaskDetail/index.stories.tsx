import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { TaskDetail } from "./index"

const meta = {
  title: "Layouts/TaskDetail",
  component: TaskDetail,
  tags: ["autodocs"],
} satisfies Meta<typeof TaskDetail>

export default meta

type Story = StoryObj<typeof meta>

export const WithoutId: Story = {
  args: {
    titleNode: "Team meeting",
    dateNode: "2026-07-14",
    bodyNode: "Discuss quarterly roadmap.",
  },
}

export const WithId: Story = {
  args: {
    idNode: "task-001",
    titleNode: "Team meeting",
    dateNode: "2026-07-14",
    bodyNode: "Discuss quarterly roadmap.",
  },
}
