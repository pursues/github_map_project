<template>
  <div id="bmap"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { loadBMapScript } from "../../assets/loadMap";
import markLogo from "../../assets/logo.png"
onMounted(() => {
  loadBMapScript("HDVSUEiV0lEVvjMEbPqEMhJ5PdBcbwIb")
    .then((BMapGL) => {
      const markerArr: any = [
        {point:"113.470276,23.179303",isDriver:false,title:"测试地址1"},
        {point:"113.465767,23.180681",isDriver:false,title:"测试地址2"},
        {point:"113.467689,23.181064",isDriver:true,title:"测试地址3"},
        {point:"113.464707,23.179054",isDriver:false,title:"测试地址4"},
        {point:"113.46397,23.176147",isDriver:false,title:"测试地址5"},
      ];
      // 创建Map实例
      const map = new BMapGL.Map("bmap");
      // 创建点坐标
      const point = new BMapGL.Point(113.464644, 23.178049);
      // 创建Point点标记
      const pointMarker = new BMapGL.Marker(
        new BMapGL.Point(113.464644, 23.178049)
      );
      map.setHeading(64.5); //设置地图旋转角度
      map.setTilt(73); //设置地图的倾斜角度
      map.enableScrollWheelZoom(true);
      // 地图设置中心点和放大级别
      map.centerAndZoom(point, 20);
      map_init(markerArr, BMapGL, map);
      // 地图添加点标记
      map.addOverlay(pointMarker);
    })
    .catch(() => {
      console.log("地图加载失败");
    });
});
function map_init(markerArr, mapGL, map) {
  var commonIcon = new mapGL.Icon(
    markLogo,
    new mapGL.Size(23, 25),
    {
      offset: new mapGL.Size(10, 25), // 指定定位位置
      imageOffset: new mapGL.Size(0, 0 - 0 * 25), // 设置图片偏移使用左侧的图片
    }
  );
  var driverIcon = new mapGL.Icon(
    markLogo,
    new mapGL.Size(23, 25),
    {
      offset: new mapGL.Size(10, 25), // 指定定位位置
      imageOffset: new mapGL.Size(0, 0 - 10 * 25), // 设置图片偏移使用左侧的图片
    }
  );
  var point = new Array(); //存放标注点经纬信息的数组
  var marker = new Array(); //存放标注点对象的数组
  var info = new Array(); //存放提示信息窗口对象的数组
  for (var i = 0; i < markerArr.length; i++) {
    var p0 = markerArr[i].point.split(",")[0]; //
    var p1 = markerArr[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来
    point[i] = new mapGL.Point(p0, p1); //循环生成新的地图点
    marker[i] = new mapGL.Marker(point[i], {
      icon: markerArr[i].isDriver ? driverIcon : commonIcon,
    }); //按照地图点坐标生成标记
    // marker[i] = new mapGL.Marker(point[i]); //按照地图点坐标生成标记
    map.addOverlay(marker[i]);
    // marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    var label = new mapGL.Label(`${markerArr[i].title}`, {
      offset: new mapGL.Size(20, -10),
    });
    marker[i].setLabel(label);
  }
}
</script>

<style scoped>
#bmap {
  width: 100vw;
  height: 100vh;
}
</style>
