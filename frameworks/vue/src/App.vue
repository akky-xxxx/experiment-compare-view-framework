<script setup lang="ts">
import MainLayout from "./components/layouts/MainLayout/MainLayout.vue"
import Header from "./components/ui/Header/Header.vue"
</script>

<template>
  <MainLayout>
    <template #header>
      <Header />
    </template>

    <RouterView />
  </MainLayout>
</template>
