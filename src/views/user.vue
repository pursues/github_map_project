<template>
    <div>
      <h1>用户选择</h1>
      <a-button @click="add">添加</a-button>
      <a-button @click="del">删除</a-button>
      <a-button @click="getList">数据获取</a-button>
    </div>
</template>
<script setup lang="ts">
// import './api/user';


// 假设你已经安装了axios
import axios from 'axios'
 

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