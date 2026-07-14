<script setup lang="ts">
defineProps<{ direction: "previous" | "next"; handleClick: () => void }>()
</script>

<template>
  <button @click="handleClick">
    {{ direction === "previous" ? "◀" : "▶" }}
  </button>
</template>
