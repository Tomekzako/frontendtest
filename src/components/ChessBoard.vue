<script setup lang="ts">
import ChessRow from '@/components/ChessRow.vue'
import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <div class="chessboard__main">
    <ChessRow
      v-for="(letter, index) in store.letters"
      :key="index"
      :even="index % 2 === 0"
      :letter="letter"
      :length="store.letters.length"
    />
  </div>
</template>

<style lang="scss" scoped>
.chessboard__main {
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
