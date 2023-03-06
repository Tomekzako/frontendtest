<script setup lang="ts">
import type { Field } from '@/types/ChessTypes'
import { useStore } from '@/store'

const props = defineProps<{
  changeBackground: boolean
  square: Field
  index: number
  letter: string
}>()

const store = useStore()

const getSquareData = () => {
  store.selectSquare(props.letter, props.square.position, true)
  store.saveClickedSquare(`${props.letter}${props.square.position}`)
}
</script>

<template>
  <div
    class="chessboard__square"
    :class="{
      'chessboard__square--odd': changeBackground,
      'chessboard__square--selected': square.selected
    }"
    @click="getSquareData"
  >
    <span v-if="index === 0" class="chessboard__square--letter">{{ letter }}</span>
    <span v-if="letter === 'a'" class="chessboard__square--number">{{ square.position }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';
.chessboard__square {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  margin: 0px;
  animation: fadeIn 1s;
  background-color: var(--c-primary);
  color: var(--c-secondary);
  position: relative;
  cursor: pointer;
  @media (min-width: 481px) {
    width: 3rem;
    height: 3rem;
  }
  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
  @media (min-width: 960px) {
    width: 4.5rem;
    height: 4.5rem;
  }
  &--odd {
    background-color: var(--c-secondary);
    color: var(--c-primary);
  }
  &--letter {
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
    font-weight: var(--font-medium);
    font-size: var(--size-xs);
    @media (min-width: 768px) {
      font-size: var(--size-base);
    }
  }
  &--number {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    font-size: var(--size-xs);
    font-weight: var(--font-medium);
    @media (min-width: 768px) {
      font-size: var(--size-sm);
    }
  }
  &--selected {
    background-color: var(--c-tertiary);
  }
}
</style>
