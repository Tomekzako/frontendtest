<script setup lang="ts">
defineProps({
  changeBackground: Boolean,
  letter: String,
  square: Number,
  index: Number
})
</script>

<template>
  <div class="chessboard__square" :class="{ 'chessboard__square--odd': changeBackground }">
    <span v-if="index === 0" class="chessboard__square--letter">{{ letter }}</span>
    <span v-if="letter === 'a'" class="chessboard__square--number">{{ square }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';
.chessboard__square {
  width: 4rem;
  height: 4rem;
  display: inline-block;
  margin: 0px;
  animation: fadeIn 1s;
  background-color: var(--c-primary);
  color: var(--c-secondary);
  position: relative;
  cursor: pointer;
  &--odd {
    background-color: var(--c-secondary);
    color: var(--c-primary);
  }
  &--letter {
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
    font-weight: var(--font-medium);
  }
  &--number {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    font-size: var(--font-sm);
    font-weight: var(--font-medium);
  }
}
</style>
