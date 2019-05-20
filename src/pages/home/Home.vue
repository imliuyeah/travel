<template>
<!--    由于template只能向外暴露一个根标签，所以要在最外层包裹一个标签
	<div>
    <div>home</div>
    在Vue中，一般用router-link实现跳转，点击链接跳转到当前目录下的list页面，和a标签效果相似
    <router-link to="/list" class="home">列表页</router-link>
  </div> -->
  <div>
    hello world
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

</style>
