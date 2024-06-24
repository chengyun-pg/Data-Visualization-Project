<script setup lang="ts">
import { ref } from 'vue';
import { useTransition } from '@vueuse/core'
defineOptions({
  name: 'industry'
})

const mainCount = ref(0)
const mainCountTransition = useTransition(mainCount, {
  duration: 1500,
})
mainCount.value = 392

setInterval(() => {
  mainCount.value += 30
}, 2000)

function formatNumber(num) {
  return Math.round(num).toString().padStart(6, '0')
}

const counters = ref([
  {
    unit: '亿元',
    position: "left: 433px; top: 98px;",
    change: {
      position: "left: 433px; top: 122px;",
      label: "增速",
      unit: "%",
      num: 6.8
    }
  },
  {
    unit: '',
    position: "left: 38px; top: 215px;",
    change: {
      position: "left: 88px; top: 240px;",
      label: "",
      unit: "",
      num: 5
    }
  },
  {
    unit: '',
    position: "left: 155px; top: 215px;",
    change: {
      position: "left: 215px; top: 240px;",
      label: "",
      unit: "",
      num: -5
    }
  },
  {
    unit: '',
    after: '%',
    position: "left: 295px; top: 215px;",
    change: {
      position: "left: 355px; top: 240px;",
      label: "",
      unit: "",
      num: 5
    }
  },
  {
    unit: '',
    position: "left: 415px; top: 215px;",
    change: {
      position: "left: 475px; top: 240px;",
      label: "",
      unit: "",
      num: -5
    }
  }
])
const values = ref([0, 0, 0, 0, 0])
const outputValue = useTransition(values, {
  duration: 1800,
})
values.value = [670, 218, 268, 91, 32]

</script>
<template>
  <div class="industry-container">

    <div class="block-container">
      <div class="main-count">
        <span class="num" v-for="index in 6" :key="index">
          {{ formatNumber(mainCountTransition)[index - 1] }}
        </span>
      </div>

      <div class="gdp-title">2023年GDP</div>
      <div class="gdp-img shaning-bar"></div>

      <div class="counter" v-for="(item, index) in counters" :key="item.unit" :style="item.position">
        <div class="count">{{ Math.round(outputValue[index]) }} {{ item.after }}</div>
        <div class="unit">&nbsp;&nbsp;{{ item.unit }}</div>
      </div>
      <div class="changes" v-for="(item) in counters" :key="item.unit" :style="item.change.position">
        <div class="label">{{ item.change.label }}</div>
        <div class="num">{{ item.change.num > 0 ? "+" : "" }}{{ item.change.num }} {{ item.change.unit }}</div>
        <div class="icon" :class="item.change.num > 0 ? 'icon-up' : 'icon-down'"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('../styles/base.css');

.industry-container {
  position: absolute;
  left: 2007px;
  top: 82px;
  width: 540px;
  height: 295px;
  background-image: url('../imgs/industry@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.main-count {
  position: absolute;
  font-variant-numeric: tabular-nums;
  left: 25px;
  top: 117px;
  display: flex;
}

.main-count .num {
  width: 30px;
  height: 30px;
  margin-right: 8px;
  text-align: center;
  font-family: DINAlternate, DINAlternate;
  font-weight: bold;
  font-size: 24px;
  color: #00FFFE;
  line-height: 28px;
  text-align: center;
  font-style: normal;
}

.gdp-img {
  position: absolute;
  left: 258px;
  top: 60px;
  width: 175px;
  height: 102px;
  background-image: url("../imgs/img-gdp@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.gdp-title {
  position: absolute;
  left: 433px;
  top: 72px;
  height: 22px;
  font-family: PingFangSC, PingFang SC, DINAlternate, DINAlternate;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 22px;
  text-align: center;
}


.block-container .counter .count {
  height: 28px;
  font-family: DINAlternate, DINAlternate;
  font-weight: bold;
  font-size: 22px;
  color: #00fffe;
  line-height: 24px;
  text-align: center;
  font-style: normal;
}

.changes {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.changes .label,
.changes .num {
  font-family: DINAlternate, DINAlternate;
  font-weight: bold;
  font-size: 14px;
  color: rgba(243, 244, 246, 0.7);
  line-height: 20px;
}

.changes .icon {
  width: 15px;
  height: 15px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.changes .icon-up {
  background-image: url('../imgs/icon/icon-up@2x.png');
}

.changes .icon-down {
  background-image: url('../imgs/icon/icon-down@2x.png');
}
</style>
