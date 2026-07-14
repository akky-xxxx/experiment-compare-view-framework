import type { Meta, StoryObj } from "@storybook/vue3-vite"

import Calendar from "./Calendar.vue"

const meta = {
  title: "Pages/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
