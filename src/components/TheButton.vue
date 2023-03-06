<script setup lang="ts">
defineProps<{
  disabled: boolean
}>()
</script>

<template>
  <button class="chessboard__button" :class="{ 'chessboard__button--disabled': disabled }">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';

.chessboard__button {
  font-size: var(--size-sm);
  background-color: var(--c-primary);
  color: var(--c-secondary);
  border: 1px solid var(--c-primary);
  font-weight: var(--font-medium);
  border-radius: 5px;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: var(--c-secondary);
    color: var(--c-primary);
  }
  &--disabled {
    color: #b7b7b8;
    background-color: #dbd9d7;
    border: 1px solid #dbd9d7;
    cursor: auto;
    &:hover {
      color: #b7b7b8;
      background-color: #dbd9d7;
    }
  }
}
</style>
