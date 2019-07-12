<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HeaderSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        autoplay: 3000,
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/29b76b0d77afa23594454d7353d46c67.jpg_890x330_be767ae4.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/4b0f12966ae89ab9b68ffbe43f29ff98.jpg_890x330_51e5f505.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/f2/928a8ff6148e5802.png_890x330_4c2f220f.png"
        },
        {
          id: "0004",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/0c69a70e2337950c6ffad4d2d03c0f49.jpg_890x330_4dc74056.jpg"
        },
        {
          id: "0005",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1509/a4/4ccc8250d5483e.jpg_890x330_860a0467.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet
  background: #fff
  opacity: 0.6
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
  opacity: 1
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 37.08%
  background: #eee
  .swiper-img
    width: 100%
</style>