<template>
    <div class="cultural">
        <div class="hander">
            <div class="top-left">
                <a-input-search
                    allow-clear
                    v-model:value="culName"
                    @search="search"
                    placeholder="按文物搜索..."
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
                <template v-else-if="column.dataIndex === 'icon'">
                    <img v-if="record.icon" :src="record.icon" style="width:80px;height:60px;" alt="">
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

const culName = ref('');
// 定义静态数据
const data = ref([
]);
const columns = ref([
  { title: "名称", dataIndex: "title", width: 120 },
  { title: "类型", dataIndex: "type_name", width: 100 },
  { title: "地点", dataIndex: "point", width: 100 },
  { title: "信息", dataIndex: "desc", width: 180,ellipsis: true },
  { title: "图片", dataIndex: "icon", width: 100 },
  { title: "更新时间", dataIndex: "update_time", width: 100 },
  { title: "操作", dataIndex: "action", width: 150 },
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
    const strList = localStorage.getItem('cultural');
    // data.value = JSON.parse(strList);
    let list = JSON.parse(strList);
    if(culName.value){
        data.value = list.filter(it => it.title.includes(culName.value)) || [];
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
  const strList = localStorage.getItem('cultural');
  // 解析处理啊
  let list = JSON.parse(strList) || [];

  let newList = list.filter(it => it.id != id );

  localStorage.setItem('cultural',JSON.stringify(newList));
  message.success('删除成功');
  search();
}
</script>

<style scoped lang="less">
.cultural{
    padding: 20px;
    .hander{
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
}
</style>