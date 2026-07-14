import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { fn } from "storybook/test"

import { SiblingMonthButton } from "./index"

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
