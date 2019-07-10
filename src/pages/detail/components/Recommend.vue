<template>
  <div class="recommend">
    <h3 class="recommend-title">
      <span class="iconfont recommend-title-icon">&#xe685;</span>
      去哪儿推荐
    </h3>
    <div class="recommend-item" v-for="items in list" :key="items.id">
      <div class="recommend-item-left" @click="clickShowDetail(items)">
        <h6 class="recommend-ticket-title">{{items.title}}</h6>
        <span class="recommend-ticket-time">{{items.time}}</span>
      </div>
      <div class="recommend-item-right">
        <strong class="recommend-ticket-price">{{items.price}}</strong>
        <span class="recommend-ticket-book">预定</span>
      </div>
      <div class="ticket-wrapper" v-show="showDetail">
        <div class="ticket-detail">
          <h2 class="ticket-title">
            <span class="iconfont ticket-detail-close" @click.stop="clickCloseDetail">&#xe649;</span>
            【当日票】故宫学生票凭身份证入园
          </h2>
          <div class="ticket-item" v-for="(item, index) in items.recommendDetail" :key="index">
            <h4 class="ticket-item-title">{{item.title}}</h4>
            <div class="ticket-item-content" v-for="items in item.content.keyword" :key="items.id">
              <span class="ticket-item-keyword">{{items.keytitle}}</span>
              <p class="ticket-item-desc" v-html="items.desc"></p>
            </div>
          </div>
        </div>
        <div class="ticket-booking">
          <span class="ticket-booking-pay"> 在线支付</span>
          <span class="ticket-booking-price">{{price}}</span>
          <span class="ticket-booking-btn">立即预定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecommend",
  props:{
    list: Array
  },
  data() {
    return {
      showDetail: false,
      price: ""
    };
  },
  methods: {
    clickShowDetail(items){
      this.showDetail = true
      this.price = items.price
    },
    clickCloseDetail(){
      this.showDetail = false
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/varibles.styl';
.recommend 
  background: #fff
  padding-left: .2rem
  margin-bottom: .2rem
  .recommend-title 
    line-height: .88rem
    font-size: .32rem
    .recommend-title-icon 
      padding-right: .1rem
      font-size: .32rem
      color: #ff6e6e
  .recommend-item 
    display: flex
    padding: .2rem .2rem .24rem 0
    border-top: 1px solid #eee
    .recommend-item-left 
      color: #616161
      line-height: .5rem
      flex: 2.7
      .recommend-ticket-title 
        font-size: .3rem
      .recommend-ticket-time 
        font-size: .24rem
    .recommend-item-right 
      display: flex
      justify-content: center
      flex-direction: column
      flex: 1
      color: #ff9800
      text-align: center
      .recommend-ticket-price 
        display: block
        margin-left: .04rem
        font-size: .4rem
        line-height: .4rem
      .recommend-ticket-book 
        display: block
        width: 90%
        height: .6rem
        border-radius: .1rem
        font-size: .26rem
        line-height: .6rem
        text-align: center
        color: #fff
        background-image: -webkit-gradient(linear, left top, right bottom, from(#ffab1e), to(#ff8c12))
        background-image: -webkit-linear-gradient(-60deg, #ffab1e 37%, #ff8c12 100%)
        background-image: -moz-linear-gradient(-60deg, #ffab1e 37%, #ff8c12 100%)
        background-image: -o-linear-gradient(-60deg, #ffab1e 37%, #ff8c12 100%)
        background-image: linear-gradient(130deg, #ffab1e 37%, #ff8c12 100%)
    .ticket-wrapper
      position: fixed
      z-index: 2
      right: 0
      bottom: 0
      left: 0
      width: 100%
      height: 100%  
      background-color: rgba(0, 0, 0, .4)
      .ticket-detail
        position: fixed
        top: $headerHeight
        bottom: 0
        z-index: 3
        padding-top: $headerHeight
        background-color: rgba(255, 255, 255, 1)
        overflow: scroll
        .ticket-title
          position: fixed
          top: $headerHeight
          padding: .4rem .2rem .4rem .2rem
          width: 100%
          border-bottom: 1px solid #ddd
          font-size: .32rem
          font-weight: bold
          background-color: #fff
          .ticket-detail-close
            display: block
            position: absolute
            top: .2rem
            right: .8rem
            font-size: .4rem
            color: #9e9e9e
        .ticket-item
          padding: 0 .4rem .2rem .4rem
          .ticket-item-title
            margin-top: .3rem
            color: #212121
            font-size: .34rem
            line-height: .48rem
          .ticket-item-content
            overflow: hidden
            margin-top: .2rem
            color: #616161
            font-size: .28rem
            line-height: .4rem
            word-break: break-all
            word-wrap: break-word
            .ticket-item-keyword
              float: left
              width: 2rem
              color: #212121
            .ticket-item-desc
              float: left
              padding-left: .1rem 
              line-height: .46rem 
      .ticket-booking
        display: flex
        position: fixed
        z-index: 4
        bottom: 0
        height: 1rem
        width: 100%
        border-top: 1px solid #ddd
        line-height: 1rem
        background-color: #fff
        .ticket-booking-pay
          padding-left: .2rem 
          color: #999
          font-size: .24rem
        .ticket-booking-price
          padding-right: 1.5rem
          color: #ff9800;
          font-size: .48rem
        .ticket-booking-btn
          flex: 1
          height: 1rem
          font-size: .4rem
          line-height: 1rem
          text-align: center
          color: #fff
          background-image: -webkit-gradient(linear, left top, right bottom, from(#ffab1e), to(#ff8c12))
          background-image: -webkit-linear-gradient(-60deg, #ffab1e 37%, #ff8c12 100%)
          background-image: -moz-linear-gradient(-60deg, #ffab1e 37%, #ff8c12 100%)
          background-image: -o-linear-gradient(-60deg, #ffab1e 37%, #ff8c12 100%)
          background-image: linear-gradient(130deg, #ffab1e 37%, #ff8c12 100%)
</style>


