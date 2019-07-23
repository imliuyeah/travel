<template>
  <div class="ticket">
    <h3 class="ticket-title border-bottom">暂无报价</h3>
    <p class="ticket-content">暂无门票预订，我们正在努力补充</p>
  </div>
</template>

<script>
export default {
  name:"DetailTicket"
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.ticket
  background-color: #fff
  .ticket-title
    font-size: .32rem
    padding: .2rem
  .ticket-content
    padding: .4rem .2rem
</style>


