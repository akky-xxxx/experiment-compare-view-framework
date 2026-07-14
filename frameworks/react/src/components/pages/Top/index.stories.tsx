import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Top } from "./index"

const meta = {
  title: "Pages/Top",
  component: Top,
  tags: ["autodocs"],
} satisfies Meta<typeof Top>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
