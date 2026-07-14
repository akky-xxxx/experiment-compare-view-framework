import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { fn } from "storybook/test"

import { SiblingMonthButton } from "../../ui/SiblingMonthButton"

import { MonthSelector } from "./index"

const meta = {
  title: "Pages/Calendar/CalendarBody/Layouts/MonthSelector",
  component: MonthSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof MonthSelector>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    monthElement: <div>7月</div>,
    previousButtonElement: (
      <SiblingMonthButton direction="previous" handleClick={fn()} />
    ),
    nextButtonElement: (
      <SiblingMonthButton direction="next" handleClick={fn()} />
    ),
  },
}
