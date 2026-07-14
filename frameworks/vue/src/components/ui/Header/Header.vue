<script setup lang="ts">
const NAVIGATION_DATA = [
  { label: "Top", href: "/" },
  { label: "Calendar", href: "/calendar" },
  { label: "Create schedule", href: "/task/create" },
] as const
</script>

<template>
  <header :class="$style.header">
    <nav>
      <ul :class="$style.ul">
        <li v-for="navigation in NAVIGATION_DATA" :key="navigation.href">
          <RouterLink :to="navigation.href">{{ navigation.label }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style module>
.header {
  border-bottom: 1px solid var(--foreground);
  padding: 12px;
}

.ul {
  display: flex;
  column-gap: 8px;
}
</style>
