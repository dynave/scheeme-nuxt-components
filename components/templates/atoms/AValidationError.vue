<template>
  <span :class="$style.error"><slot /></span>
</template>

<style lang="scss" module>
  .error {
    font-size: 12px;
    color: #f40d0d;
  }
</style>
