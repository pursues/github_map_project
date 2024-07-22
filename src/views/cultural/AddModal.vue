<template>
  <a-modal
    v-model:visible="isShow"
    width="800px"
    :title="title + '文物保护点'"
    :mask-closable="false"
    @close="hide"
  >
    <a-form
      ref="formRef"
      :label-col="{ style: { width: '100px' } }"
      :model="formState"
      :rules="rules"
      name="basic"
      style="margin-top: 30px"
    >
      <a-form-item label="文物类型" name="type">
        <a-select
          placeholder="请选择类型"
          v-model:value="formState.type"
          @change="typeChange"
          :disabled="isLook"
        >
          <a-select-option :value="1" name="文物馆">文物馆</a-select-option>
          <a-select-option :value="2" name="文物点">文物点</a-select-option>
          <a-select-option :value="3" name="艺术馆">艺术馆</a-select-option>
          <a-select-option :value="4" name="博物馆">博物馆</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="文物名称" name="title">
        <a-input
          placeholder="请输入文物名称"
          v-model:value="formState.title"
          allow-clear
          :disabled="isLook"
        />
      </a-form-item>
      <a-form-item label="区域" name="address">
        <a-select
          placeholder="请选择区域"
          v-model:value="formState.address"
          @change="addressChange"
          :disabled="isLook"
        >
          <a-select-option :value="1" name="湘东区">湘东区</a-select-option>
          <a-select-option :value="2" name="安源区">安源区</a-select-option>
          <a-select-option :value="3" name="上栗县">上栗县</a-select-option>
          <a-select-option :value="4" name="莲花县">莲花县</a-select-option>
          <a-select-option :value="5" name="芦溪县">芦溪县</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="文物地址" name="point">
        <div
          id="point-select"
          style="width: 100%; height: 300px; margin-bottom: 10px"
        ></div>
        <a-input
          placeholder="请选择经纬度坐标"
          v-model:value="formState.point"
          allow-clear
          :disabled="isLook"
        />
      </a-form-item>
      <a-form-item label="文物信息" name="desc">
        <a-textarea
          :disabled="isLook"
          v-model:value="formState.desc"
          placeholder="请输入文物信息"
          :maxlength="300"
        ></a-textarea>
      </a-form-item>
      <a-form-item label="照片上传" name="icon">
        <ImgUpload
          v-model:value="formState.icon"
          :disabled="isLook"
        ></ImgUpload>
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
import ImgUpload from "../../components/imgUpload.vue";
const map: any = ref(null);
const BMap: any = ref(null);
// 回填
const emits = defineEmits(["on-success"]);
// 显示弹窗
const isShow = ref(false);
const isLook = ref(false);
const title = ref("新增");
// 表单验证
const formRef = ref();
const formState = reactive({
  type_name: "",
  type: undefined,
  address: undefined,
  address_name: "",
  title: "",
  point: "",
  desc: "",
  icon: "",
  update_time: "",
  id: "",
});
const rules = {
  type: [{ required: true, message: "请选择文物类型", trigger: "change" }],
  title: [{ required: true, message: "请输入文物名称", trigger: "change" }],
  point: [{ required: true, message: "请输入经纬度坐标", trigger: "change" }],
  address: [{ required: true, message: "请选择区域", trigger: "change" }],
  desc: [{ required: true, message: "请输入文物信息", trigger: "change" }],
  // icon: [{ required: true, message: "请上传文物照片", trigger: "change" }],
};
function initMap() {
  loadBMapScript("HDVSUEiV0lEVvjMEbPqEMhJ5PdBcbwIb")
    .then((BMapGL) => {
      BMap.value = BMapGL;
      // 创建Map实例
      map.value = new BMap.value.Map("point-select");
      // 创建点坐标
      const point = new BMap.value.Point(113.74021, 27.646307);
      map.value.setHeading(64.5); //设置地图旋转角度
      map.value.setTilt(73); //设置地图的倾斜角度
      map.value.enableScrollWheelZoom(true);
      // 地图设置中心点和放大级别
      map.value.centerAndZoom(point, 12);
      if (formState.point) {
        const arrPoint = formState.point.split(",");
        var selectPoint = new BMap.value.Point(arrPoint[0], arrPoint[1]);
        var selectMarker = new BMap.value.Marker(selectPoint);
        map.value.addOverlay(selectMarker);
      }
      map.value.addEventListener("click", (e) => {
        map.value.clearOverlays();
        formState.point = `${e.latlng.lng},${e.latlng.lat}`;
        var selectPoint = new BMap.value.Point(e.latlng.lng, e.latlng.lat);
        var selectMarker = new BMap.value.Marker(selectPoint);
        map.value.addOverlay(selectMarker);
      });
    })
    .catch(() => {
      console.log("地图加载失败");
    });
}
function loadBMapScript(key) {
  return new Promise((resolve, reject) => {
    if (typeof BMapGL !== "undefined") {
      resolve(BMapGL);
      return;
    }
    window.onCallback = function () {
      resolve(BMapGL);
    };
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://api.map.baidu.com/api?type=webgl&v=3.0&ak=${key}&callback=onCallback`;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
// 关闭
function hide() {
  isShow.value = false;
}
/**
 * @param { type } 1新增，2编辑，3查看
 * @param { row } 当前行数据
 *
 * */
function show(type, row) {
  isShow.value = true;
  // 编辑
  if (type != 1) {
    Object.keys(formState).forEach((it) => {
      formState[it] = row[it];
    });
  } else if (type == 1) {
    // 新增
    Object.keys(formState).forEach((it) => {
      formState[it] = "";
    });

    formState.type = undefined;
    formState.address = undefined;
    formState.id = dayjs().valueOf();
  }
  //去除校验
  formRef.value?.clearValidate();
  //标题
  title.value = type == 1 ? "新增" : type == 2 ? "编辑" : "查看";
  // 禁用
  isLook.value = type == 3 ? true : false;
  initMap();
}

function typeChange(e, option) {
  formState.type_name = option.name;
  console.log(formState);
}
function addressChange(e, option) {
  formState.address_name = option.name;
  console.log(formState);
}

//保存
async function save() {
  console.log(formState);
  await formRef.value.validate();
  formState.update_time = dayjs().format("YYYY-MM-DD HH:mm:ss");
  // 先读取到存储
  const strList = localStorage.getItem("cultural");
  // 解析处理啊
  let list = JSON.parse(strList) || [];
  // 判断list是否包含该数据，是则是编辑，否则是新增
  if (list.some((it) => it.id == formState.id)) {
    list = list.reduce((pre, item) => {
      if (item.id == formState.id) {
        pre.push(formState);
      } else {
        pre.push(item);
      }
      return pre;
    }, []);
  } else {
    list.push(formState);
  }
  // 添加存储
  localStorage.setItem("cultural", JSON.stringify(list));
  message.success(`${title.value}成功`);
  emits("on-success");
  hide();
}

defineExpose({ show });
</script>
