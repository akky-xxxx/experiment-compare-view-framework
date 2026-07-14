<script setup lang="ts">
import TaskDetail from "@/components/layouts/TaskDetail/TaskDetail.vue"

import { useHooks } from "./useHooks"

const props = defineProps<{ id: string }>()

const { task } = useHooks(props)
</script>

<template>
  <div v-if="task !== null">
    <TaskDetail :id="task.id">
      <template #title>{{ task.title }}</template>
      <template #date>{{ task.date }}</template>
      <template #body>{{ task.body }}</template>
    </TaskDetail>

    <div :class="$style.editWrapper">
      <RouterLink :to="`/task/${task.id}/edit`">edit</RouterLink>
    </div>
  </div>
</template>

<style module>
.editWrapper {
  margin-top: 16px;
}
</style>
