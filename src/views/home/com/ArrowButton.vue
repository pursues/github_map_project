<template>
  <div class="arrow-button-wrap">
    <div class="arrow-button-wrap__content" :class="contentClass">
      <img :src="imgSrc" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    type: {
      type: String,
      default: "down",
    },
  },
  setup(props, { emit }) {
    const imgSrc = computed(() => {
      const type = props.type;
      let src = "";
      if (type === "left") {
        src = getImages("arrow-left.png");
      } else if (type === "right") {
        src = getImages("arrow-right.png");
      } else if (type === "down") {
        src = getImages("arrow.png");
      } else {
        src = getImages("arrow.png");
      }
      return src;
    });
    function getImages(url: string) {
      return new URL(`../../../assets/${url}`, import.meta.url).href;
    }
    const contentClass = computed(() => {
      const type = props.type;
      let cl = [];
      if (type === "down") {
        cl = ["arrow-button-wrap__content-down"];
      } else if (type === "left") {
        cl = ["arrow-button-wrap__content-left"];
      } else if (type === "right") {
        cl = ["arrow-button-wrap__content-right"];
      } else {
        cl = ["arrow-button-wrap__content-down"];
      }
      return cl;
    });
    return {
      imgSrc,
      contentClass,
    };
  },
});
</script>
<style lang="less" scoped>
.arrow-button-wrap {
  display: inline-block;
  cursor: pointer;
  &__content {
    &-down {
      width: 100px;
      height: 12px;
      // background: rgb(134, 160, 238);

      background: linear-gradient(90deg, rgba(8, 17, 40, 0.3) 0%, rgba(7, 22, 59, 0.6) 100%);
      border-radius: 0px 0px 6px 6px;
      text-align: center;
      line-height: 12px;
      img {
        vertical-align: middle;
        display: inline-block;
        transform: translateY(-2px);
      }
    }
    &-left {
      width: 12px;
      height: 100px;
      // background: rgb(134, 160, 238);

      background: linear-gradient(90deg, rgba(8, 17, 40, 0.3) 0%, rgba(7, 22, 59, 0.6) 100%);
      border-radius: 6px 0px 0px 6px;
      line-height: 100px;
      text-align: center;
      img {
        vertical-align: middle;
        display: inline-block;
        transform: translateY(-2px);
      }
    }
    &-right {
      width: 12px;
      height: 100px;
      line-height: 100px;
      // background: rgb(134, 160, 238);

      background: linear-gradient(90deg, rgba(8, 17, 40, 0.3) 0%, rgba(7, 22, 59, 0.6) 100%);
      border-radius: 0px 6px 6px 0px;
      text-align: center;
      img {
        vertical-align: middle;
        display: inline-block;
        transform: translateY(-2px);
      }
    }
  }
}
</style>
