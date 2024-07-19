<template>
  <div class="home-right" :class="{ 'hidden-sider': !showRight }">
    <div class="right-btn" @click="showRight = !showRight">
      <ArrowButton type="right"></ArrowButton>
    </div>
    <div class="sider-content">
      <div class="sider-content-body">
        <div class="top-head">
          <span>艺术馆统计</span>
          <img src="../../../assets/chillerImg.png" alt="" />
        </div>
        <div class="plot-content">
          <div id="top_left_chart"></div>
        </div>
        <div class="top-head">
          <span>博物馆统计</span>
          <img src="../../../assets/chillerImg.png" alt="" />
        </div>
        <div class="plot-content bo-content">
          <div id="top_right_chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import ArrowButton from "./ArrowButton.vue";
import { Line, Bar } from "@antv/g2plot";
const showRight = ref(true);
const lineChart = ref(null);
const barPlot = ref(null);
onMounted(() => {
  lineDraw();
  drawPlot1();
});
async function lineDraw() {
  const newData = [
    { time: "2024-07-01", value: 1, type: "艺术馆一" },
    { time: "2024-07-01", value: 4, type: "艺术馆二" },
    { time: "2024-07-02", value: 23, type: "艺术馆一" },
    { time: "2024-07-02", value: 34, type: "艺术馆二" },
    { time: "2024-07-03", value: 12, type: "艺术馆一" },
    { time: "2024-07-03", value: 22, type: "艺术馆二" },
    { time: "2024-07-04", value: 44, type: "艺术馆一" },
    { time: "2024-07-04", value: 12, type: "艺术馆二" },
    { time: "2024-07-05", value: 14, type: "艺术馆一" },
    { time: "2024-07-05", value: 14, type: "艺术馆二" },
    { time: "2024-07-06", value: 16, type: "艺术馆一" },
    { time: "2024-07-06", value: 41, type: "艺术馆二" },
    { time: "2024-07-07", value: 19, type: "艺术馆一" },
    { time: "2024-07-07", value: 42, type: "艺术馆二" },
  ];
  lineChart.value = new Line(document.getElementById("top_left_chart"), {
    padding: "auto",
    data: newData,
    autoFit: true,
    xField: "time",
    yField: "value",
    smooth: true,
    xAxis: {
      nice: true,
      title: {
        text: "时间",
        position: "end",
      },
      label: {
        style: {
          fill: "#c3e5ff",
        },
      },
    },
    yAxis: {
      line: {
        style: {
          stroke: "#D5D5D5",
        },
      },
      title: {
        text: "数量",
        position: "end",
      },
      label: {
        style: {
          fill: "#c3e5ff",
        },
      },
    },
    point: {
      size: 3,
      style: {
        lineWidth: 1,
        fillOpacity: 1,
      },
      shape: (item) => {
        if (item.type === "艺术馆一") {
          return "circle";
        }
      },
    },
    tooltip: {
      showTitle: true,
      showMarkers: false,
      customContent: (
        title: string,
        items: any
      ) => `<div style="border-radius: 3px">
            <div class="g2-tooltip-title">${title}</div>
            <li class="g2-tooltip-list-item">
              <span class="g2-tooltip-marker" style="background-color:#3589ff;width:0px;height:0px;border-radius:50%;display:inline-block;margin-right:8px;"></span>
              艺术馆一：
              <span class="g2-tooltip-value"> ${items?.[0]?.value}</span>
            </li>
            <li class="g2-tooltip-list-item">
              <span class="g2-tooltip-marker" style="background-color:#20b558;width:0px;height:0px;border-radius:50%;display:inline-block;margin-right:8px;"></span>
              艺术馆二：
              <span class="g2-tooltip-value"> ${items?.[1]?.value}
              </span>
            </li>
          </div>`,
      domStyles: {
        "g2-tooltip": {
          fontSize: 12,
          fontWeight: 400,
          background: "rgba(0,0,0,0.6)",
          color: "#e0f7fa",
          "user-select": "none",
        }, // 设置 tooltip 的 css 样式
        "g2-tooltip-title": {
          width: "100%",
          height: "24px",
          lineHeight: "24px",
          textAlign: "left",
        }, // 设置 tooltip 的 css 样式
        "g2-tooltip-value": {
          fontWeight: "bold",
          marginLeft: -50,
        },
      },
    },
    seriesField: "type",
    legend: false,
  });
  lineChart.value.render();
}
function drawPlot1() {
  let barData = [
    { type: "博物馆一", sales: 23 },
    { type: "博物馆二", sales: 25 },
    { type: "博物馆三", sales: 45 },
    { type: "博物馆四", sales: 67 },
    { type: "博物馆五", sales: 11 },
    { type: "博物馆六", sales: 22 },
    { type: "博物馆七", sales: 45 },
    { type: "博物馆八", sales: 56 },
    { type: "博物馆九", sales: 34 },
    { type: "博物馆十", sales: 23 },
  ];
  barPlot.value = new Bar("top_right_chart", {
    data: barData,
    xField: "sales",
    yField: "type",
    padding: "auto",
    barBackground: {
      style: {
        fill: "rgba(0,0,0,0.1)",
      },
    },
    barStyle: {
      fill: "l(0) 0:#3876cd 0.5:#45b4e7 1:#54ffff",
    },
    xAxis: {
      label: {
        style: {
          fill: "#c3e5ff",
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fill: "#c3e5ff",
        },
      },
    },
    interactions: [{ type: "active-region", enable: false }],
    tooltip: {
      showTitle: true,
      showMarkers: false,
      customContent: (title: string, items: any) => `<div>
            <li class="g2-tooltip-list-item">
              <span class="g2-tooltip-marker" style="background-color:#1ca9e6;width:0px;height:0px;border-radius:50%;display:inline-block;margin-right:8px;"></span>
              场馆数：
              <span class="g2-tooltip-value"> ${items?.[0]?.value}</span>
            </li>
          </div>`,
      domStyles: {
        "g2-tooltip": {
          background: "rgba(0,0,0,0.6)",
          "box-shadow": "#00ACC1 0px 0px 10px",
          color: "#e0f7fa",
          "user-select": "none",
        }, // 设置 tooltip 的 css 样式
      },
    },
  });
  barPlot.value.render();
}
onBeforeUnmount(() => {
  lineChart.value?.destroy();
  barPlot.value?.destroy();
});
</script>

<style scoped lang="less">
.home-right {
  width: 400px;
  z-index: 100;
  position: absolute;
  right: 0;
  top: 90px;
  animation: toolBarShowRight 0s;
  .sider-content {
    border-radius: 5px;
    height: 100%;
    overflow: auto;
    color: #ffff;
    padding-bottom:50px;
    background: linear-gradient(
      90deg,
      rgba(8, 17, 40, 0.3) 0%,
      rgba(7, 22, 59, 0.6) 100%
    );
    .top-head {
      width: 100%;
      padding-left: 10px;
      padding-top: 20px;
      font-size: 20px;
      color: #fff;
      font-style: oblique;
      text-shadow: 0 0 10px #128df9, 0 0 20px #128df9, 0 0 30px #128df9,
        0 0 40px #128df9;
      img {
        margin-top: -10px;
        width: 100%;
      }
    }
    .plot-content {
      width: 350px;
      height: 300px;
      margin: 10px auto 0px auto;
    }
    .sider-content-body {
      height: 100%;
      overflow: hidden;
      padding-bottom: 20px;
      .cold-contain {
        width: 100%;
        height: 170px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        .center-contain {
          padding-right: 10px;
          margin-top: 20px;
          text-align: center;
          .blue {
            color: #128df9;
            font-size: 18px;
            font-weight: 600;
          }
          .green {
            color: #86f40a;
            font-size: 18px;
            font-weight: 600;
          }
        }
        .right-contain {
          margin-top: 40px;
          .btn_list {
            width: 100%;
            padding: 5px;
            background: url("../../../assets/btn.png") no-repeat;
            background-size: 100% 100%;
            font-size: 14px;
            color: #e6e9de;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-bottom: 10px;
          }
          button {
            width: 75px;
            font-size: 10px;
          }
          .btn_title,
          .btn_control {
            :deep(.ant-switch) {
              width: 60px;
            }
            font-size: 10px;
          }
          .btn_control {
            color: #86f40a;
          }
        }
      }
      .top_box {
        .scene_video_container {
          width: 100%;
          .scene_video_content {
            margin: 20px 0 0;
            height: 365px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .each_video_li {
              width: 50%;
              height: 33.33%;
            }

            .onlyOneScene {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .AI-contain {
        overflow: hidden;
        .event-list {
          color: #ffffff;
          border-radius: 7px;
          max-height: 250px;
          padding: 0 8px;
          overflow: hidden;
          padding-top: 5px;
          .event-list-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 30px;
            align-items: center;
            cursor: pointer;
            cursor: hand;
          }
          .event-list-card {
            min-width: 80px;
            text-align: center;
          }
          .event-list-area {
            min-width: 70px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-right: 5px;
          }
          .event-list-time {
            min-width: 120px;
          }
        }
        .empty {
          text-align: center;
          line-height: 178px;
        }
      }
    }
  }

  #top_left_chart,
  #top_right_chart {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    padding: 20px 0px 0px 0px;
    .chart_top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }
  // 收缩动画
  .right-btn {
    position: absolute;
    top: calc(50% - 70px);
    left: -10px;
    animation: rightSideBtnShow 0s;
    animation-fill-mode: forwards;
  }
  @keyframes rightSideBtnShow {
    from {
      transform: translateX(-12px) rotate(180deg);
    }
    to {
      transform: translateX(0px) rotate(0deg);
    }
  }
}
.hidden-sider {
  animation: toolBarHiddenRight 0s ease-in;
  animation-fill-mode: forwards;
  height: 100%;
  .right-btn {
    left: -10px;
    animation: rightSideBtnHidden 0s ease-in-out;
    animation-fill-mode: forwards;
  }
}

@keyframes rightSideBtnHidden {
  from {
    transform: translateX(0px) rotate(0deg);
  }
  to {
    transform: translateX(-12px) rotate(-180deg);
  }
}
@keyframes toolBarHiddenRight {
  from {
    width: 400px;
  }
  to {
    width: 0px;
  }
}
@keyframes toolBarShowRight {
  from {
    width: 0px;
  }
  to {
    width: 400px;
  }
}
</style>
