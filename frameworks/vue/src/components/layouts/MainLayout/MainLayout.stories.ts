import type { Meta, StoryObj } from "@storybook/vue3-vite"

import Header from "@/components/ui/Header/Header.vue"

import MainLayout from "./MainLayout.vue"

const meta = {
  title: "Layouts/MainLayout",
  component: MainLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof MainLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MainLayout, Header },
    template: `
      <MainLayout>
        <template #header><Header /></template>
        <p>Main content</p>
      </MainLayout>
    `,
  }),
}
