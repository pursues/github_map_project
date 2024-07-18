<template>
  <div class="home-content">
    <leftSlider></leftSlider>  
    <div class="map-content">
      <baiduMap></baiduMap>
    </div>
    <rightSlider></rightSlider>  
  </div>
</template>
<script setup lang="ts">
import baiduMap from "./baiduMap.vue";
import leftSlider from "./com/bjLeftSlider.vue";
import rightSlider from "./com/bjRightSlider.vue";
</script>
<style scoped>
.home-content {
  width: 100%;
  height: 100vh;
  position:relative;

}
.map-content {
   width: calc(100% - 800px);
  height: 100%;
  margin:0 auto;
}
</style>
