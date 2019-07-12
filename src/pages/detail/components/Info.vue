<template>
  <div class="info">
    <div class="info-box">
      <router-link :to="'/comment/' + $route.params.id" 
                    tag="div"
                    class="info-item">
        <div>
          <span class="info-item-score">5.0分</span>
          <span class="info-item-desc">超赞</span>
        </div>
        <div>
          <span class="info-item-commentnum">423869条评论</span>
          <span class="info-item-commentnum">93条攻略</span>
        </div>
        <span class="iconfont info-arrow">&#xe7eb;</span>
      </router-link>
      <router-link :to="'/introduction/' + $route.params.id" 
                    tag="div" 
                    class="info-desc">
        <div>
          <span class="info-desc-title">景点简介</span>
        </div>
        <div>
          <span class="info-desc-text">开放时间、贴士</span>   
        </div>
        <span class="iconfont info-arrow">&#xe7eb;</span>
      </router-link>
    </div>
    <div class="info-address">
      <span class="iconfont info-location">&#xe61a;</span>
      <span>北京市东城区景山前街4号</span>
      <span class="iconfont info-arrow">&#xe7eb;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.info
  position: relative
  top: -.1rem
  padding: .1rem .2rem 0 .2rem
  margin-bottom: .1rem
  background: #fff
  border-radius: .1rem .1rem 0 0
  .info-box 
    display: flex
    padding-top: .1rem
    padding-bottom: .2rem
    border-bottom: 1px solid #eee
    .info-item
      position: relative
      flex: 1
      width: 100%
      border-right: 1px solid #eee
      .info-item-score
        font-size: .44rem
        color: #ff8300
        line-height: .44rem
      .info-item-desc
        font-size: .28rem
        color: #ff8300
        line-height: .44rem
        margin-left: .1rem
      .info-item-commentnum
        font-size: .24rem
        line-height: .4rem
        color: #9e9e9e
        margin-right: .1rem
      .info-arrow
        rightArrow()
    .info-desc
      position: relative
      flex: 1
      padding-left: .3rem
      .info-desc-title 
        font-size: .28rem
        line-height: .48rem
      .info-desc-text
        font-size: .24rem
        color: #9e9e9e
      .info-arrow
        rightArrow()
  .info-address
    position relative
    padding: .2rem 0
    .info-location
      padding-right: .2rem
    .info-arrow
      rightArrow()
</style>


