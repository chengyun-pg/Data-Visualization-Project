<script setup lang="ts">
defineOptions({
  name: 'center-count'
})
import { ref } from 'vue';
import { useTransition } from '@vueuse/core'

const counters = ref([
  {
    unit: '',
    position: "left: 67px; top: 47px;",
  },
  {
    unit: '',
    position: "left: 305px; top: 47px;",
  },
  {
    unit: '',
    position: "left: 543px; top: 47px;",
  }
])
const values = ref([0, 0, 0, 0, 0])
const outputValue = useTransition(values, {
  duration: 1500,
})
values.value = [98, 96, 96]

</script>
<template>
  <div class="center-count-container">

    <div class="block-container">
      <div class="counter" v-for="(item, index) in counters" :key="item.unit" :style="item.position">
        <div class="count">{{ Math.round(outputValue[index]) }}</div>
        <div class="unit">&nbsp;&nbsp;{{ item.unit }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('../styles/base.css');

.center-count-container {
  position: absolute;
  left: 1282px;
  top: 112px;
  width: 636px;
  height: 84px;
  background-image: url('../imgs/center-count@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

}


.center-count-container .block-container .counter .unit {
  color: #00fffe;
}
</style>
