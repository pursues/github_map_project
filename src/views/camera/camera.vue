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
                <a-radio-group  v-model:value="listType" button-style="solid" @change="onListTypeChanged">
                    <!--        <a-radio-button :value="0">全部</a-radio-button>-->
                    <a-radio-button :value="1">大</a-radio-button>
                    <!-- <a-radio-button :value="4">待分派</a-radio-button> -->
                    <a-radio-button :value="2">中</a-radio-button>
                    <a-radio-button :value="4">小</a-radio-button>
                </a-radio-group>
                <a-button style="margin-left: 12px;" @click="search">刷新</a-button>
                <a-button  style="margin-left: 12px;" type="primary" @click="openModel(1)">新增</a-button>
                <a-button  style="margin-left: 12px;" type="primary" @click="router.go(-1)">返回主页</a-button>
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
                    <a-menu-item v-for="(it, i) in data" :key="it.id">{{ it.title }}</a-menu-item>
                <!-- </template> -->
                </a-menu>
            </div>
            <div class="con-right" id="conRight">
                <div v-for="(item,i) in data" :key="item.id" :class="{vid:selectedKeys == item.id }">
                    <Player :videoInfo="item"></Player>
                </div>
            </div>
            
            <!-- <a-table
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
                <template v-else-if="column.dataIndex === 'cam_img'">
                    <img :src="record.cam_img" style="width:80px;height:60px;" alt="">
                </template>
            </template>
            </a-table> -->
        </div>
        <AddModal ref="addModalRef" @on-success="search"></AddModal>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive,ref } from "vue";
import AddModal from "./AddModal.vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import Player from "./player.vue";

const router = useRouter();

const camName = ref('');
// 定义静态数据
const data = ref([]);

const listType = ref(1);

const selectedKeys = ref([])

const columns = ref([
  { title: "摄像头名称", dataIndex: "title", width: 120 },
  { title: "位置", dataIndex: "point", width: 120 },
  { title: "url", dataIndex: "videoUrl", width: 120,ellipsis: true },
  { title: "信息", dataIndex: "desc", width: 120,ellipsis: true },
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
    getList()
})

function getList(){
    // 获取本地数据
    const strList = localStorage.getItem('camera');
    // data.value = JSON.parse(strList);
    let list = JSON.parse(strList);
    if(camName.value){
        data.value = list.filter(it => it.title.includes(camName.value)) || [];
    }else{
        data.value = list;
    }
    console.log(data.value)
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

function onListTypeChanged(e){
    console.log(e)
    // 获取容器元素
    const container = document.getElementById('conRight');

   // 根据列数生成grid-template-columns的值
   let columns = `repeat(${e.target.value}, 1fr)`;
  
   // 设置grid-template-columns的值
   container.style.gridTemplateColumns = columns;
   container.style.gridTemplateRows = e.target.value == 1 ? '750px' : e.target.value == 2 ? '380px' : '180px';
  
}
function menuEvent(e){
    // console.log(e,selectedKeys.value)
    selectedKeys.value = [e.key]
    
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
    height:100%;
    padding: 20px;
    .hander{
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        // margin-bottom: 20px;
    }
    .content{
        display:flex;
        height: calc(100% - 60px);
        overflow: auto;
        .con-left{
            width:250px;
            border:1px solid #e6f4ff;
        }
        .con-right{
            border:1px solid #e6f4ff;
            flex:1;
            padding:10px;
            display: grid;
            grid-template-columns:1fr;
            // grid-template-rows: auto;
            // grid-template-rows:repeat(auto-fill, auto-fill);
            grid-gap: 10px;
            overflow:auto;
            .vid{
                border:1px solid #1677ff;
            }
        }
       
    }
}
</style>