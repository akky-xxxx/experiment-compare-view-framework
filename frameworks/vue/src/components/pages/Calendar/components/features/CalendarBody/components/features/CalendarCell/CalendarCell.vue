<script setup lang="ts">
import { computed } from "vue"

import { formatScheduleDate } from "@/utilities/formatScheduleDate"

const props = defineProps<{
  date: Date
  isCurrentMonth: boolean
}>()

const cellOpacity = computed(() => (props.isCurrentMonth ? 1 : 0.6))
const currentDate = computed(() => props.date.getDate())
const createHref = computed(
  () => `/task/create?date=${formatScheduleDate(props.date)}`,
)
</script>

<template>
  <div :class="$style.root" :style="{ '--opacity': cellOpacity }">
    <header :class="$style.header">{{ currentDate }}</header>

    <slot name="taskList" />

    <RouterLink :to="createHref" :class="$style.cellLink" />
  </div>
</template>

<style module>
.root {
  background-color: var(--secondary-background);
  position: relative;
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  opacity: var(--opacity);
  height: 100%;
  justify-content: flex-start;
}

.header {
  position: relative;
  z-index: 20;
  pointer-events: none;
}

.cellLink {
  position: absolute;
  inset: 0;
  z-index: 10;
}
</style>
