<template>
    <div class="camera">
        <div class="hander">
            <div class="top-left">
                <a-input-search
                    allow-clear
                    v-model:value="camName"
                    @search="search"
                    placeholder="按摄像头名称搜索..."
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
                        <!-- <a-button size="small" type="primary" danger>删除</a-button> -->
                        <a-button style="margin-left: 10px;" danger type="primary">删除</a-button>
                    </a-popconfirm>
                </template>
                <template v-else-if="column.dataIndex === 'cam_img'">
                    <img :src="record.cam_img" style="width:80px;height:60px;" alt="">
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

const camName = ref('');
// 定义静态数据
const data = ref([
]);
const columns = ref([
  { title: "摄像头名称", dataIndex: "cam_name", width: 120 },
  { title: "摄像头信息", dataIndex: "cam_info", width: 120 },
  { title: "摄像头位置", dataIndex: "point", width: 120 },
  { title: "摄像头url", dataIndex: "cam_url", width: 120,ellipsis: true },
  { title: "更新时间", dataIndex: "update_time", width: 100 },
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
     const strList = localStorage.getItem('camera');
    let list = JSON.parse(strList) || [];
    if(list.length == 0){
        list = [
            {
                cam_name:'广州博物馆',
                cam_info:'广州博物馆信息',
                point:'113.470276,23.179303',
                cam_url:'http://59.62.61.24:10000/sms/34020000002020000001/hls/34020000001320000011_34020000001320000011/live.m3u8',
                update_time:'2024-07-18 20:20:20',
                id:'234234324'
            }
        ]
        localStorage.setItem('camera',JSON.stringify(list));
    }

    getList()
})

function getList(){
    // 获取本地数据
    const strList = localStorage.getItem('camera');
    // data.value = JSON.parse(strList);
    let list = JSON.parse(strList);
    if(camName.value){
        data.value = list.filter(it => it.cam_name.includes(camName.value)) || [];
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
  const strList = localStorage.getItem('camera');
  // 解析处理啊
  let list = JSON.parse(strList) || [];

  let newList = list.filter(it => it.id != id );

  localStorage.setItem('camera',JSON.stringify(newList));
  message.success('删除成功');
  search();
}
</script>

<style scoped lang="less">
.camera{
    padding: 20px;
    .hander{
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        // margin-bottom: 20px;
    }
}
</style>