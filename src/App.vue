<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
</script>

<template>
  <header>
    <h2 class="chessboard__header">Chess Board</h2>
  </header>

  <main>
    <ChessBoard />
  </main>
</template>

<style lang="scss" scoped>
@import './assets/base.css';
.chessboard__header {
  text-align: center;
  margin: 2rem 0;
  font-size: 2rem;
}
</style>
