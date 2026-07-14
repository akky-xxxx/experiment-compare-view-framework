<script setup lang="ts">
import TaskForm from "@/components/features/TaskForm/TaskForm.vue"

defineProps<{ date?: string }>()
</script>

<template>
  <TaskForm mode="create" :date="date" />
</template>
