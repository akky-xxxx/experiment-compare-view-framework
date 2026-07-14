import type { Meta, StoryObj } from "@storybook/vue3-vite"

import TaskList from "../TaskList/TaskList.vue"

import CalendarCell from "./CalendarCell.vue"

const meta = {
  title: "Pages/Calendar/CalendarBody/Features/CalendarCell",
  component: CalendarCell,
  tags: ["autodocs"],
} satisfies Meta<typeof CalendarCell>

export default meta

type Story = StoryObj<typeof meta>

export const CurrentMonthWithTasks: Story = {
  render: (args) => ({
    components: { CalendarCell, TaskList },
    setup: () => ({ args }),
    template: `
      <CalendarCell v-bind="args">
        <template #taskList>
          <TaskList :taskList="[
            { id: 'task-001', title: 'Team meeting' },
            { id: 'task-002', title: 'Design review' },
          ]" />
        </template>
      </CalendarCell>
    `,
  }),
  args: {
    date: new Date(2026, 6, 14),
    isCurrentMonth: true,
  },
}

export const CurrentMonthNoTasks: Story = {
  render: (args) => ({
    components: { CalendarCell, TaskList },
    setup: () => ({ args }),
    template: `
      <CalendarCell v-bind="args">
        <template #taskList>
          <TaskList :taskList="[]" />
        </template>
      </CalendarCell>
    `,
  }),
  args: {
    date: new Date(2026, 6, 15),
    isCurrentMonth: true,
  },
}

export const OtherMonth: Story = {
  render: (args) => ({
    components: { CalendarCell, TaskList },
    setup: () => ({ args }),
    template: `
      <CalendarCell v-bind="args">
        <template #taskList>
          <TaskList :taskList="[]" />
        </template>
      </CalendarCell>
    `,
  }),
  args: {
    date: new Date(2026, 6, 1),
    isCurrentMonth: false,
  },
}
