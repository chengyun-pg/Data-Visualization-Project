<script setup lang="ts">
import { ref } from 'vue'
import dialog2 from './dialog-2.vue'
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
  <div class="marker-point" :class="`marker-point-red`" @click="show = true"></div>
  <dialog2 v-model:value="show"></dialog2>
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
.marker-point.marker-point-red {
  left: 1720px;
  top: 460px;
  background-image: url('../../imgs/marker/marker-red@2x.png');
}
</style>
