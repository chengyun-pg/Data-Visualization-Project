<script setup lang="ts">
defineOptions({
  name: 'city-build'
})
import { ref } from 'vue';
import useChart from '../configs/single-bar';
import { useTransition } from '@vueuse/core'

const counters = ref([
  {
    unit: '个',
    position: "left: 67px; top: 73px;",
    count: 203
  },
  {
    unit: '个',
    position: "left: 239px; top: 73px;",
    count: 218
  },
  {
    unit: '个',
    position: "left: 418px; top: 73px;",
    count: 50
  },
  {
    unit: '人',
    position: "left: 175px; top: 155px;",
    count: 1218
  },
  {
    unit: '次',
    position: "left: 435px; top: 155px;",
    count: 4118
  }
])
const values = ref([0, 0, 0, 0, 0])
const outputValue = useTransition(values, {
  duration: 3000,
})
values.value = [203, 218, 50, 1218, 4118]



const chartLeft = ref(null)
const chartRight = ref(null)
useChart({
  el: chartLeft,
  data: [{ name: '合同签约率', value: 98 }]
})
useChart({
  el: chartRight,
  data: [{ name: '人员考勤率', value: 98 }]
})
</script>
<template>
  <div class="city-build-container">
    <div class="block-container">
      <div class="counter" v-for="(item, index) in counters" :key="item.unit" :style="item.position">
        <div class="count">{{ Math.round(outputValue[index]) }}</div>
        <div class="unit">&nbsp;&nbsp;{{ item.unit }}</div>
      </div>

      <div class="chart-left" ref="chartLeft"></div>
      <div class="chart-right" ref="chartRight"></div>
    </div>
  </div>
</template>
<style scoped>
@import url('../styles/base.css');

.city-build-container {
  position: absolute;
  left: 654px;
  top: 521px;
  width: 540px;
  height: 329px;
  background-image: url('../imgs/city-build@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.chart-left {
  width: 240px;
  height: 50px;
  position: absolute;
  left: 12px;
  top: 191px;
}

.chart-right {
  width: 245px;
  height: 50px;
  position: absolute;
  left: 272px;
  top: 191px;
}
</style>
