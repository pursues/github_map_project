<template>
  <div class="app-content">

    <a-button type="primary" @click="routerChange('home')">主页</a-button>
    <a-button @click="routerChange('user')">用户管理</a-button>
    <a-button @click="routerChange('cultural_relics')">文物管理</a-button>
    <a-button @click="routerChange('camera')">摄像头管理</a-button>
    <router-view />
  </div>
</template>

<script setup lang="ts">

import { useRouter } from "vue-router"

console.log('主页进入')

const router = useRouter();

function routerChange(name){
  router.push({ name });
}

</script>

<style>

</style>
