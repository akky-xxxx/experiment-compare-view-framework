<script setup lang="ts">
import CalendarBody from "./components/features/CalendarBody/CalendarBody.vue"
import { useHooks } from "./useHooks"

const {
  currentMonth,
  currentYear,
  handleNextMonthClick,
  handlePreviousMonthClick,
  taskList,
} = useHooks()
</script>

<template>
  <div>
    <CalendarBody
      :current-month="currentMonth"
      :current-year="currentYear"
      :handle-next-month-click="handleNextMonthClick"
      :handle-previous-month-click="handlePreviousMonthClick"
      :task-list="taskList"
    />
  </div>
</template>
