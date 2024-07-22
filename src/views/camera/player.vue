<template>
  <div class="player">
    <p style="position: absolute !important; top: 10px; left: 20px">
      {{ title }}
    </p>
    <div v-show="url==''" class="no-single">无信号</div>
    <video
      v-show="url"
      ref="videoElement"
      class="centeredVideo"
      controls
      autoplay
      muted
    ></video>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import flvjs from "flv.js";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
});

const flvPlayer = ref(null);
const videoElement = ref(null);
onMounted(() => {
  flv_load(props.url);
});
watch(
  () => props.url,
  (news, olds) => {
    destoryVideo();
    flv_load(news);
  }
);
function flv_load(url) {
  if (flvjs.isSupported() && url) {
    flvPlayer.value = flvjs.createPlayer(
      {
        type: "flv", //媒体类型
        url: url || "", //flv格式媒体URL
        isLive: true, //数据源是否为直播流
        hasAudio: false, //数据源是否包含有音频
        hasVideo: true, //数据源是否包含有视频
      },
      {
        enableWorker: false, // 是否启用分离的线程进行转换
        enableStashBuffer: false, //关闭IO隐藏缓冲区
        autoCleanupSourceBuffer: true, //自动清除缓存
      }
    );
    flvPlayer.value.attachMediaElement(videoElement.value); //将播放实例注册到节点
    flvPlayer.value.load(); //加载数据流
    flvPlayer.value.play(); //播放数据流
  }
}
function destoryVideo() {
  if (flvPlayer.value) {
    flvPlayer.value.pause();
    flvPlayer.value.unload();
    flvPlayer.value.detachMediaElement();
    flvPlayer.value.destroy();
    flvPlayer.value = null;
  }
}

onBeforeUnmount(() => {
  if (flvPlayer.value) {
    flvPlayer.value.pause();
    flvPlayer.value.unload();
    flvPlayer.value.detachMediaElement();
    flvPlayer.value.destroy();
    flvPlayer.value = null;
  }
});
</script>
<style scoped>
.player {
  position: relative;
  background-color: black;
  height: 100%;
  width: 100%;
  border: 1px solid white;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
}
.centeredVideo {
  width: 100%;
  height: 98%;
}
.no-single {
  width: 200px;
  height: 40px;
  position: absolute;
  margin-top: -20px;
  margin-left: -100px;
  top: 50%;
  left: 50%;
}
</style>
