<template>
  <div class="board-container">
    <!-- header -->
    <BoardHeader></BoardHeader>
    <!-- left -->
    <left1></left1>
    <bottomLeft></bottomLeft>
    <leftBuild></leftBuild>
    <leftService></leftService>
    <!-- center -->
    <bottomCenter @toggle="toggle" :active="activeMarker"></bottomCenter>
    <centerCount></centerCount>
    <markerPoint v-if="activeMarker === '3'" ref="marker1"></markerPoint>
    <markerPoint2 v-if="activeMarker === '2'" ref="marker2"></markerPoint2>
    <markerByType v-for="item in markerList" :key="`${item.type}-${item.left}-${item.top}`"
      v-show="activeMarker == item.type" :type="item.type" :left="item.left" :top="item.top"></markerByType>
    <!-- right -->
    <right1></right1>
    <bottomRight></bottomRight>
    <rightIndustry></rightIndustry>
    <rightCare></rightCare>

    <!--  -->
    <lightShark position="left: 20px;top: 118px;" active-width="619"></lightShark>
    <lightShark position="left: 20px;top: 615px;" active-width="619"></lightShark>
    <lightShark position="left: 654px;top: 118px;" active-width="540"></lightShark>
    <lightShark position="left: 654px;top: 555px;" active-width="540"></lightShark>
    <lightShark position="left: 2007px;top: 118px;" active-width="540"></lightShark>
    <lightShark position="left: 2007px;top: 426px;" active-width="540"></lightShark>
    <lightShark position="right: 20px;top: 118px;" active-width="619"></lightShark>
    <lightShark position="right: 20px;top: 617px;" active-width="619"></lightShark>
  </div>
</template>
<script setup>
import { nextTick, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import BoardHeader from './components/Header.vue'

// left
import left1 from './components/left1.vue'
import bottomLeft from './components/bottom-left.vue'
import leftService from './components/left-service.vue'
import leftBuild from './components/left-build.vue'
// center
import bottomCenter from './components/bottom-center.vue'
import centerCount from './components/center-count.vue'
// right
import right1 from './components/right1.vue'
import bottomRight from './components/bottom-right.vue'
import rightIndustry from './components/right-industry.vue'
import rightCare from './components/right-care.vue'
import markerPoint from './components/marker/index.vue'
import markerPoint2 from './components/marker/index2.vue'
import markerByType from './components/marker/markerByType.vue'

import lightShark from './components/light-shark.vue'

import useScreenFit from '../../utils/boardScale.js'
useScreenFit('.board-container', {
  // boardWidth: 3200,
  boardWidth: 1920,
  boardHeight: 1080
})
const marker1 = ref(null)
const marker2 = ref(null)

// onMounted(() => {
//   nextTick(() => {
//     setInterval(() => {
//       const marker1Show = marker1?.value?.show,
//         marker2Show = marker2?.value?.show;
//       if (!marker1Show && !marker2Show) {
//         window.location.reload()
//       }
//     }, 10000)
//   })
// })

const activeMarker = ref('2')

function toggle(index) {
  activeMarker.value = index
}



const markerList = [
  { type: '1', left: 1350, top: 310 },
  { type: '1', left: 1560, top: 310 },
  { type: '1', left: 1480, top: 450 },
  { type: '1', left: 1280, top: 440 },
  { type: '2', left: 1280, top: 310 },
  { type: '2', left: 1580, top: 260 },
  { type: '2', left: 1440, top: 450 },
  { type: '3', left: 1300, top: 400 },
  { type: '3', left: 1450, top: 520 },
  { type: '3', left: 1800, top: 350 },
  { type: '4', left: 1600, top: 350 },
  { type: '4', left: 1350, top: 400 },
]

</script>

<style lang="scss" scoped>
.board-container {
  // width: 1920px;
  // height: 1080px;
  width: 3200px;
  height: 1080px;
  position: relative;
  left: -33.5%;
  // background-image: url(./imgs/bg@2x.png), linear-gradient(90deg, #010204 0%, rgba(1, 2, 4, 0) 50%, #010204 100%, );
  background-image: linear-gradient(90deg, #0102047c 0%, rgba(0, 0, 0, 0.144) 50%, #01020471 100%),
    url(./imgs/bg@2x.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
<style>
body {
  overflow: hidden;
}

@keyframes shaning {

  /* 左右平移 */
  0% {
    margin-left: 10px;
    opacity: 0;
  }

  6% {
    opacity: 0.4;
  }

  20% {
    margin-left: calc(100% + 70px);
    opacity: 0;
  }

  100% {
    margin-left: calc(100% + 70px);
  }
}

.shaning-bar {
  overflow: hidden;
}

.shaning-bar::before {
  content: '';
  display: block;
  width: 5px;
  height: 100%;
  background: #fff;
  opacity: 0.2;
  transform: skewX(-30deg);
  transform-origin: 0 100%;
  animation: shaning 3s infinite;
  animation-direction: reverse;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

.marker-point {
  animation: float 2s infinite;
}

.el-dialog {
  padding: 0;
}
</style>
