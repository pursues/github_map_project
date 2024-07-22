<template>
  <div class="camera">
    <div class="hander">
      <div class="top-left">
        <a-input-search
          allow-clear
          v-model:value="camName"
          @search="search"
          placeholder="按摄像头名称搜索..."
          style="width: 250px"
        ></a-input-search>
      </div>
      <div class="top-right">
        <a-button
          :class="{ active: cellCount === 1 }"
          @click="handleCount(1)"
          style="margin-right: 5px"
          >1屏</a-button
        >
        <a-button
          :class="{ active: cellCount === 4 }"
          @click="handleCount(4)"
          style="margin-right: 5px"
          >4屏</a-button
        >
        <a-button
          :class="{ active: cellCount === 6 }"
          @click="handleCount(6)"
          style="margin-right: 5px"
          >6屏</a-button
        >
        <a-button
          :class="{ active: cellCount === 9 }"
          @click="handleCount(9)"
          style="margin-right: 5px"
          >9屏</a-button
        >
        <a-button
          :class="{ active: cellCount === 16 }"
          @click="handleCount(16)"
          style="margin-right: 5px"
          >16屏</a-button
        >

        <a-button style="margin-left: 12px" @click="search">刷新</a-button>
        <a-button style="margin-left: 12px" type="primary" @click="openModel(1)"
          >新增</a-button
        >
        <a-button
          style="margin-left: 12px"
          type="primary"
          @click="router.go(-1)"
          >返回主页</a-button
        >
      </div>
    </div>
    <div class="content">
      <div class="con-left">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          @click="menuEvent"
        >
          <!-- <template > -->
          <a-menu-item v-for="(it, i) in leftNavList" :key="it.id">{{
            it.title
          }}</a-menu-item>
          <!-- </template> -->
        </a-menu>
      </div>
      <div class="con-right" id="conRight">
        <div class="cell-player">
          <div
            :class="cellClass(item.i)"
            v-for="(item, index) in data"
            :key="index"
          >
            <Player
              :title="item.title"
              v-if="cellCount != 6"
              :url="item.videoUrl"
              :class="{ vid: selectedKeys == item.id }"
            >
            </Player>
            <Player
              :title="item.title"
              v-if="cellCount == 6 && item.i != 2 && item.i != 3"
              :url="item.videoUrl"
              :class="{ vid: selectedKeys == item.id }"
            ></Player>
            <template v-if="cellCount == 6 && item.i == 2">
              <div class="cell-player-6-2-cell">
                <Player
                  :title="item.title"
                  :url="item.videoUrl"
                  :class="{ vid: selectedKeys == item.id }"
                ></Player>
                <Player
                  :title="item.title"
                  :url="data[index + 1].videoUrl"
                  :class="{ vid: selectedKeys == data[index + 1].id }"
                ></Player>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <AddModal ref="addModalRef" @on-success="search"></AddModal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, computed } from "vue";
import AddModal from "./AddModal.vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import Player from "./player.vue";
import { cloneDeep } from "lodash-es";

const router = useRouter();

const camName = ref("");
// 定义静态数据
const data: any = ref([]);

const listType = ref(1);

const selectedKeys = ref([]);

const addModalRef = ref();

const cellCount = ref<Number>(4);

const data2 = ref<any>([]);
// 左侧导航使用
const leftNavList = ref([]);

const cellClass = computed(() => {
  return function (index) {
    switch (cellCount.value) {
      case 1:
        return ["cell-player-1"];
      case 4:
        return ["cell-player-4"];
      case 6:
        if (index == 1) return ["cell-player-6-1"];
        if (index == 2) return ["cell-player-6-2"];
        if (index == 3) return ["cell-player-6-none"];
        return ["cell-player-6"];
      case 9:
        return ["cell-player-9"];
      case 16:
        return ["cell-player-16"];
      default:
        break;
    }
  };
});

onMounted(() => {
  getList();
});

function getList() {
  // 获取本地数据
  const strList = localStorage.getItem("camera");
  // data.value = JSON.parse(strList);
  let list = JSON.parse(strList);
  if (camName.value) {
    data.value =
      list.filter((it, index) => {
        it.i = index + 1;
        return it.title.includes(camName.value);
      }) || [];
  } else {
    data.value = list.map((item, index) => {
      item.i = index + 1;
      return item;
    });
  }
  data2.value = cloneDeep(data.value);
  leftNavList.value = cloneDeep(data.value);
  handleCount(4);
}
const handleCount = (num: any) => {
  cellCount.value = num;
  data.value = [];
  if (data2.value.length >= 6) {
    data.value = data2.value.slice(0, num);
  }
  for (let i = data2.value.length; i < num; i++) {
    data.value.push({
      videoUrl: "",
      i: i,
      title: "",
    });
  }
};

function search() {
  getList();
}

function menuEvent(e) {
  selectedKeys.value = [e.key];
  data.value = leftNavList.value.filter(it => it.id == e.key);
  cellCount.value = 1;
}

/**
 * @param { type } 1新增，2编辑，3查看
 * @param { row } 当前行数据
 *
 * */
function openModel(type, row = {}) {
  addModalRef.value.show(type, row);
}
// 删除
function del(id) {
  // 先读取到存储
  const strList = localStorage.getItem("camera");
  // 解析处理啊
  let list = JSON.parse(strList) || [];

  let newList = list.filter((it) => it.id != id);

  localStorage.setItem("camera", JSON.stringify(newList));
  message.success("删除成功");
  search();
}
</script>

<style scoped lang="less">
.camera {
  height: 100%;
  padding: 20px;
  .hander {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    // margin-bottom: 20px;
  }
  .content {
    display: flex;
    height: calc(100% - 60px);
    overflow: auto;
    .con-left {
      width: 250px;
      border: 1px solid #e6f4ff;
    }
    .con-right {
      border: 1px solid #e6f4ff;
      flex: 1;
      padding: 10px;
      display: grid;
      grid-template-columns: 1fr;
      // grid-template-rows: auto;
      // grid-template-rows:repeat(auto-fill, auto-fill);
      grid-gap: 10px;
      overflow: auto;
      .vid {
        border: 3px solid #1677ff;
      }

      .cell-tool {
        height: 40px;
        line-height: 30px;
        padding: 0 7px;
      }

      .cell-player {
        width: 100%;
        height: calc(100% - 40px);
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .cell-player-4 {
        width: 50%;
        height: 50% !important;
        box-sizing: border-box;
      }

      .cell-player-1 {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }

      .cell-player-6-1 {
        width: 66.66%;
        height: 66.66% !important;
        box-sizing: border-box;
      }

      .cell-player-6-2 {
        width: 33.33%;
        height: 66.66% !important;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      }

      .cell-player-6-none {
        display: none;
      }

      .cell-player-6-2-cell {
        width: 100%;
        height: 50% !important;
        box-sizing: border-box;
      }

      .cell-player-6 {
        width: 33.33%;
        height: 33.33% !important;
        box-sizing: border-box;
      }

      .cell-player-9 {
        width: 33.33%;
        height: 33.33% !important;
        box-sizing: border-box;
      }

      .cell-player-16 {
        width: 25%;
        height: 25% !important;
        box-sizing: border-box;
      }

      .cell {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }
    }
  }
  .active {
    color: #fff;
    background: #128df9;
  }
}
</style>
