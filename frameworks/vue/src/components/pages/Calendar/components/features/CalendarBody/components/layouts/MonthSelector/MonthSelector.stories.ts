import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { fn } from "storybook/test"

import SiblingMonthButton from "../../ui/SiblingMonthButton/SiblingMonthButton.vue"

import MonthSelector from "./MonthSelector.vue"

const meta = {
  title: "Pages/Calendar/CalendarBody/Layouts/MonthSelector",
  component: MonthSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof MonthSelector>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MonthSelector, SiblingMonthButton },
    setup: () => ({ handleClick: fn() }),
    template: `
      <MonthSelector>
        <template #previousButton>
          <SiblingMonthButton direction="previous" :handleClick="handleClick" />
        </template>
        <template #month><div>7月</div></template>
        <template #nextButton>
          <SiblingMonthButton direction="next" :handleClick="handleClick" />
        </template>
      </MonthSelector>
    `,
  }),
}
