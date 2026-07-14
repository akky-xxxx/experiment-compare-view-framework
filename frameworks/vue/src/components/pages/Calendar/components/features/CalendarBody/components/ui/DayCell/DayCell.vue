<script setup lang="ts">
defineProps<{ day: string }>()
</script>

<template>
  <div :class="$style.root">{{ day }}</div>
</template>

<style module>
.root {
  background-color: var(--secondary-background);
  padding: 8px;
  text-align: center;
}
</style>
