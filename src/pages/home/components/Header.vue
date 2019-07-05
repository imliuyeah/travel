<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe65c;</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Header"
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.header 
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;
  .header-left 
    float: left;
    width: 0.64rem;
    .back-icon 
      text-align: center;
      font-size: 0.5rem;
  .header-input
    flex: 1;
    height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    border-radius: 0.1rem;
    line-height: 0.64rem;
    background: #fff;
    color: #ccc;
  .header-right
    float: right;
    width: 1.24rem;
    text-align: center;
</style>
