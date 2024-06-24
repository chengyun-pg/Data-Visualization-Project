<script setup lang="ts">
import { ref } from 'vue';
import useLeft from '../configs/service-left';
import useRight from '../configs/service-right';


import { useTransition } from '@vueuse/core'



defineOptions({
  name: 'city-service'
})
const counters = ref([
  {
    unit: '项',
    position: "left: 67px; top: 73px;",
    count: 203
  },
  {
    unit: '次',
    position: "left: 239px; top: 73px;",
    count: 218
  },
  {
    unit: '%',
    position: "left: 418px; top: 73px;",
    count: 50
  },
])
const values = ref([0, 0, 0])
const outputValue = useTransition(values, {
  duration: 2000,
})
values.value = [203, 218, 50]


const titles = ref([
  {
    title: '智能发现',
    position: "left: 16px; top: 153px;",
  },
  {
    title: '智慧设备',
    position: "left: 287px; top: 153px;",
  }
])


const chartLeft = ref(null)
const chartRight = ref(null)
useLeft({
  el: chartLeft
})
useRight({
  el: chartRight
})
</script>
<template>
  <div class="city-service-container">
    <div class="block-container">
      <div class="counter" v-for="(item, index) in counters" :key="item.unit" :style="item.position">
        <div class="count">{{ Math.round(outputValue[index]) }}</div>
        <div class="unit">&nbsp;&nbsp;{{ item.unit }}</div>
      </div>

      <div class="block-title" v-for="item in titles" :key="item.position" :style="item.position">
        <div class="title-icon"></div>
        <div class="title-text">
          {{ item.title }}
        </div>
      </div>

      <div class="chart-left" ref="chartLeft"></div>
      <div class="chart-right" ref="chartRight"></div>
    </div>
  </div>
</template>
<style scoped>
@import url('../styles/base.css');

.city-service-container {
  position: absolute;
  left: 654px;
  top: 82px;
  width: 540px;
  height: 426px;
  background-image: url('../imgs/city-service@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.chart-left {
  width: 240px;
  height: 220px;
  position: absolute;
  left: 16px;
  top: 191px;
}

.chart-right {
  width: 295px;
  height: 220px;
  position: absolute;
  left: 230px;
  top: 191px;
}
</style>
