<script setup lang="ts">
import ChessSquare from '@/components/ChessSquare.vue'

const props = defineProps({
  even: Boolean,
  letter: String,
  length: Number
})

const isEven = (square: number) => {
  return props.even ? square % 2 === 0 : square % 2 === 1
}
</script>

<template>
  <div class="chessboard__row">
    <ChessSquare
      v-for="(square, i) in length"
      :key="i"
      :changeBackground="isEven(square)"
      :square="square"
      :letter="letter"
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
