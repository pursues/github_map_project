<template>
  <div class="home-left" :class="{ 'hidden-sider': !showLeft }">
    <div class="left-btn" @click="showLeft = !showLeft">
      <ArrowButton type="left"></ArrowButton>
    </div>
    <div class="sider-content">
      <div class="sider-content-body">
        <div class="top-head">
          <span>文物点统计</span>
          <img src="../../../assets/chillerImg.png" alt="" />
        </div>
        <div class="plot-content unconfirmed-list">
          <div class="unconfirmed-item-1">
            <div class="circle-1">
              <span class="circle-2">
                <span class="circle-3">
                  <span class="count">30个</span>
                </span>
                <div class="line"></div>
              </span>
              <span class="name">文物点1</span>
            </div>
          </div>

          <div class="unconfirmed-item-2">
            <div class="circle-1">
              <span class="circle-2">
                <span class="circle-3">
                  <span class="count">100个</span>
                </span>
                <div class="line"></div>
              </span>
              <span class="name">文物点2</span>
            </div>
          </div>

          <div class="unconfirmed-item-3">
            <div class="circle-1">
              <span class="circle-2">
                <span class="circle-3">
                  <span class="count">65个</span>
                </span>
                <div class="line"></div>
              </span>
              <span class="name">文物点3</span>
            </div>
          </div>

          <div class="unconfirmed-item-4">
            <div class="circle-1">
              <span class="circle-2">
                <span class="circle-3">
                  <span class="count">110个</span>
                </span>
                <div class="line"></div>
              </span>
              <span class="name">文物点4</span>
            </div>
          </div>
        </div>
        <div class="top-head">
          <span>文物馆统计</span>
          <img src="../../../assets/chillerImg.png" alt="" />
        </div>
        <div class=" alarm-content" id="piechart"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import ArrowButton from "./ArrowButton.vue";
import { Pie, G2 } from "@antv/g2plot";
const G = G2.getEngine("canvas");
const showLeft = ref(true);
const piePlot = ref(null);
const pieData = ref([
  { type: "文物馆1", value: 27 },
  { type: "文物馆2", value: 25 },
  { type: "文物馆3", value: 18 },
  { type: "文物馆4", value: 15 },
  { type: "文物馆5", value: 10 },
  { type: "文物馆6", value: 5 },
]);
onMounted(() => {
  alarmPie();
});
function alarmPie() {
  piePlot.value = new Pie("piechart", {
    padding: [40, 40, 0, 0],
    data: pieData.value,
    autoFit: true,
    angleField: "value",
    colorField: "type",
    legend:false,
    label: {
      type: "spider",
      labelHeight: 28,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 20,
            height: 30,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: "#c3e5ff",
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 25,
            text: `${data.value}`,
            fill: "#c3e5ff",
            fontWeight: 500,
          },
        });
        return group;
      },
    },
    tooltip: {
      showTitle: true,
      showMarkers: false,
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
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  });
  // @ts-ignore
  piePlot.value.render();
}
onBeforeUnmount(() => {
  piePlot.value?.destroy();
});
</script>
<style scoped lang="less">
@import "../../../assets/style.css";
.home-left {
  width: 400px;
  z-index: 100;
  height: 100%;
  position: absolute;
  animation: toolBarShowLeft 0s;
  left: 0px;
  top:0;
  .sider-content {
    width: 100%;
    border-radius: 5px;
    color: #fff;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    background: linear-gradient(
      -90deg,
      rgba(8, 17, 40, 0.3) 0%,
      rgba(7, 22, 59, 0.6) 100%
    );
    &-body {
      padding: 0 16px 10px 0px;
    }
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
      }
    }
    .plot-content {
      width: 100%;
      margin: 0px auto 10px auto;
    }
    .unconfirmed-list {
      position: relative;
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 20px;
      .unconfirmed-item-1,
      .unconfirmed-item-2,
      .unconfirmed-item-3,
      .unconfirmed-item-4 {
        text-align: center;
        .circle-1 {
          position: relative;
          width: 78px;
          height: 78px;
          padding: 16px;
          background: rgba(64, 164, 243, 0.23);
          border-radius: 50%;
          .common-circle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: inline-block;
            border-radius: 50%;
          }

          .circle-2 {
            .common-circle;
            width: 50px;
            height: 50px;
            padding: 2px;
            box-shadow: 0 0 2px 2px #347ebb inset;
          }

          .circle-3 {
            .common-circle;
            width: 50px;
            height: 50px;
            background: rgba(173, 22, 25, 0);
            border: 3px solid #04b2b6;
            .count {
              font-size: 15px;
              font-weight: 400;
              color: #ffffff;
              line-height: 40px;
            }
          }
        }

        .name {
          position: absolute;
          top: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          font-size: 12px;
          font-weight: 400;
          color: #c3e5ff;
          text-align: center;
        }
      }

      .unconfirmed-item-2 {
        top: 0;
        left: 100px;
        .circle-1 {
          width: 78px;
          height: 78px;
          .circle-3 {
            border: 3px solid #0a98c6;
          }
        }

        .name {
          top: 101px;
        }
      }

      .unconfirmed-item-3 {
        top: 0;
        left: 189px;
        .circle-1 {
          .circle-3 {
            border: 3px solid #6e8bd5;
          }
        }
      }

      .unconfirmed-item-4 {
        top: 0;
        left: 280px;
        .circle-1 {
          .circle-3 {
            border: 3px solid #b28507;
          }
        }
      }
    }
    .alarm-content {
      height: 250px;
      margin-top:80px;
    }
    .energy-content {
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .destroy-content {
      position: relative;

      .bubble-circle {
        position: absolute;
        top: 10px;
        left: 15px;
        width: 40px;
        height: 40px;
        text-align: center;
        opacity: 0.9;
        box-shadow: 0 0 20px 4px #347ebb inset;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        margin-left: 60px;
      }
    }
    .destroy-content p:nth-of-type(2) {
      font-size: 16px;
      font-weight: bold;
      span {
        font-size: 14px;
        font-weight: normal;
        color: #ccc;
      }
    }
    .security-content {
      p {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        span {
          font-weight: 14px;
          font-weight: normal;
          color: #ccc;
        }
      }
      p:first-of-type {
        font-size: 14px;
        color: #ccc;
        font-weight: normal;
      }
    }
    .last-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      column-gap: 50px;
    }
  }
}
// 收缩动画
.left-btn {
  position: absolute;
  top: calc(50% - 70px);
  right: -10px;
  animation: leftSideBtnShow 0s;
  animation-fill-mode: forwards;
}
@keyframes leftSideBtnShow {
  from {
    transform: translateX(-12px) rotate(180deg);
  }
  to {
    transform: translateX(0px) rotate(0deg);
  }
}
.hidden-sider {
  animation: toolBarHiddenLeft 0s ease-in;
  animation-fill-mode: forwards;
  height: 100%;

  .left-btn {
    right: -30px;
    animation: leftSideBtnHidden 0s ease-in-out;
    animation-fill-mode: forwards;
  }
  @keyframes leftSideBtnHidden {
    from {
      transform: translateX(0px) rotate(0deg);
    }
    to {
      transform: translateX(-12px) rotate(180deg);
    }
  }
  @keyframes toolBarHiddenLeft {
    from {
      width: 400px;
    }
    to {
      width: 0px;
    }
  }
}
@keyframes toolBarShowLeft {
  from {
    width: 0px;
  }
  to {
    width: 400px;
  }
}
</style>
