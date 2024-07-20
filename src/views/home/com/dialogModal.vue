<template>
  <a-modal
    v-model:open="isShow"
    :title="title"
    :width="800"
    @close="hide"
    :footer="null"
    wrapClassName="dialog-modal"
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
        <div class="video-content">
          <video
            v-if="detailObj.videoUrl"
            ref="videoElement"
            style="width: 100%; height: 100%"
            autoplay
            muted
            preload="metadata"
          ></video>
        </div>
      </div>
    </div>
  </a-modal>
</template>
<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from "vue";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";
import FlvPlayer from "flv.js";
import screenfull from "screenfull";
import { message } from "ant-design-vue";
import WaitFor from "../../../components/WaitFor";
const emit = defineEmits(["on-ok"]);
const detailObj = ref({});
const isShow = ref(false);
const title = ref("详细信息");
const player: any = ref(null);
const videoElement = ref(null);
const fullScreen = ref(false); //默认呈现非全屏状态
onMounted(() => {});
function show(detail) {
  detailObj.value = detail;
  console.log("🚀 ~ show ~ detail:", detail);
  isShow.value = true;
  if (detailObj.value.videoUrl) initPlayer();
  new WaitFor(() => videoElement.value).then(() => {
    videoElement.value.addEventListener("dblclick", changeScreen);
  });
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
function changeScreen() {
  fullScreen.value = !fullScreen.value;
  if (!screenfull.isEnabled) {
    // 如果不支持进入全屏，发出不支持提示
    message.warning("您的浏览器版本过低不支持全屏显示！");
    return false;
  }
  //此处填入需要全屏的ref属性值即可
  screenfull.toggle(videoElement.value);
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
  .row-detail {
    margin-bottom: 20px;
  }
  img {
    width: 400px;
    height: 300px;
    margin-left: 20px;
  }
  .video-content {
    text-align: center;
    position: relative;
    background: #000;
    video {
      height: 300px !important;
      margin-left: 20px;
      padding-right: 20px;
    }
    .full-screen {
      position: absolute;
      top: 10px;
      left: 210px;
    }
  }
}
</style>
