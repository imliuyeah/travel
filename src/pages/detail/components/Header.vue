<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs">
      <div class="iconfont back-icon">&#xe658;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-back">&#xe658;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: false,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs
  position: absolute
  left: 0.2rem
  top: 0.2rem
  width: 0.8rem
  height: 0.8rem
  border-radius: 0.4rem
  background: rgba(0, 0, 0, 0.4)
  text-align: center
  .back-icon
    line-height: 0.8rem
    font-size: 0.6rem
    color: #fff
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  height: $headerHeight
  width: 100%
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  text-align: center
  .header-back
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    font-size: 0.5rem
    color: #fff
</style>

