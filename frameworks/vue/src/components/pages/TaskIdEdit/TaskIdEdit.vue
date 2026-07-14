<script setup lang="ts">
import TaskForm from "@/components/features/TaskForm/TaskForm.vue"

defineProps<{ id: string }>()
</script>

<template>
  <TaskForm :id="id" mode="edit" />
</template>
