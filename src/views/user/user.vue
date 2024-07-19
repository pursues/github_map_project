<template>
  <div class="user">
      <div class="hander">
          <div class="top-left">
              <a-input-search
                  allow-clear
                  v-model:value="userName"
                  @search="search"
                  placeholder="按用户姓名搜索..."
                  style="width: 250px;"
              ></a-input-search>
          </div>
          <div class="top-right">
              <a-button @click="search">刷新</a-button>
              <a-button  style="margin-left: 12px;" type="primary" @click="openModel(1)">新增</a-button>
              <a-button  style="margin-left: 12px;" type="primary" @click="router.go(-1)">返回主页</a-button>
          </div>
      </div>
      <div class="content">
          <a-table
          :columns="columns"
          :data-source="data"
          :pagination="pageData"
          size="middle"
          bordered
          @change="onTableChanged"
          >
          <template #bodyCell="{ column, record }">
              <template v-if="column.dataIndex === 'action'">
                  <a-button   type="primary" @click="openModel(2,record)">编辑</a-button>
                  <a-button style="margin-left: 10px;" type="primary" @click="openModel(3,record)">查看</a-button>
                  <a-popconfirm title="确认删除？" @confirm="del(record.id)">
                      <a-button style="margin-left: 10px;" danger type="primary">删除</a-button>
                  </a-popconfirm>
              </template>
          </template>
          </a-table>
      </div>
      <AddModal ref="addModalRef" @on-success="search"></AddModal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive,ref } from "vue";
import AddModal from "./AddModal.vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userName = ref('');
// 定义静态数据
const data = ref([
]);
const columns = ref([
  { title: "ID", dataIndex: "id", width: 200 },
  { title: "用户姓名", dataIndex: "name", width: 120 },
  { title: "登录账号", dataIndex: "account", width: 120 },
  { title: "更新时间", dataIndex: "update_time", width: 100 },
  { title: "描述", dataIndex: "desc", width: 100 },
  { title: "操作", dataIndex: "action", width: 130 },
]);
const pageData = reactive({
total: 0,
current: 1,
pageSize: 10,
showQuickJumper: true,
showSizeChanger: true,
showTotal: (total) => {
  return `总共 ${total} 条数据`;
},
});
const addModalRef = ref();

onMounted(()=>{
   // 获取本地数据
   const strList = localStorage.getItem('user');
  let list = JSON.parse(strList) || [];
  if(list.length == 0){
      list = [
          {
              id:'23423423',
              name:'管理员',
              account:'admin',
              desc:'描述',
              update_time:'2024-07-18 20:20:20',
          }
      ]
      localStorage.setItem('user',JSON.stringify(list));
  }

  getList()
})

function getList(){
  // 获取本地数据
  const strList = localStorage.getItem('user');
  let list = JSON.parse(strList);
  if(userName.value){
    data.value = list.filter(it => it.name.includes(userName.value)) || [];
  }else{
    data.value = list;
  }

}
function search(){
  pageData.current = 1;
  getList();
}
function onTableChanged(pagination) {
pageData.current = pagination.current;
pageData.pageSize = pagination.pageSize;
getList();
}
/**
* @param { type } 1新增，2编辑，3查看
* @param { row } 当前行数据
* 
* */ 
function openModel(type,row={}){
  addModalRef.value.show(type,row);
}
// 删除
function del(id){
  
    // 先读取到存储
const strList = localStorage.getItem('user');
// 解析处理啊
let list = JSON.parse(strList) || [];

let newList = list.filter(it => it.id != id );

localStorage.setItem('user',JSON.stringify(newList));
message.success('删除成功');
search();
}
</script>

<style scoped lang="less">
.user{
  padding: 20px;
  .hander{
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
  }
}
</style>