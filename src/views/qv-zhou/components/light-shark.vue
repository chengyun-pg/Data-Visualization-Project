<script setup lang="ts">
defineOptions({
  name: 'light-shark'
})
const props = defineProps({
  position: String,
  activeWidth: String
})
</script>
<template>
  <div
    class="light-shark"
    :style="`width:${activeWidth}px; ${position}`"
  >
    <div class="lighting"></div>
  </div>
</template>
<style scoped>
@keyframes lightShark {
  /* 左右平移 */
  0% {
    margin-left: 25px;
  }
  50% {
    margin-left: calc(100% - 70px);
  }
  100% {
    margin-left: 25px;
  }
}
.light-shark {
  position: absolute;
  overflow: hidden;
}
.lighting {
  width: 30px;
  height: 3px;
  background-image: url('../imgs/light-shark.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: lightShark 3s infinite;
}
</style>
