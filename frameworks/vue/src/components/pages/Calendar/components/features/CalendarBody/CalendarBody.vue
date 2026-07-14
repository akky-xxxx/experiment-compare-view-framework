<script setup lang="ts">
import { computed } from "vue"

import CalendarCell from "./components/features/CalendarCell/CalendarCell.vue"
import TaskList from "./components/features/TaskList/TaskList.vue"
import MonthSelector from "./components/layouts/MonthSelector/MonthSelector.vue"
import DayCell from "./components/ui/DayCell/DayCell.vue"
import SiblingMonthButton from "./components/ui/SiblingMonthButton/SiblingMonthButton.vue"
import { getDates } from "./modules/getDates"
import { getTargetTaskList } from "./modules/getTargetTaskList"

import type { Task } from "@/domains/Task"

const props = defineProps<{
  currentMonth: number
  currentYear: number
  handleNextMonthClick: () => void
  handlePreviousMonthClick: () => void
  taskList: readonly Task[]
}>()

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const dates = computed(() => getDates(props.currentYear, props.currentMonth))

const isCurrentMonth = (date: Date) =>
  date.getMonth() + 1 === props.currentMonth

const targetTaskList = (date: Date) =>
  props.taskList.reduce(
    getTargetTaskList(date),
    [] as Pick<Task, "id" | "title">[],
  )
</script>

<template>
  <div :class="$style.root">
    <MonthSelector>
      <template #previousButton>
        <SiblingMonthButton
          direction="previous"
          :handle-click="handlePreviousMonthClick"
        />
      </template>
      <template #month>
        <div>{{ currentMonth }}月</div>
      </template>
      <template #nextButton>
        <SiblingMonthButton
          direction="next"
          :handle-click="handleNextMonthClick"
        />
      </template>
    </MonthSelector>

    <ul :class="$style.ul">
      <li v-for="day in DAYS" :key="day">
        <DayCell :day="day" />
      </li>

      <li v-for="date in dates" :key="date.toISOString()">
        <CalendarCell :date="date" :is-current-month="isCurrentMonth(date)">
          <template #taskList>
            <TaskList :task-list="targetTaskList(date)" />
          </template>
        </CalendarCell>
      </li>
    </ul>
  </div>
</template>

<style module>
.root {
  display: grid;
  row-gap: 8px;
}

.ul {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: 1fr;
  grid-auto-rows: 140px;
  gap: 1px;
  background-color: var(--foreground);
  padding: 1px;
}
</style>
