<script setup lang="ts">
import { computed, ref } from 'vue'
defineOptions({
  name: 'left1'
})
const props = defineProps({
  value: Boolean
})
const emit = defineEmits(['update:value'])
const visible = computed({
  get: () => props.value,
  set: (val) => {
    emit('update:value', val)
  }
})

function close() {
  visible.value = false
  status.value = 'detail-1'
}
const style = {}

const status = ref('detail-1')
</script>
<template>
  <el-dialog
    v-model="visible"
    style="background: transparent; position: relative; width: auto"
    :show-close="false"
    :top="status.includes('detail-3')? '0': '5vh'"
  >
    <div class="box" :class="`dialog-image dialog-${status}`">
      <div class="close" @click="close"></div>

      <!-- 立即调度 -->
      <div v-if="status === '1'" class="lijidiaodu" @click="status = 'detail-1'"></div>
      <!-- detail -->
      <div v-if="status.includes('detail')" class="detail">
        <div class="detail-toggle" @click="status = 'detail-1'"></div>
        <div class="detail-toggle" @click="status = 'detail-2'"></div>
        <div class="detail-toggle" @click="status = 'detail-3-1'"></div>
      </div>
      <!-- 画像 -->
      <div v-if="status.includes('detail-3')" class="detail-3">
        <div class="detail-3-toggle" @click="status = 'detail-3-1'"></div>
        <div class="detail-3-toggle" @click="status = 'detail-3-2'"></div>
      </div>
      <!-- 下派指令-->
      <div v-if="status === 'detail-1'" class="publish-btn1" @click="status = 'publish-1'"></div>
      <div v-if="status === 'detail-2'" class="publish-btn2" @click="status = 'publish-1'"></div>
      <div v-if="status === 'publish-1'" class="publish-btn3" @click="close"></div>
    </div>
  </el-dialog>
</template>
<style scoped>
.marker-point {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 72px;
  height: 110px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.marker-point.marker-point-red {
  width: 70px;
  height: 99px;
  left: 1713px;
  top: 387px;
  background-image: url('../../imgs/marker-red.png');
}
.close {
  position: absolute;
  width: 28px;
  height: 28px;
  right: 36px;
  top: 21px;
  border-radius: 50%;
  /* background-color: red; */
  cursor: pointer;
}
.dialog-image {
  position: relative;
  margin: 0 auto;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.dialog-detail-1 {
  width: 790px;
  height: 555px;
  background-image: url('../../imgs/marker/dialog-2-1@2x.png');
}
.dialog-detail-2 {
  width: 790px;
  height: 508px;
  background-image: url('../../imgs/marker/dialog-2-2@2x.png');
}
.dialog-detail-3-1 {
  width: 1253px;
  height: 1019px;
  background-image: url('../../imgs/marker/dialog-detail-3-1.png');
}
.dialog-detail-3-2 {
  width: 1253px;
  height: 1019px;
  background-image: url('../../imgs/marker/dialog-detail-3-2.png');
}
.dialog-publish-1 {
  width: 786px;
  height: 718px;
  background-image: url('../../imgs/marker/dialog-publish-1.png');
}

.lijidiaodu {
  width: 96px;
  height: 42px;
  position: absolute;
  right: 32px;
  top: 587px;
  cursor: pointer;
}

.dialog-detail-3-1 .detail,
.dialog-detail-3-2 .detail {
  top: 100px;
}

.detail {
  position: absolute;
  top: 90px;
  left: 30px;
  display: flex;
}
.detail-toggle {
  width: 96px;
  height: 30px;
  /* background-color: red; */
  margin-right: 10px;
  cursor: pointer;
}
.detail-3 {
  position: absolute;
  top: 178px;
  left: 66px;
  display: flex;
}
.detail-3-toggle {
  width: 96px;
  height: 40px;
  /* background-color: red; */
  margin-right: 10px;
  cursor: pointer;
}
.publish-btn1 {
  width: 96px;
  height: 42px;
  position: absolute;
  right: 33px;
  bottom: 32px;
  /* background-color: red; */
  cursor: pointer;
}
.publish-btn2 {
  width: 96px;
  height: 42px;
  position: absolute;
  right: 33px;
  top: 432px;
  /* background-color: red; */
  cursor: pointer;
}
.publish-btn3{
  width: 266px;
  height: 46px;
  position: absolute;
  right: 33px;
  top: 638px;
  /* background-color: red; */
  cursor: pointer;
}
</style>
