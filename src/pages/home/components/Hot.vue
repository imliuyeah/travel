<template>
  <div class="hot">
    <div class="title">
      <img class="title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
      本周热门榜单
    </div>
    <ol class="list">
      <router-link :to="'/detail/' + item.id"
                   tag="li" 
                   class="list-item" 
                   v-for="item in list" 
                   :key="item.id">
        <img class="list-img" :src="item.imgUrl" :alt="item.title">
        <span class="list-title">{{item.title}}</span>
        <span class="list-price">{{item.price}}</span>
        <img v-if="item.tagUrl" class="list-tag" :src="item.tagUrl">
      </router-link>
    </ol>
  </div>
</template>

<script>
export default {
  name: "HomeHot",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.hot
  margin-top: .2rem
  .title
    margin-top: 0.2rem
    line-height: 0.8rem
    font-size: .32rem
    text-indent: 0.2rem
    background: #f5f5f5
    .title-img
      width: .3rem
      height: .3rem
  .list
    padding: 0 .24rem
    overflow-x: scroll
    white-space: nowrap
    .list-item
      display: inline-block
      position: relative
      padding: .1rem .1rem .2rem 0
      width: 2rem
      text-align: center
      .list-img
        width: 100%
      .list-title
        padding: .2rem 0 .1rem 0
        display: block
        font-size: .24rem
        ellipsis()
      .list-price
        color: #ff8300
        font-size: .28rem
      .list-tag
        position: absolute
        top: 0
        left: 0
        width: .8rem
</style>
