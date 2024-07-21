<template>
  <div class="app-content">
    <!-- <div class="top">
      <a-dropdown class="ml-5 mr-1 cursor-pointer">
        <div class="avatar user">
          <a-button class="setting">{{ manageName }} <DownOutlined /></a-button>
        </div>
        <template #overlay>
          <a-menu @click="onClick" style="margin-top: 10px">
            <a-menu-item v-for="(it, i) in list" :key="it.key">
              <span class="ml-2 align-middle">{{ it.name }}</span>
              <a-menu-divider />
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div> -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
// import { DownOutlined } from "@ant-design/icons-vue";
// import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";

import wenwuimg1 from "./assets/wenwu1.png";
import wenwuimg2 from "./assets/wenwu2.png";
import wenwuimg3 from "./assets/wenwu3.png";
import wenwuimg4 from "./assets/wenwu4.png";
import bo1 from "./assets/bo1.png";
import bo2 from "./assets/bo2.png";
import wen1 from "./assets/wen1.png";
import wen2 from "./assets/wen2.png";
import yi1 from "./assets/yi1.png";
import yi2 from "./assets/yi2.png";

onBeforeMount(() => {
  // 文物初始化
  initCultural();
  // 摄像头初始化
  initCamera();
  // 用户信息初始化
  initUser();
});

// 初始化文物管理数据集
function initCultural() {
  // 获取本地数据
  const strList = localStorage.getItem("cultural");
  let list = JSON.parse(strList) || [];
  // 如果没有，则说明需要初始化
  if (list.length == 0) {
    list = [
      {
        title: "吴楚老关",
        desc: "吴楚关隘遗址座落在江西省萍乡市湘东区老关镇老关村，古为吴楚要塞。老关地处赣西边界，相传自春秋设关卡在此，明嘉靖年间（1522-1566）年知县杨自治在老关建营房、置关楼，现关卡虽毁，城墙遗迹尚存，故称老关。该遗址通体为红石所砌，到20世纪60年代尚保存良好，存有关门，由明朝重匠题写的“插岭关”“江西锁铜”的界碑，并存有132米长，6米高的古城墙，该遗址毁于20世纪70年代的置田运动，现仅存132米长、2.3米高、宽2.61米的城墙。",
        icon: wenwuimg1,
        address: "湘东区",
        type: 2,
        type_name: "文物点",
        point: "113.614505,27.639449",
        update_time: "2024-07-18 20:20:20",
        id: "1234567",
      },
      {
        point: "113.656329,27.539471",
        title: "窑前抗战到底摩崖石刻",
        address: "湘东区",
        type: 2,
        type_name: "文物点",
        icon: wenwuimg2,
        update_time: "2024-07-18 20:20:20",
        id: "23456787",
        desc: "该石刻位于江西省萍乡市湘东区排上镇排上村窑前组，坐西朝东，“抗战到底”四字为美术黑体字，刻于1945年，阴刻。每个字的高度和长度分别为1.2米和1米，石刻总长为7米。据考证，当年萍乡中学全体师生从萍城为躲避日机轰炸迁于此地，师生们对侵略者深恶痛绝，于是刻标语于此地。",
      },
      {
        point: "113.725315,27.681262",
        title: "萍洲瑾珊家塾",
        address: "湘东区",
        type: 2,
        type_name: "文物点",
        icon: wenwuimg3,
        update_time: "2024-07-18 20:20:20",
        id: "3456789",
        desc: "瑾珊家塾又名黎氏公祠，位于江西省萍乡市湘东区荷尧镇萍洲村桐田组，该祠堂为黎家秀才黎洛田于清代所建，坐北朝南，面宽13米，长21米，面积273方米，干打垒砖木混建，硬山顶，风火墙，南方传统民居建筑，侧房马头墙上绘有彩色幅纹图案，前为门厅，后为正殿，正殿内有描金缕空花板门，该建筑对当地传统居民的风格有研究价值。",
      },
      {
        point: "113.630042,27.634447",
        title: "老关火车站战斗遗址",
        address: "湘东区",
        type: 2,
        type_name: "文物点",
        icon: wenwuimg4,
        update_time: "2024-07-18 20:20:20",
        id: "45678967",
        desc: "该遗址位于萍乡市湘东区老关镇老关村老关车站组，总占地面积15876平方米，车站始建于民国时期，呈东西走向，日前保留东西长378米，南北宽42米的车站遗址，仅存部份办公楼、候车室、水塔及货运场等附属建筑。该站在1927年9月初时为秋收起义部队第一路纵队的安源工人矿警队为主力，在攻占萍乡县城失败后转向进攻醴陵县城的重要交通枢纽，为研究秋收起义部队的转移提供了重要的实物依据。",
      },
      {
        point: "113.866634,27.64644",
        title: "萍乡博物馆",
        address: "湘东区",
        type: 4,
        type_name: "博物馆",
        icon: bo1,
        update_time: "2024-07-20 14:04:20",
        id: "bo45678967",
        desc: "萍乡博物馆是保护、研究和展示历史文化遗产和人类环境物证的专门机构，是集收藏、考古、研究和展示于一体的综合性现代化博物馆，是进行爱国主义教育、历史文化和科普宣传的重要阵地。",
      },
      {
        point: "114.073576,27.641866",
        title: "吴楚风博物馆",
        address: "安源区",
        type: 4,
        type_name: "博物馆",
        icon: bo2,
        update_time: "2024-07-20 14:04:20",
        id: "bo456734568967",
        desc: "吴楚风博物馆是当地一座老祠堂改建而成，里面收藏了东阳村几百年留存下来的文物，其中珍藏了一块乾隆圣旨匾额，堪称“镇馆之宝”。",
      },
      {
        point: "113.964001,27.135573",
        title: "莲花县文化馆",
        address: "莲花县",
        type: 1,
        type_name: "文物馆",
        icon: wen1,
        update_time: "2024-07-20 14:04:20",
        id: "wen23456734568967",
        desc: "莲花县文化馆被文化和旅游部认定为传统美术“锡雕（莲花打锡）”项目的保护单位。",
      },
      {
        point: "113.89159,27.66826",
        title: "萍乡市文化馆",
        address: "安源区",
        type: 1,
        type_name: "文物馆",
        icon: wen2,
        update_time: "2024-07-20 14:04:20",
        id: "wen56774567345e68967",
        desc: "萍乡市文化馆新馆馆舍建筑面积为9000多平方米,配备了专业的培训功能教室、展示展览展厅、开展群众活动的演艺厅、艺术创作的录音室录播室等。",
      },
      {
        point: "114.046543,27.636402",
        title: "芦溪县美术馆",
        address: "芦溪县",
        type: 3,
        type_name: "艺术馆",
        icon: yi1,
        update_time: "2024-07-20 14:04:20",
        id: "yi56774567345e68967",
        desc: "萍乡市芦溪县美术馆系国家公益性事业单位，国家二级馆。芦溪县美术馆前身为 1942 年建立的民众教育馆，迄今有 73 年的历史。",
      },
      {
        point: "113.867472,27.651515",
        title: "童画里的艺术馆",
        address: "安源区",
        type: 3,
        type_name: "艺术馆",
        icon: yi2,
        update_time: "2024-07-20 14:04:20",
        id: "yi5677456337345e68967",
        desc: "童画里的艺术馆致力于公共艺术教育事业,结合市艺术馆各种类型展览,不断策划举办各种公共教育活动,活动内容丰富,涉及少儿活动,艺术讲座,公益艺术讲堂等。",
      },
    ];
    localStorage.setItem("cultural", JSON.stringify(list));
  }
}

function initCamera() {
  // 获取本地数据
  const strList = localStorage.getItem("camera");
  let list = JSON.parse(strList) || [];
  // 如果没有，则说明需要初始化
  if (list.length == 0) {
    list = [
      {
        point: "113.602263,27.637603",
        title: "老关桥右",
        type: 5,
        icon: "",
        videoUrl:
          "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000113_34020000001320000113.flv",
        desc: "",
        update_time: "2024-07-18 20:20:20",
        id: "cam123456",
      },
      {
        point: "113.592346,27.611998",
        title: "老关桥左",
        type: 5,
        icon: "",
        videoUrl:"",
        desc: "",
        update_time: "2024-07-18 20:20:20",
        id: "cam1234562",
      },
      {
        point: "1113.630003,27.602267",
        title: "老关火车站左过道",
        type: 5,
        icon: "",
        videoUrl:
          "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000165_34020000001320000165.flv",
        desc: "",
        update_time: "2024-07-18 20:20:20",
        id: "cam1234563",
      },
      {
        point: "113.614624,27.631459",
        title: "老关火车站后左",
        type: 5,
        icon: "",
        videoUrl: "",
        desc: "",
        update_time: "2024-07-18 20:20:20",
        id: "cam1234565",
      },
      {
        point: "113.577829,27.594327",
        title: "老关火车站后右",
        type: 5,
        icon: "",
        videoUrl:
          "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000167_34020000001320000167.flv",
        desc: "",
        update_time: "2024-07-18 20:20:20",
        id: "cam1234566",
      },
      {
        point: "113.91087,27.651954",
        title: "老关火车站前",
        type: 5,
        icon: "",
        videoUrl:
          "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000168_34020000001320000168.flv",
        desc: "",
        update_time: "2024-07-18 20:20:20",
        id: "cam1234567",
      },
      {
        point: "113.825638,27.601641",
        title: "老关火车站",
        type: 5,
        icon: "",
        videoUrl:
          "http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000011_34020000001320000011.flv",
        desc: "",
        update_time: "2024-07-18 20:20:20",
        id: "cam1234568",
      },
    ];
    localStorage.setItem("camera", JSON.stringify(list));
  }
}

function initUser() {
  // 获取本地数据
  const strList = localStorage.getItem("user");
  let list = JSON.parse(strList) || [];
  if (list.length == 0) {
    list = [
      {
        id: "23423423",
        name: "管理员",
        account: "admin",
        desc: "管理员用户，查看所有权限",
        update_time: "2024-07-18 20:20:20",
      },
      {
        id: "23234324423423",
        name: "张三",
        account: "zhangsan",
        desc: "zhangsan",
        update_time: "2024-07-19 10:20:20",
      },
    ];
    localStorage.setItem("user", JSON.stringify(list));
  }
}
</script>

<style scoped lang="less">
.app-content {
  height: 100%;
}
.top {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99;
  .setting {
    font-size: 14px;
    // width: 40px;
    // height: 25px;
  }
}
</style>
