<template>
  <div class="home-content">
    <div class="top">
      <ul class="tab_box">
        <li
          class="tab1"
          :class="[activeIndex == 1 ? 'active' : '']"
          @click="selectTab(1,'home')"
        >
          首页
        </li>
        <li
          class="tab2"
          :class="[activeIndex == 2 ? 'active' : '']"
          @click="selectTab(2,'cultural_relics')"
        >
          文物管理
        </li>
      </ul>
      <div class="top_center">湘东文物安全监管平台</div>
      <ul class="weather">
        <li :class="[activeIndex == 3 ? 'active' : '']" @click="selectTab(3,'user')">
          用户管理
        </li>
        <li :class="[activeIndex == 4 ? 'active' : '']" @click="selectTab(4,'camera')">
          摄像头管理
        </li>
      </ul>
    </div>
    <leftSlider></leftSlider>
    <div class="map-content">
      <baiduMap></baiduMap>
    </div>
    <rightSlider></rightSlider>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import baiduMap from "./baiduMap.vue";
import leftSlider from "./com/bjLeftSlider.vue";
import rightSlider from "./com/bjRightSlider.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeIndex = ref(1);
function selectTab(index,key) {
  console.log("🚀 ~ selectTab ~ index:", index);
  activeIndex.value = index;
  router.push({ name: key });
}
</script>
<style scoped lang="less">
.home-content {
  width: 100%;
  height: 100%;
  position: relative;
  background: #033c76;
  background-size: 100% 100%;
  overflow: hidden;
  .top{
    height:90px;
  }
  .tab_box {
    width: 32%;
    height: 64px;
    position: absolute;
    z-index: 999;
  }
  .tab_box li {
    width: 150px;
    height: 60px;
    float: left;
    margin-top: 15px;
    list-style: none;
    text-align: center;
    line-height: 65px;
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .active {
    background: linear-gradient(to bottom, #061625, #037c8d);
    border-bottom: 6px solid #00f7ff;
    border-radius: 0 0 6px 6px;
  }
  .weather {
    width: 32%;
    height: 64px;
    position: absolute;
    right: 40px;
    z-index: 999;
  }
  .weather li {
    width: 150px;
    height: 64px;
    margin-left: 1.7rem;
    list-style: none;
    cursor: pointer;
    margin-top: 15px;
    float: right;
    text-align: center;
    line-height: 64px;
    color: #ffffff;
    font-size: 1.2rem;
  }
  /*中间Logo*/
  .top_center {
    width: 100%;
    height: 90px;
    position: absolute;
    top: 0;
    z-index: 998;
    background: url(../../assets/top1.png) center no-repeat;
    background-position-y: top;
    text-align: center;
    line-height: 4rem;
    color: #ffffff;
    font-size: 2.3rem;
  }
}
.map-content {
  width: calc(100% - 800px);
  height: 100%;
  margin: 0 auto;
  background-size: 100% 100%;
}
</style>
