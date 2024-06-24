<script setup lang="ts">
import { ref } from 'vue'
import dialog1 from './dialog-1.vue'
defineOptions({
  name: 'left1'
})
const props = defineProps({
  type: String
})

const show = ref(false)

defineExpose({
  show
})

</script>
<template>
  <div class="marker-point" :class="`marker-point-yellow`" @click="show = true"></div>
  <dialog1 v-model:value="show"></dialog1>
</template>
<style scoped>
.marker-point {
  position: absolute;
  width: 63px;
  height: 101px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.marker-point.marker-point-yellow {
  width: 63px;
  height: 101px;
  left: 1950px;
  top: 400px;
  background-image: url('../../imgs/marker/marker-yellow@2x.png');
}
</style>
