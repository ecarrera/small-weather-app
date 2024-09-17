<template>
  <button class="button" type="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  background: none;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover {
    color: #dedede;
  }
}
</style>
