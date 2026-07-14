import type { Meta, StoryObj } from "@storybook/vue3-vite"

import Top from "./Top.vue"

const meta = {
  title: "Pages/Top",
  component: Top,
  tags: ["autodocs"],
} satisfies Meta<typeof Top>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
