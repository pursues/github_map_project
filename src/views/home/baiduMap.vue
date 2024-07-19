<template>
  <div class="content">
    <div id="bmap"></div>
    <div class="bottom-slider">
      <img
        v-for="item in imgList"
        :key="item.name"
        :src="item.url"
        alt=""
        :title="item.name"
        @click="selectType(item)"
      />
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
import wenwuimg1 from "../../assets/wenwu1.png";
import wenwuimg2 from "../../assets/wenwu2.png";
import wenwuimg3 from "../../assets/wenwu3.png";
import wenwuimg4 from "../../assets/wenwu4.png";
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
          point: "113.91087,27.651954",
          title: "白源站",
          type: 5,
          icon: "",
          videoUrl:
            "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000011_34020000001320000011.flv",
          desc: "",
        },
        {
          point: "113.825638,27.601641",
          title: "萍乡技师学院",
          type: 5,
          icon: "",
          videoUrl:
            "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000011_34020000001320000011.flv",
          desc: "",
        },
        {
          point: "113.614505,27.639449",
          title: "吴楚老关",
          type: 2,
          icon: wenwuimg1,
          desc: "吴楚关隘遗址座落在江西省萍乡市湘东区老关镇老关村，古为吴楚要塞。老关地处赣西边界，相传自春秋设关卡在此，明嘉靖年间（1522-1566）年知县杨自治在老关建营房、置关楼，现关卡虽毁，城墙遗迹尚存，故称老关。该遗址通体为红石所砌，到20世纪60年代尚保存良好，存有关门，由明朝重匠题写的“插岭关”“江西锁铜”的界碑，并存有132米长，6米高的古城墙，该遗址毁于20世纪70年代的置田运动，现仅存132米长、2.3米高、宽2.61米的城墙。 ",
        },
        {
          point: "113.656329,27.539471",
          title: "窑前抗战到底摩崖石刻",
          type: 2,
          icon: wenwuimg2,
          desc: "该石刻位于江西省萍乡市湘东区排上镇排上村窑前组，坐西朝东，“抗战到底”四字为美术黑体字，刻于1945年，阴刻。每个字的高度和长度分别为1.2米和1米，石刻总长为7米。据考证，当年萍乡中学全体师生从萍城为躲避日机轰炸迁于此地，师生们对侵略者深恶痛绝，于是刻标语于此地。",
        },
        {
          point: "113.725315,27.681262",
          title: "萍洲瑾珊家塾",
          type: 2,
          icon: wenwuimg3,
          desc: "瑾珊家塾又名黎氏公祠，位于江西省萍乡市湘东区荷尧镇萍洲村桐田组，该祠堂为黎家秀才黎洛田于清代所建，坐北朝南，面宽13米，长21米，面积273方米，干打垒砖木混建，硬山顶，风火墙，南方传统民居建筑，侧房马头墙上绘有彩色幅纹图案，前为门厅，后为正殿，正殿内有描金缕空花板门，该建筑对当地传统居民的风格有研究价值。",
        },
        {
          point: "113.630042,27.634447",
          title: "老关火车站战斗遗址",
          type: 2,
          icon: wenwuimg4,
          desc: "该遗址位于萍乡市湘东区老关镇老关村老关车站组，总占地面积15876平方米，车站始建于民国时期，呈东西走向，日前保留东西长378米，南北宽42米的车站遗址，仅存部份办公楼、候车室、水塔及货运场等附属建筑。该站在1927年9月初时为秋收起义部队第一路纵队的安源工人矿警队为主力，在攻占萍乡县城失败后转向进攻醴陵县城的重要交通枢纽，为研究秋收起义部队的转移提供了重要的实物依据。",
        },
      ];
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
  }
}
</style>
