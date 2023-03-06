<script setup lang="ts">
import ChessBoard from '@/components/ChessBoard.vue'
import TheSideBar from '@/components/TheSideBar.vue'
import TheButton from '@/components/TheButton.vue'
import { useStore } from '@/store'

const store = useStore()

const resetSelection = () => {
  if (store.clickedSquares.length > 0) {
    return store.resetAllSelections()
  }
}
</script>

<template>
  <header class="chessboard__header">
    <TheButton @click="resetSelection" :disabled="store.clickedSquares.length === 0"
      >Reset</TheButton
    >
  </header>

  <main class="chessboard__wrapper">
    <ChessBoard />
    <TheSideBar />
  </main>
</template>

<style lang="scss" scoped>
@import './assets/base.css';
.chessboard {
  &__header {
    text-align: center;
    margin: 2rem 0;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      flex-direction: row;
      margin-bottom: 3rem;
    }
  }
}
</style>
