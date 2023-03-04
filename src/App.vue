<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
</script>

<template>
  <header>
    <h2>Chess Board</h2>
  </header>

  <main>
    <ChessBoard />
  </main>
</template>

<style lang="scss" scoped>
@import './assets/base.css';
.wrapper {
  color: var(--vt-c-black);
}
</style>
