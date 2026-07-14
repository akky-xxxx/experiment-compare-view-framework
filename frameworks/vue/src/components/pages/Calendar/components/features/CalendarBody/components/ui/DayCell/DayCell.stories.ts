import type { Meta, StoryObj } from "@storybook/vue3-vite"

import DayCell from "./DayCell.vue"

const meta = {
  title: "Pages/Calendar/CalendarBody/UI/DayCell",
  component: DayCell,
  tags: ["autodocs"],
} satisfies Meta<typeof DayCell>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    day: "Sun",
  },
}
