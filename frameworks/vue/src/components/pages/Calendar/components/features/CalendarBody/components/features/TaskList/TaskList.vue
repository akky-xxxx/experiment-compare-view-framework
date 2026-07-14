<script setup lang="ts">
import type { Task } from "@/domains/Task"

defineProps<{ taskList: readonly Pick<Task, "id" | "title">[] }>()
</script>

<template>
  <ul v-if="taskList.length > 0" :class="$style.root">
    <li v-for="taskData in taskList" :key="taskData.id" :class="$style.li">
      <RouterLink :to="`/task/${taskData.id}`" :class="$style.listAnchor">{{
        taskData.title
      }}</RouterLink>
    </li>
  </ul>
</template>

<style module>
.root {
  display: flex;
  row-gap: 4px;
  z-index: 20;
  flex-direction: column;
}

.li {
  overflow: hidden;
}

.listAnchor {
  display: block;
  width: 100%;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
}

.listAnchor:hover {
  text-decoration: underline;
}
</style>
