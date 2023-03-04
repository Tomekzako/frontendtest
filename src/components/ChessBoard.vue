<script setup lang="ts">
import ChessRow from '@/components/ChessRow.vue'

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8']
</script>

<template>
  <div>
    <ChessRow
      v-for="(row, index) in letters"
      :key="index"
      :direction="index % 2 === 0 ? 'row' : 'reverse'"
      :row="row"
      :length="letters.length"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';
div {
  color: blue;
}
</style>
