import type { Meta, StoryObj } from "@storybook/vue3-vite"

import TaskDetail from "./TaskDetail.vue"

const meta = {
  title: "Layouts/TaskDetail",
  component: TaskDetail,
  tags: ["autodocs"],
} satisfies Meta<typeof TaskDetail>

export default meta

type Story = StoryObj<typeof meta>

export const WithoutId: Story = {
  render: () => ({
    components: { TaskDetail },
    template: `
      <TaskDetail>
        <template #title>Team meeting</template>
        <template #date>2026-07-14</template>
        <template #body>Discuss quarterly roadmap.</template>
      </TaskDetail>
    `,
  }),
}

export const WithId: Story = {
  render: () => ({
    components: { TaskDetail },
    template: `
      <TaskDetail id="task-001">
        <template #title>Team meeting</template>
        <template #date>2026-07-14</template>
        <template #body>Discuss quarterly roadmap.</template>
      </TaskDetail>
    `,
  }),
}
