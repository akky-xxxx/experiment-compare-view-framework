import type { Meta, StoryObj } from "@storybook/vue3-vite"

import NotFound from "./NotFound.vue"

const meta = {
  title: "Pages/NotFound",
  component: NotFound,
  tags: ["autodocs"],
} satisfies Meta<typeof NotFound>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
