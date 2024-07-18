<template>
    <div>
        <a-upload
          :disabled="disabled"
          v-model:file-list="fileList"
          list-type="picture-card"
          :headers="{}"
          :data="{}"
          :multiple="false"
          :accept="accept"
          name="FileUpload"
          :beforeUpload="beforeUploadHandler"
          @preview="previewHandler"
          @change="changeHandler"
        >
          <div v-if="fileList.length < 1">
            <plus-outlined size="16" />
            <div class="ant-upload-text">上传</div>
          </div>
        </a-upload>   
    </div>
</template>
<script setup lang="ts">
// 评价组件
import { ref, onMounted } from "vue";
import { message } from "ant-design-vue";
import WaitFor from "./WaitFor"
import { PlusOutlined } from '@ant-design/icons-vue';

const props = defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
})

const emits = defineEmits(["update:value"]);
const fileList = ref([])
const  accept = ref('.png,.jpeg,.jpg,.svg');

onMounted(()=>{
    if (props.value) {
      fileList.value.push({
        uid: "-1",
        name: "",
        status: "done",
        url: props.value,
      });
    }
})
function beforeUploadHandler(file: File) {
  if (!accept.value?.includes(file.type?.split("/")[1])) {
    message.error("请上传正确格式的文件！");
    return false;
  }
  console.log(file)
}
function previewHandler(file) {
  const url = file.url.split("|")?.[1] ?? file.url;
  window.open(url, "_blank");
}
function changeHandler({file}) {
  console.log(file)
  new WaitFor(() => file.thumbUrl).then(() => {
    // 保存图片base64
    emits("update:value", file.thumbUrl);
  });
  
}


</script>