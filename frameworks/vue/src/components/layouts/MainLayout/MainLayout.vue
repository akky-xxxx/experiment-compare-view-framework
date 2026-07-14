<template>
  <div :class="$style.root">
    <div :class="$style.headerWrapper">
      <slot name="header" />
    </div>

    <main :class="$style.main">
      <slot />
    </main>
  </div>
</template>

<style module>
.root {
  position: relative;
}

.headerWrapper {
  background-color: var(--background);
  position: sticky;
  top: 0;
  z-index: 20;
}

.main {
  padding: 12px;
  position: relative;
  z-index: 10;
}
</style>
