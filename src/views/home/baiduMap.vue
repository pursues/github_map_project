<template>
  <div class="content">
    <div id="bmap"></div>
    <div class="bottom-slider">
      <div v-for="item in imgList" :key="item.type_name">
        <img
          :src="item.url"
          alt=""
          :title="item.type_name"
          @click="selectType(item)"
        />
        <div class="point-name">{{ item.type_name }}({{ item.value }})</div>
      </div>
    </div>
    <DialogModal ref="dialogRef"></DialogModal>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { loadBMapScript } from "../../assets/loadMap";
import markLogo from "../../assets/logo.png";
import mapjson from "../../assets/map.json";
import img1 from "../../assets/img/green.png";
import img2 from "../../assets/img/circle.png";
import img3 from "../../assets/img/info_5.png";
import img4 from "../../assets/img/star1.png";
import img5 from "../../assets/img/sxt.png";
import { cloneDeep } from "lodash-es";
import DialogModal from "./com/dialogModal.vue";
const map: any = ref(null);
const markerArr: any = ref([]);
const cloneMarkArr: any = ref([]);
const BMap: any = ref(null);
const wenwuguanIcon: any = ref(null);
const wenwuIcon: any = ref(null);
const yishuIcon: any = ref(null);
const bowuIcon: any = ref(null);
const sxtIcon: any = ref(null);
const dialogRef = ref(null);
const imgList = ref([
  { type_name: "文物馆", type: 1, url: img1 },
  { type_name: "文物点", type: 2, url: img2 },
  { type_name: "艺术馆", type: 3, url: img3 },
  { type_name: "博物馆", type: 4, url: img4 },
  { type_name: "摄像头", type: 5, url: img5 },
]);
const countBy = (arr, key) =>
  arr.reduce((acc, obj) => {
    const value = obj[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
onMounted(() => {
  loadBMapScript("HDVSUEiV0lEVvjMEbPqEMhJ5PdBcbwIb")
    .then((BMapGL) => {
      BMap.value = BMapGL;
      wenwuguanIcon.value = new BMap.value.Icon(
        img1,
        new BMap.value.Size(25, 25),
        {
          offset: new BMap.value.Size(10, 25), // 指定定位位置
          imageOffset: new BMap.value.Size(0, 0), // 设置图片偏移使用左侧的图片
        }
      );
      wenwuIcon.value = new BMap.value.Icon(img2, new BMap.value.Size(25, 25), {
        offset: new BMap.value.Size(10, 25), // 指定定位位置
        imageOffset: new BMap.value.Size(0, 0), // 设置图片偏移使用左侧的图片
      });
      yishuIcon.value = new BMap.value.Icon(img3, new BMap.value.Size(25, 25), {
        offset: new BMap.value.Size(10, 25), // 指定定位位置
        imageOffset: new BMap.value.Size(0, 0), // 设置图片偏移使用左侧的图片
      });
      bowuIcon.value = new BMap.value.Icon(img4, new BMap.value.Size(25, 25), {
        offset: new BMap.value.Size(10, 25), // 指定定位位置
        imageOffset: new BMap.value.Size(0, 0), // 设置图片偏移使用左侧的图片
      });
      sxtIcon.value = new BMap.value.Icon(img5, new BMap.value.Size(25, 25), {
        offset: new BMap.value.Size(10, 25), // 指定定位位置
        imageOffset: new BMap.value.Size(0, 0), // 设置图片偏移使用左侧的图片
      });
      markerArr.value = [];
      const wenwuPointArr = JSON.parse(localStorage.getItem("cultural"));
      const sxtPointArr = JSON.parse(localStorage.getItem("camera"));
      const occurrences = countBy([...wenwuPointArr, ...sxtPointArr], "type");
      const Data = Object.entries(occurrences).map(([type, value]) => ({
        type,
        value,
      }));

      imgList.value = Data.map((item, index) => {
        return {
          type_name: imgList.value[index].type_name,
          value: item.value,
          url: imgList.value[index].url,
          type: imgList.value[index].type,
        };
      });
      markerArr.value = [...wenwuPointArr, ...markerArr.value, ...sxtPointArr];
      cloneMarkArr.value = cloneDeep(markerArr.value);
      // 创建Map实例
      // ,{ mapType: BMAP_SATELLITE_MAP }
      map.value = new BMap.value.Map("bmap");
      // 创建点坐标
      const point = new BMap.value.Point(113.74021, 27.646307);
      map.value.setHeading(64.5); //设置地图旋转角度
      map.value.setTilt(73); //设置地图的倾斜角度
      map.value.enableScrollWheelZoom(true);
      // 地图设置中心点和放大级别
      map.value.centerAndZoom(point, 12);
      map.value.setMapStyleV2({ styleJson: mapjson });
      map_init(); //默认呈现文物馆
    })
    .catch(() => {
      console.log("地图加载失败");
    });
});
function map_init(iconObj?) {
  var point = new Array(); //存放标注点经纬信息的数组
  var marker = new Array(); //存放标注点对象的数组
  for (let i = 0; i < markerArr.value.length; i++) {
    var p0 = markerArr.value[i].point.split(",")[0]; //
    var p1 = markerArr.value[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来
    point[i] = new BMap.value.Point(p0, p1); //循环生成新的地图点
    if (iconObj) {
      marker[i] = new BMap.value.Marker(point[i], {
        icon: iconObj,
      });
    } else {
      marker[i] = new BMap.value.Marker(point[i], {
        icon:
          markerArr.value[i].type == 1
            ? wenwuguanIcon.value
            : markerArr.value[i].type == 2
            ? wenwuIcon.value
            : markerArr.value[i].type == 3
            ? yishuIcon.value
            : markerArr.value[i].type == 4
            ? bowuIcon.value
            : sxtIcon.value,
      });
    }
    let label = new BMap.value.Label(markerArr.value[i].title, {
      offset: new BMap.value.Size(20, -10),
    });
    //按照地图点坐标生成标记
    map.value.addOverlay(marker[i]);
    marker[i].setLabel(label);
    label.setStyle({
      background: "rgba(0,0,0,0)",
      color: "#fff",
      border: "none",
      display:"none"
    });
    marker[i].addEventListener("click", function () {
      dialogRef.value.show(markerArr.value[i]);
    });
    marker[i].addEventListener("mouseover", function () {
      label.setStyle({ display: "block" });
    });
    marker[i].addEventListener("mouseout", function () {
      label.setStyle({ display: "none" });
    });
  }
}
function selectType(item) {
  map.value.clearOverlays();
  markerArr.value = cloneMarkArr.value.filter((ite) => {
    return ite.type == item.type;
  });
  switch (item.type) {
    case 1:
      map_init(wenwuguanIcon.value);
      break;
    case 2:
      map_init(wenwuIcon.value);
      break;
    case 3:
      map_init(yishuIcon.value);
      break;
    case 4:
      map_init(bowuIcon.value);
      break;
    case 5:
      map_init(sxtIcon.value);
      break;
  }
}
</script>

<style scoped lang="less">
.content {
  width: 100%;
  height: 100%;
  position: relative;
  #bmap {
    width: 100%;
    height: 100%;
  }
  .bottom-slider {
    width: 200px;
    position: absolute;
    z-index: 999;
    bottom: 115px;
    display: flex;
    margin-left: -100px;
    left: 50%;
    justify-content: center;
    column-gap: 50px;
    text-align: center;
    img {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    .point-name {
      color: #c3e5ff;
      font-size: 12px;
      margin-top: 5px;
    }
  }
}
</style>
