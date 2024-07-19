<template>
  <a-modal
    v-model:open="isShow"
    :title="title"
    :width="800"
    @close="hide"
    :footer="null"
  >
    <div class="modal-content">
      <div class="row-detail">
        名称：<a-input v-model:value="detailObj.title"></a-input>
      </div>
      <div class="row-detail">
        坐标：<a-input v-model:value="detailObj.point"></a-input>
      </div>
      <div class="row-detail" v-if="detailObj.desc">
        描述：<a-textarea
          v-model:value="detailObj.desc"
          :auto-size="{ minRows: 2, maxRows: 5 }"
        />
      </div>
      <div class="row-detail">
        其他信息:
        <a-popover v-if="detailObj.icon" placement="right">
          <template #content>
            <img
              :src="detailObj.icon"
              style="max-height: 300px; max-width: 400px"
            />
          </template>
          <img
            :src="detailObj.icon"
            style="max-height: 80px; max-width: 150px"
          />
        </a-popover>
        <video
          v-if="detailObj.videoUrl"
          ref="videoElement"
          style="width: 100%; height: 100%"
          autoplay
          playsinline
          muted
        ></video>
      </div>
    </div>
  </a-modal>
</template>
<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import FlvPlayer from "flv.js";
const emit = defineEmits(["on-ok"]);
const detailObj = ref({});
const isShow = ref(false);
const title = ref("详细信息");
const player: any = ref(null);
const videoElement = ref(null);
function show(detail) {
  detailObj.value = detail;
  console.log("🚀 ~ show ~ detail:", detail);
  isShow.value = true;
  initPlayer();
}
function hide() {
  isShow.value = false;
}
function onOk() {
  emit("on-ok");
}
async function initPlayer() {
  FlvPlayer.isSupported() && (await FlvPlayer.getFeatureList());

  player.value = FlvPlayer.createPlayer({
    type: "flv",
    url: detailObj.value.videoUrl,
  });

  // 设置视频元素
  player.value.attachMediaElement(videoElement.value);

  // 监听播放器就绪事件
  player.value.on(FlvPlayer.Events.MEDIA_INFO, () => {
    // 在此可以做一些播放器初始化后的操作
  });

  // 加载和播放视频
  player.value.load();
  player.value.play();
}
onBeforeMount(() => {
  player.value?.destroy();
});
defineExpose({
  show,
});
</script>
<style lang="less" scoped>
.modal-content {
  width: 100%;
  height: 100%;
  img {
    width: 400px;
    height: 300px;
    margin-left: 20px;
  }
  video {
    width: 400px;
    height: 300px;
    margin-left: 20px;
    padding-right: 20px;
  }
  .row-detail {
    margin-bottom: 20px;
  }
}
</style>
