<script setup lang="ts">
import ChessRow from '@/components/ChessRow.vue'
import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <div class="chessboard">
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
.chessboard {
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
