<template>
  <div class="app-content">
    <!-- <div class="top">
      <a-dropdown class="ml-5 mr-1 cursor-pointer">
        <div class="avatar user">
          <a-button class="setting">{{ manageName }} <DownOutlined /></a-button>
        </div>
        <template #overlay>
          <a-menu @click="onClick" style="margin-top: 10px">
            <a-menu-item v-for="(it, i) in list" :key="it.key">
              <span class="ml-2 align-middle">{{ it.name }}</span>
              <a-menu-divider />
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div> -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
// import { DownOutlined } from "@ant-design/icons-vue";
// import { useRouter } from "vue-router";
// import { ref } from "vue";

// const router = useRouter();

// const manageName = ref("主页");

// const list = ref([
//   { name: "主页", key: "home" },
//   { name: "用户管理", key: "user" },
//   { name: "文物管理", key: "cultural_relics" },
//   { name: "摄像头管理", key: "camera" },
// ]);

// function onClick(item) {
//   router.push({ name: item.key });
//   manageName.value = list.value.find((ei) => ei.key == item.key).name;
// }

// function routerChange(name){
//   router.push({ name });
// }
</script>

<style scoped lang="less">
.top {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99;
  .setting {
    font-size: 14px;
    // width: 40px;
    // height: 25px;
  }
}
</style>
