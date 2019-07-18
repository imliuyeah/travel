<template>
  <div>
    <div class="wrapper" ref="tab">
      <div :class="['tab', {'fixed': isfixed}]" >
        <span class="tab-item">门票</span>
        <span class="tab-item">景区服务</span>
        <span class="tab-item">热销组合</span>
        <span class="tab-item">一日游</span>
      </div>
    </div>
    <!-- <div class="item border-bottom" v-for="(item, index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
    </div> -->
    <div class="item border-top" v-for="(items, index) in list" :key="index">
      <div class="item-type border-bottom">
        <span class="item-type-icon"></span>
        {{items.title}}
      </div>
      <div class="item-content" @click="clickShowDetail(item)" v-for="(item, index) in items.content" :key="index">
        <div class="item-content-header">
          <span class="item-content-title">{{item.title}}</span> 
          <div class="item-content-right">
            <strong class="item-content-price">{{item.price}}</strong>
            <span class="item-content-word">起</span> 
            <span class="iconfont item-content-icon">&#xe610;</span> 
          </div>
        </div>
        <div class="item-detail" v-show="showId === item.id">
          <div class="item-detail-left">
            <h6 class="item-ticket-title">{{item.detail}}</h6>
            <span class="item-ticket-time">{{item.time}}</span>
          </div>
          <div class="item-detail-right">
            <strong class="item-ticket-price">{{item.price}}</strong>
            <span class="item-ticket-book">预定</span>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  },
  data() {
    return {
      // showDetail: false,
      isfixed: false,
      showId: ''
    };
  },
  methods: {
    clickShowDetail(item){
      if(this.showId == item.id){
        this.showId = ''
        // this.showDetail = !this.showDetail
      }else{
        this.showId = item.id
      }
    },
    handleScroll(){
      const offsetTop = this.$refs.tab.offsetTop
      const scrollTop = document.documentElement.scrollTop 
      scrollTop > offsetTop ? this.isfixed = true : this.isfixed = false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.wrapper
  height: .96rem
  .fixed
    position: fixed
    top: $headerHeight
  .tab
    z-index: 2
    width: 100%
    white-space: nowrap
    overflow-x: scroll
    border-bottom: 1px solid #ddd
    background: #fff
    .tab-item
      display: inline-block
      width: 2.4rem
      line-height: .96rem
      text-align: center
      font-size: .32rem
.item
  background: #fff
  .item-type
    line-height: 0.8rem
    font-size: 0.32rem
    margin: 0 0.2rem
    .item-type-icon
      position: relative
      left: 0.06rem
      top: 0.06rem
      display: inline-block
      width: 0.36rem
      height: 0.36rem
      background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: 0.1rem
      background-size: 0.4rem 3rem
  .item-content
    margin-bottom: .2rem
    .item-content-header
      display: flex
      align-items: center
      z-index: 2
      padding: .24rem .2rem
      border-bottom: 1px solid #ddd
      background: #fff
    .item-content-title
      flex: 3.8
      font-size: .32rem
    .item-content-right
      position: relative
      flex: 1
      .item-content-price
        margin-left: .04rem
        font-size: .4rem
        line-height: .4rem
        color: #ff9800
      .item-content-word
        color: #9e9e9e
        font-size: .24rem
      .item-content-icon
        position: absolute
        top: .1rem
        right: -.05rem
        color: #bbb
        font-size: .24rem
    .item-detail 
      display: flex
      padding: .2rem .24rem
      border-top: 1px solid #eee
      background: #f5f5f5
      border-bottom: 1px solid #ddd
      .item-detail-left 
        color: #616161
        line-height: .5rem
        flex: 2.7
        .item-ticket-title 
          font-size: .3rem
        .item-ticket-time 
          font-size: .24rem
      .item-detail-right 
        display: flex
        justify-content: center
        flex-direction: column
        flex: 1
        color: #ff9800
        text-align: center
        .item-ticket-price 
          display: block
          margin-left: .04rem
          font-size: .4rem
          line-height: .4rem
        .item-ticket-book 
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
</style>


