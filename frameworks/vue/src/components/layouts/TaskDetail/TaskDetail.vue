<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <dl :class="$style.root">
    <template v-if="id !== undefined">
      <dt>ID</dt>
      <dd>{{ id }}</dd>
    </template>

    <dt>Title</dt>
    <dd><slot name="title" /></dd>

    <dt>Date</dt>
    <dd><slot name="date" /></dd>

    <dt>Body</dt>
    <dd><slot name="body" /></dd>
  </dl>
</template>

<style module>
.root {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
}
</style>
