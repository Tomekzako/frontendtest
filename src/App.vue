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
  <div class="chessboard">
    <main class="chessboard__wrapper">
      <TheButton
        @click="resetSelection"
        :disabled="store.clickedSquares.length === 0"
        class="chessboard__button--reset"
        >Reset</TheButton
      >
      <ChessBoard />
      <TheSideBar />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/base.css';
.chessboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  position: relative;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    height: 100vh;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      flex-direction: row;
      margin: 1rem 0;
    }
  }
  &__button--reset {
    margin: 1.5rem 0 1rem;
    align-self: center;
    @media (min-width: 768px) {
      align-self: flex-start;
      margin: 0 1rem 0 0;
    }
  }
}
</style>
