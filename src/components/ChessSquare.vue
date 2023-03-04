<script setup lang="ts">
defineProps({
  changeBackground: Boolean,
  letter: String,
  square: Number
})
</script>

<template>
  <div class="square" :style="{ backgroundColor: changeBackground ? 'white' : '' }"></div>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';
.square {
  width: 25px;
  height: 25px;
  display: inline-block;
  margin: 0px;
  animation: fadeIn 1s;
  background-color: black;
}
</style>
