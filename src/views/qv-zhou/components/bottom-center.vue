<script setup lang="ts">
defineOptions({
  name: 'bottom-center'
})

const props = defineProps({
  active: String
})

const emit = defineEmits(['toggle'])

function toggle(index) {
  emit('toggle', `${index}`)
}
</script>
<template>
  <div class="bottom-center-container"></div>

  <div class="flag flag-1" :class="active === '1' ? 'active' : ''" @click="toggle(1)">
    <div class="line">企业经营异常: 30</div>
    <div class="line">今日新增: 4</div>
  </div>
  <div class="flag flag-2" :class="active === '2' ? 'active' : ''" @click="toggle(2)">
    <div class="line">劳资纠纷: 20</div>
    <div class="line">今日新增: 4</div>
  </div>
  <div class="flag flag-3" :class="active === '3' ? 'active' : ''" @click="toggle(3)">
    <div class="line">AI告警: 20</div>
    <div class="line">今日新增: 4</div>
  </div>
  <div class="flag flag-4" :class="active === '4' ? 'active' : ''" @click="toggle(4)">
    <div class="line">违规倾倒建筑垃圾: 20</div>
    <div class="line">今日新增: 2</div>
  </div>

  <div class="left"></div>
  <div class="right"></div>
</template>
<style scoped>
.bottom-center-container {
  position: absolute;
  left: 1156px;
  top: 506px;
  width: 880px;
  height: 574px;
  background-image: url('../imgs/bottom-center@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-20px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes moveRight {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0);
  }
}

.left {
  position: absolute;
  left: 1114px;
  top: 903px;
  width: 117px;
  height: 98px;
  background-image: url('../imgs/arrow-left@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: moveLeft 1s infinite;
}

.right {
  position: absolute;
  left: 1978px;
  top: 903px;
  width: 117px;
  height: 98px;
  background-image: url('../imgs/arrow-rigth@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: moveRight 1s infinite;
}

.flag {
  position: absolute;
  width: 168px;
  height: 54px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}

.flag-1::after,
.flag-2::after,
.flag-3::after,
.flag-4::after {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 50%;
  position: absolute;
}

.flag .line {
  /* 不换行 */
  line-height: 27px;
  white-space: nowrap;
  padding: 0 20px;
  font-size: 14px;
  color: #fff;
  line-height: 18px;
  margin-top: 5px;
}

.flag-1 .line,
.flag-3 .line {
  text-align: right;
}

.flag-2 .line,
.flag-4 .line {
  text-align: left;
}


.flag-1.active,
.flag-3.active {
  background-image: url("../imgs/console-1@2x.png");
}

.flag-2.active,
.flag-4.active {
  background-image: url("../imgs/console-2@2x.png");
}


.flag-1 {
  left: 1240px;
  top: 600px;
  background-image: url("../imgs/console-3@2x.png");

}

.flag-1::after {
  background-color: #30d973;
  right: 8px;
  top: 10px;
}


.flag-2 {
  left: 1786px;
  top: 600px;
  background-image: url("../imgs/console-4@2x.png");
}

.flag-2::after {
  position: absolute;
  background-color: #d93041;
  left: 8px;
  top: 10px;
}

.flag-3 {
  left: 1240px;
  top: 675px;
  background-image: url("../imgs/console-3@2x.png");

}

.flag-3::after {
  position: absolute;
  background-color: #e6a732;
  right: 8px;
  top: 10px;
}

.flag-4 {
  left: 1786px;
  top: 675px;
  background-image: url("../imgs/console-4@2x.png");

}

.flag-4::after {
  position: absolute;
  background-color: #3be4f5;
  left: 8px;
  top: 10px;
}
</style>
