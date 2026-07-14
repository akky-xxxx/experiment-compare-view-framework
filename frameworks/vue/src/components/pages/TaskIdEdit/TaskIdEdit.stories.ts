import type { Meta, StoryObj } from "@storybook/vue3-vite"

import TaskIdEdit from "./TaskIdEdit.vue"

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
