<script setup lang="ts">
import TaskDetail from "@/components/layouts/TaskDetail/TaskDetail.vue"

import { useTaskForm } from "./modules/useTaskForm"

import type { Input } from "./modules/useTaskForm"

const props = defineProps<{
  mode: Input["mode"]
  id?: string
  date?: string
}>()

const input: Input =
  props.mode === "edit" && props.id !== undefined
    ? { mode: "edit", id: props.id }
    : { mode: "create", date: props.date }

const {
  body,
  bodyAttrs,
  date: dateValue,
  dateAttrs,
  isEnabledSubmit,
  onSubmit,
  title,
  titleAttrs,
} = useTaskForm(input)
</script>

<template>
  <form @submit="onSubmit">
    <TaskDetail :id="mode === 'edit' ? id : undefined">
      <template #title>
        <input
          v-model="title"
          v-bind="titleAttrs"
          type="text"
          :class="$style.inputElement"
        />
      </template>
      <template #date>
        <input
          v-model="dateValue"
          v-bind="dateAttrs"
          type="text"
          :class="$style.inputElement"
        />
      </template>
      <template #body>
        <textarea
          v-model="body"
          v-bind="bodyAttrs"
          :class="$style.inputElement"
        />
      </template>
    </TaskDetail>

    <div :class="$style.registerWrapper">
      <button type="submit" :disabled="!isEnabledSubmit">Register</button>
    </div>
  </form>
</template>

<style module>
.inputElement {
  padding: 4px;
  width: 100%;
}

.registerWrapper {
  margin-top: 16px;
}
</style>
