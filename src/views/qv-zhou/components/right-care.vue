<script setup lang="ts">
import { ref } from 'vue'
import useLeft from '../configs/care-bar'
import useRight from '../configs/care-pie'
defineOptions({
  name: 'care'
})

const titles = ref([
  {
    title: '关爱人群',
    position: 'left: 20px; top: 59px;'
  },
  {
    title: '心理服务',
    position: 'left: 20px; top: 235px;'
  },
  {
    title: '心理风险监测',
    position: 'left: 148px; top: 235px;'
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

const jc = ref([
  {
    count: 8725,
    percent: 33,
    unit: '人'
  },
  {
    count: 8725,
    percent: 33,
    unit: '人'
  },
  {
    count: 8725,
    percent: 33,
    unit: '人'
  }
])
</script>
<template>
  <div class="care-container">
    <div class="block-container">
      <div class="block-title" v-for="item in titles" :key="item.position" :style="item.position">
        <div class="title-icon"></div>
        <div class="title-text">
          {{ item.title }}
        </div>
      </div>

      <div class="left-title">登记情况&emsp;风险人数</div>
      <div class="service">
        <div class="count">
          <div class="num">12,793</div>
          <div class="unit">人次</div>
        </div>
        <div class="img"></div>
        <div class="name">心理服务</div>
      </div>

      <div class="chart-left" ref="chartLeft"></div>
      <div class="chart-right" ref="chartRight"></div>

      <div class="jc">
        <div class="item" v-for="(item, index) in jc" :key="index" :class="`item-${index}`">
          <span class="count">{{ `${item.percent}%  ${item.count}` }}</span>
          <span class="unit">{{ item.unit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('../styles/base.css');

.care-container {
  position: absolute;
  left: 2007px;
  top: 390px;
  width: 540px;
  height: 460px;
  background-image: url('../imgs/care@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.chart-left {
  width: 500px;
  height: 140px;
  position: absolute;
  left: 16px;
  top: 93px;
}

.left-title {
  position: absolute;
  left: 360px;
  top: 68px;
  height: 22px;
  font-family:
    PingFangSC,
    PingFang SC;
  font-weight: 500;
  font-size: 16px;
  color: #f3f4f6;
  line-height: 22px;
  text-align: left;
  font-style: normal;
}

.chart-right {
  width: 218px;
  height: 160px;
  position: absolute;
  left: 120px;
  top: 277px;
}

.service {
  position: absolute;
  left: 20px;
  top: 279px;
  width: 98px;
  height: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.service .count {
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.service .count .num {
  font-family: DINAlternate, DINAlternate;
  font-weight: bold;
  font-size: 20px;
  color: #00fffe;
  line-height: 24px;
  text-align: right;
  font-style: normal;
}

.service .count .unit {
  width: 28px;
  height: 20px;
  font-family:
    PingFangSC,
    PingFang SC;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  line-height: 20px;
  text-align: left;
  font-style: normal;
}

.service .img {
  margin-top: 9px;
  width: 98px;
  height: 72px;
  background-image: url('../imgs/img-service@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.service .name {
  margin-top: 10px;
  height: 22px;
  font-family:
    PingFangSC,
    PingFang SC;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  line-height: 22px;
  text-align: center;
  font-style: normal;
}
.jc {
  position: absolute;
  left: 446px;
  top: 284px;
}

.jc .item {
  margin-bottom: 26px;
  height: 20px;
  font-family:
    PingFangSC,
    PingFang SC;
  font-weight: 400;
  color: #f3f4f6;
  line-height: 20px;
  text-align: left;
  font-style: normal;
}

.jc .item-0 .count {
  color: #fd9e31;
}
.jc .item-1 .count {
  color: #41dde5;
}
.jc .item-2 .count {
  color: #31a8fd;
}

.jc .item .unit {
  color: #F3F4F6;
}
</style>
