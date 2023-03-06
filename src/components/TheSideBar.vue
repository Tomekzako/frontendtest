<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()
</script>

<template>
  <div class="chessboard__sidebar">
    <p class="chessboard__sidebar--title" key="title">Selected items:</p>
    <TransitionGroup name="list" tag="ul" class="chessboard__sidebar--list">
      <li
        v-for="(item, index) in store.clickedSquares"
        :key="`${item}`"
        class="chessboard__sidebar--item"
      >
        {{ store.clickedSquares.length - index }}:
        <span class="chessboard__sidebar--number">{{ item }}</span>
      </li>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';

.chessboard__sidebar {
  margin: 1rem 1rem 0;
  background-color: var(--c-primary);
  color: var(--c-secondary);
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: 768px) {
    margin-top: 0;
    width: 6rem;
    margin-top: 0;
    max-height: 32rem;
  }
  @media (min-width: 960px) {
    max-height: 40rem;
  }
  &--title {
    font-size: var(--size-xs);
    text-align: center;
    font-weight: var(--font-medium);
    padding: 0.5rem 1rem;
    flex: 0 0 100%;
    border-bottom: 1px solid var(--c-secondary);
    @media (min-width: 768px) {
      border-bottom: 0;
      padding-top: 0.5rem;
      margin: 0;
    }
  }
  &--list {
    list-style-type: none;
    display: flex;
    padding: 0;
    overflow-y: hidden;
    @media (min-width: 768px) {
      overflow-y: auto;
      overflow-x: hidden;
      flex-direction: column;
      margin-top: 0.5rem;
    }
    @media (min-width: 970px) {
      max-height: 40rem;
    }
  }
  &--item {
    text-align: center;
    padding: 1rem;
    font-size: var(--size-xs);
    border-right: 1px solid var(--c-secondary);
    min-width: 4rem;
    @media (min-width: 768px) {
      padding: 0.5rem 1rem;
      border-right: 0;
      border-bottom: 1px solid var(--c-secondary);
      font-size: var(--size-base);
    }
  }
  &--number {
    font-weight: var(--font-medium);
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(2rem);
    @media (min-width: 768px) {
      transform: translateX(2rem);
    }
  }
}
</style>
