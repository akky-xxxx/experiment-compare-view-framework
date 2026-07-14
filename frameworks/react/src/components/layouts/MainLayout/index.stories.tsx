import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Header } from "@/components/ui/Header"

import { MainLayout } from "./index"

const meta = {
  title: "Layouts/MainLayout",
  component: MainLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof MainLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    headerComponent: <Header />,
    children: <p>Main content</p>,
  },
}
