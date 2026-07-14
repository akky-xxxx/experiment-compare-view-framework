import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Calendar } from "./index"

const meta = {
  title: "Pages/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
