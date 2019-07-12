<template>
  <div class="announce" @click="handleAnnounceClick">
    <div class="announce-text">
      <span class="iconfont">&#xe600;</span>
      1.如遇天安门广场戒严，请从故宫两侧（东华门或西华门），沿故宫城墙步行至午门验票！2.故宫博物院2019年延续周一闭馆（国家法定节假日除外）的措施，具体时间请以景区官方通知为准，给您带来不便敬请谅解。
      <span class="iconfont info-arrow">&#xe7eb;</span>
    </div>
    <div class="announce-detail" v-show="showAnnounce">
      <h1 class="announce-detail-title">
        <span class="iconfont">&#xe600;</span>
        景区公告
      </h1>
      <div class="announce-detail-content">
        <p>
          1.如遇天安门广场戒严，请从故宫两侧（东华门或西华门），沿故宫城墙步行至午门验票！
        </p>
        <p>
          2.故宫博物院2019年延续周一闭馆（国家法定节假日除外）的措施，具体时间请以景区官方通知为准，给您带来不便敬请谅解。
        </p>
      </div>
      <span class="iconfont announce-detail-close" @click.stop="closeAnnounce">&#xe649;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailAnnounce",
  data(){
    return {
      showAnnounce: false
    }
  },
  methods: {
    handleAnnounceClick(){
      this.showAnnounce = true
    },
    closeAnnounce(){
      this.showAnnounce = false
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.announce
  margin-bottom: .2rem
  line-height: .88rem
  .announce-text
    position: relative
    padding: 0 .25rem
    background-color: #fff5e5
    color: #ff8300
    ellipsis()
    .info-arrow
      rightArrow()
      top: 0
  .announce-detail
    position: fixed
    top: 0
    bottom: 0
    left: 0
    z-index: 2
    background: #fff
    opacity: .9
    .announce-detail-title
      padding: 2rem 0 .4rem 0
      font-size: .4rem
      color: #f67353
      text-align: center
    .announce-detail-content
      line-height: .46rem
      color: #333
      padding: 0 .35rem
    .announce-detail-close
      display: block
      position: fixed
      width: 100%
      font-size: .4rem
      bottom: .8rem
      text-align: center
</style>


