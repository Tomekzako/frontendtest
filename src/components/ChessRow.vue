<script setup lang="ts">
import ChessSquare from '@/components/ChessSquare.vue'

defineProps({
  direction: String,
  row: String,
  length: Number
})
</script>

<template>
  <div class="row" :class="{ reversed: direction === 'reverse' }">
    <ChessSquare
      v-for="(square, i) in length"
      :key="i"
      :changeBackground="square % 2 === 0 ? true : false"
      :square="square"
      :letter="row"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';
.row {
  display: flex;
  width: 200px;
  height: 25px;
}
.reversed {
  flex-direction: row-reverse;
}
</style>
