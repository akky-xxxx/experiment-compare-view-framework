import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { DayCell } from "./index"

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
