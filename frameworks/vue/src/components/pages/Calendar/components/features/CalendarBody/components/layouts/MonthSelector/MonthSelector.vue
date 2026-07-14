<template>
  <header :class="$style.root">
    <slot name="previousButton" />
    <slot name="month" />
    <slot name="nextButton" />
  </header>
</template>

<style module>
.root {
  display: flex;
  column-gap: 4px;
  align-items: center;
}
</style>
