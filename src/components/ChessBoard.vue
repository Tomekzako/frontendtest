<script setup lang="ts">
import ChessRow from '@/components/ChessRow.vue'

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8']
</script>

<template>
  <div class="chessboard">
    <ChessRow
      v-for="(letter, index) in letters"
      :key="index"
      :even="index % 2 === 0"
      :letter="letter"
      :length="letters.length"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';
.chessboard {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
}
</style>
