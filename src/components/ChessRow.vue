<script setup lang="ts">
import ChessSquare from '@/components/ChessSquare.vue'
import type { Letter } from '@/types/ChessTypes'

const props = defineProps<{
  even: boolean
  letter: Letter
  length: number
}>()

const isEven = (square: number) => {
  return props.even ? square % 2 === 0 : square % 2 === 1
}
</script>

<template>
  <div class="chessboard__row">
    <ChessSquare
      v-for="(square, i) in letter.fields"
      :key="i"
      :changeBackground="isEven(square.position)"
      :square="square"
      :letter="letter.letter"
      :index="i"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';
.chessboard__row {
  display: flex;
  flex-direction: column-reverse;
}
</style>
