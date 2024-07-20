<template>
    <div class="player-con">
        <video :id="videoInfo.id+'_video'"
            style="width: 100%; height: 100%"
            autoplay
            playsinline
            muted>
        </video>
    </div>

</template>
<script setup lang="ts"> 

import { ref,onMounted,onBeforeUnmount } from "vue";
import FlvPlayer from "flv.js";

const props = defineProps({
  //摄像头实例或者/编码
  videoInfo: {
    type: Object,
    required: true,
  },
})

const player = ref();
const videoDom = ref();
onMounted(()=>{
    console.log(props.videoInfo)
    initPlayer();
})


async function initPlayer() {
  FlvPlayer.isSupported() && (await FlvPlayer.getFeatureList());

  player.value = FlvPlayer.createPlayer({
    type: "flv",
    url: props.videoInfo.videoUrl,
  });
  videoDom.value = document.getElementById(props.videoInfo.id + "_video");

  // 设置视频元素
  player.value.attachMediaElement(videoDom.value);

  // 监听播放器就绪事件
  player.value.on(FlvPlayer.Events.MEDIA_INFO, () => {
    // 在此可以做一些播放器初始化后的操作
  });

  // 加载和播放视频
  player.value.load();
  player.value.play();
}
onBeforeUnmount(() => {
  player.value?.destroy();
});
</script>
<style scoped>
</style>