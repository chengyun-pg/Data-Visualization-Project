<script setup lang="ts">
import { ref } from 'vue'
import dialog1 from './dialog-1.vue'
defineOptions({
  name: 'left1'
})
const props = defineProps({
  type: String,
  left: Number,
  top: Number
})

</script>
<template>
  <div class="marker-point" :class="`marker-point-${type}`" :style="{
    left: `${left}px`,
    top: `${top}px`
  }"></div>
</template>
<style scoped>
.marker-point {
  position: absolute;
  width: 63px;
  height: 101px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: 0;
}
.marker-point.marker-point-2 {
  width: 63px;
  height: 101px;
  background-image: url('../../imgs/marker/marker-red@2x.png');
}
.marker-point.marker-point-4 {
  width: 63px;
  height: 101px;
  background-image: url('../../imgs/marker/marker-blue@2x.png');
}
.marker-point.marker-point-3 {
  width: 63px;
  height: 101px;
  background-image: url('../../imgs/marker/marker-yellow@2x.png');
}
.marker-point.marker-point-1 {
  width: 63px;
  height: 101px;
  background-image: url('../../imgs/marker/marker-green@2x.png');
}
</style>
