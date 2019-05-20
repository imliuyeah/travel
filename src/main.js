// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 在终端中输入 npm install fastclick --save 后下载fastClick引入，解决使用click事件会延迟300毫秒才执行的问题
import fastClick from 'fastClick'
import './assets/styles/reset.css'
// 解决移动端1像素边框被显示为多像素的bug的css文件
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
