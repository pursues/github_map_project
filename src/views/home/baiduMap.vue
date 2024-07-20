<template>
  <div class="content">
    <div id="bmap"></div>
    <div class="bottom-slider">
      <div v-for="item in imgList" :key="item.name">
        <img
          :src="item.url"
          alt=""
          :title="item.name"
          @click="selectType(item)"
        />
        <div class="point-name">{{ item.name }}</div>
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
  { name: "文物馆", type: 1, url: img1 },
  { name: "文物点", type: 2, url: img2 },
  { name: "艺术馆", type: 3, url: img3 },
  { name: "博物馆", type: 4, url: img4 },
  { name: "摄像头", type: 5, url: img5 },
]);
onMounted(() => {
  loadBMapScript("HDVSUEiV0lEVvjMEbPqEMhJ5PdBcbwIb")
    .then((BMapGL) => {
      BMap.value = BMapGL;
      wenwuguanIcon.value = new BMap.value.Icon(
        img1,
        new BMap.value.Size(23, 25),
        {
          offset: new BMap.value.Size(10, 25), // 指定定位位置
          imageOffset: new BMap.value.Size(0, 0 - 0 * 25), // 设置图片偏移使用左侧的图片
        }
      );
      wenwuIcon.value = new BMap.value.Icon(img2, new BMap.value.Size(23, 25), {
        offset: new BMap.value.Size(10, 25), // 指定定位位置
        imageOffset: new BMap.value.Size(0, 0 - 0 * 25), // 设置图片偏移使用左侧的图片
      });
      yishuIcon.value = new BMap.value.Icon(img3, new BMap.value.Size(23, 25), {
        offset: new BMap.value.Size(10, 25), // 指定定位位置
        imageOffset: new BMap.value.Size(0, 0 - 0 * 25), // 设置图片偏移使用左侧的图片
      });
      bowuIcon.value = new BMap.value.Icon(img4, new BMap.value.Size(23, 25), {
        offset: new BMap.value.Size(10, 25), // 指定定位位置
        imageOffset: new BMap.value.Size(0, 0 - 0 * 25), // 设置图片偏移使用左侧的图片
      });
      sxtIcon.value = new BMap.value.Icon(img5, new BMap.value.Size(23, 25), {
        offset: new BMap.value.Size(10, 25), // 指定定位位置
        imageOffset: new BMap.value.Size(0, 0 - 0 * 25), // 设置图片偏移使用左侧的图片
      });
      markerArr.value = [
        {
          point: "113.86423,27.666289",
          title: "聚龙体育公园",
          type: 1,
          icon: "",
          desc: "",
        },
        {
          point: "113.868685,27.630321",
          title: "凤凰街道办事处",
          type: 1,
          icon: "",
          desc: "",
        },
        {
          point: "113.842958,27.620848",
          title: "萍乡中学",
          type: 3,
          icon: "",
          desc: "",
        },
        {
          point: "113.839652,27.671536",
          title: "萍乡实验小学",
          type: 3,
          icon: "",
          desc: "",
        },
        {
          point: "113.908642,27.668464",
          title: "江西工程职业技术学院",
          type: 4,
          icon: "",
          desc: "",
        },
        {
          point: "113.857187,27.649778",
          title: "润达国际",
          type: 4,
          icon: "",
          desc: "",
        },
        {
          point: "113.602263,27.637603",
          title: "老关桥右",
          type: 5,
          icon: "",
          videoUrl:
            "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000113_34020000001320000113.flv",
          desc: "",
        },
        {
          point: "113.592346,27.611998",
          title: "老关桥左",
          type: 5,
          icon: "",
          videoUrl:
            "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000113_34020000001320000113.flv",
          desc: "",
        },
        {
          point: "1113.630003,27.602267",
          title: "老关火车站左过道",
          type: 5,
          icon: "",
          videoUrl:
            "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000165_34020000001320000165.flv",
          desc: "",
        },
        {
          point: "113.614624,27.631459",
          title: "老关火车站后左",
          type: 5,
          icon: "",
          videoUrl: "",
          desc: "",
        },
        {
          point: "113.577829,27.594327",
          title: "老关火车站后右",
          type: 5,
          icon: "",
          videoUrl:
            "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000113_34020000001320000113.flv",
          desc: "",
        },
        {
          point: "113.91087,27.651954",
          title: "老关火车站前",
          type: 5,
          icon: "",
          videoUrl:
            "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000168_34020000001320000168.flv",
          desc: "",
        },
        {
          point: "113.825638,27.601641",
          title: "老关火车站",
          type: 5,
          icon: "",
          videoUrl:
            "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000011_34020000001320000011.flv",
          desc: "",
        },
      ];
      const wenwuPointArr = JSON.parse(localStorage.getItem("cultural"));
      console.log(wenwuPointArr,"wenwuPointArr")
      markerArr.value = markerArr.value.concat(wenwuPointArr);
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
      // 地图添加点标记
      map.value.addOverlay(pointMarker);
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
    //按照地图点坐标生成标记
    map.value.addOverlay(marker[i]);
    marker[i].addEventListener("click", function () {
      dialogRef.value.show(markerArr.value[i]);
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
    bottom: 50px;
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
