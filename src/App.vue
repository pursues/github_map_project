<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import './api/user';


// 假设你已经安装了axios
import axios from 'axios'
 
// 获取列表
// axios.get('/api/items').then(response => {
//   console.log(response.data)
// })
// 添加新项目
// axios.post('/api/items', { id:1,name: '新项目yjytext', age: 21 }).then(response => {
//   console.log(response.data)
// })
// axios.post('/api/items', { id:2,name: '新项目yjytex1', age: 22 }).then(response => {
//   console.log(response.data)
// })
// axios.post('/api/items', {id:3, name: '新项目yjytex2', age: 24 }).then(response => {
//   console.log(response.data)
// })

// axios.get('/api/items').then(response => {
//   console.log(response.data,'获取的所有列表数据')
// })

// // 删除项目
// setTimeout(()=>{

//   axios.post('/api/items/del',{id:1}).then(response => {
//     console.log(response.data)
//   })

//   axios.get('/api/items').then(response => {
//     console.log(response.data,'获取的所有列表数据')
//   })

// },2000)
let index = 1;

function add(){
  axios.post('/api/items', { id:1+index,name: `新项目yjytext${index}`, age: 20+index }).then(response => {
    index++;
    getList()
  })
}

function del(){
  axios.post('/api/items/del',{id:3}).then(response => {
    getList()
  })
}

function getList(){
  axios.get('/api/items').then(response => {
  console.log(response.data,'获取的所有列表数据')
})
}

</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <button @click="add">新增</button>
  <button @click="del">删除</button>
  <button @click="getList">获取数据</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
