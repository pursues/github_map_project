<template>
  <a-modal v-model:visible="isShow" width="800px" :title="title+'摄像头'" :mask-closable="false" @close="hide">
    <a-form
      ref="formRef"
      :label-col="{ style: { width: '100px' } }"
      :model="formState"
      :rules="rules"
      name="basic"
      style="margin-top:30px;"
    >
      <a-form-item label="摄像头名称" name="cam_name">
        <a-input placeholder="请输入摄像头名称" v-model:value="formState.cam_name" allow-clear :disabled="isLook" />
      </a-form-item>
      <a-form-item label="摄像头位置" name="point">
        <a-input placeholder="请输入位置坐标(如：113.470276,23.179303)" v-model:value="formState.point" allow-clear :disabled="isLook" />
      </a-form-item>
      <a-form-item label="摄像头url" name="cam_url">
        <a-input placeholder="请输入url" v-model:value="formState.cam_url" allow-clear :disabled="isLook" />
      </a-form-item>
      <a-form-item label="摄像头信息" name="cam_info" >
        <a-textarea
          :disabled="isLook"
          v-model:value="formState.cam_info"
          placeholder="请输入摄像头信息"
          :maxlength="300"
        ></a-textarea>
      </a-form-item>
    </a-form>
    <template #footer>
      <div class="text-center">
        <a-button type="primary" v-if="!isLook" @click="save">确定</a-button>
        <a-button type="default" class="ml-3" @click="hide">关闭</a-button>
      </div>
    </template>
  </a-modal>
</template>

<script setup lang="ts">
// 评价组件
import { ref, reactive } from "vue";
import { message } from "ant-design-vue";
import dayjs from "dayjs";
// 回填
const emits = defineEmits(["on-success"]);
// 显示弹窗
const isShow = ref(false);
const isLook = ref(false);
const title=ref('新增');
// 表单验证
const formRef = ref();
const formState = reactive({
  cam_name:'',
  cam_info:'',
  point:'',
  cam_url:'',
  update_time:'',
  id:'',
});
const rules = {
  cam_name: [{ required: true, message: "请输入摄像头名称", trigger: "change" }],
  point: [{ required: true, message: "请输入摄像头位置", trigger: "change" }],
  cam_url: [{ required: true, message: "请输入摄像头url", trigger: "change" }],
  cam_info: [{ required: true, message: "请输入摄像头信息", trigger: "change" }],
};

// 关闭
function hide() {
  isShow.value = false;
}
/**
 * @param { type } 1新增，2编辑，3查看
 * @param { row } 当前行数据
 * 
 * */ 
function show(type,row) {
  isShow.value = true;
  // 编辑
  if(type != 1){
    Object.keys(formState).forEach(it =>{
      formState[it] = row[it];
    })
  }else if(type == 1){
    // 新增
    Object.keys(formState).forEach(it =>{
      formState[it] = '';
    })
    formState.cam_type = undefined;
    formState.id = dayjs().valueOf()
  }
    //去除校验
    formRef.value?.clearValidate();
  //标题
  title.value = type == 1 ? '新增' : type == 2 ? '编辑' :'查看'
  // 禁用
  isLook.value = type == 3 ? true :false;
}

function typeChange(e,option){
  formState.cam_type_name = option.name;
  console.log(formState)
}

//保存
async function save() {
  console.log(formState)
  await formRef.value.validate();
  formState.update_time = dayjs().format('YYYY-MM-DD HH:mm:ss')
  // 先读取到存储
  const strList = localStorage.getItem('camera');
  // 解析处理啊
  let list = JSON.parse(strList) || [];
  // 判断list是否包含该数据，是则是编辑，否则是新增
  if(list.some(it => it.id == formState.id)){
    list = list.reduce((pre,item)=>{
      if(item.id == formState.id){
        pre.push(formState)
      }else{
        pre.push(item)
      }
      return pre
    },[])
  }else{
    list.push(formState)
  }

  localStorage.setItem('camera',JSON.stringify(list))
    message.success(`${title.value}成功`);
    emits("on-success");
    hide();
}

defineExpose({ show });
</script>
