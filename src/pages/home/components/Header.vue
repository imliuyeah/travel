<template>
  <div class="header">
    <div class="header-left">左边</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
	.header {
    display: flex;
		line-height: .86rem;
		background: #00bcd4;
    color: #fff;
	}
  .header-left {
    float: left;
    width: .64rem;
  }
  .header-input{
    flex: 1;
    height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    border-radius: .1rem;
    line-height: .64rem;
    background: #fff;
    color: #ccc;

  }
  .header-right {
    float: right;
    width: 1.24rem;
    text-align: center;
  }
</style>