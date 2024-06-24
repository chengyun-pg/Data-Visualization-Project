<script setup lang="ts">
import screenfull from 'screenfull'
import { ref } from 'vue'
defineOptions({
  name: 'Board-Header'
})

// const date = ref('2022年08月23日')

const getCreeateDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}年${month}月${day}日`
}

const creeateDate = getCreeateDate()


const fullscreenSwitch = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
</script>
<template>
  <div class="Board-Header">
  </div>
</template>
<style scoped>
.Board-Header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 3199px;
  height: 154px;
  /* background-image: url('../imgs/header-bg.png'); */
  background-image: url('../imgs/header@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
