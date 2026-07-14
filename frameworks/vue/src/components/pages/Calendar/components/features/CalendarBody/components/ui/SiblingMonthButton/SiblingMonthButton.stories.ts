import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { fn } from "storybook/test"

import SiblingMonthButton from "./SiblingMonthButton.vue"

const meta = {
  title: "Pages/Calendar/CalendarBody/UI/SiblingMonthButton",
  component: SiblingMonthButton,
  tags: ["autodocs"],
  args: { handleClick: fn() },
} satisfies Meta<typeof SiblingMonthButton>

export default meta

type Story = StoryObj<typeof meta>

export const Previous: Story = {
  args: {
    direction: "previous",
  },
}

export const Next: Story = {
  args: {
    direction: "next",
  },
}
