<template>
  <div class="wrapper">
    <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <detail-info :list="info"></detail-info>
    <detail-announce v-if="special"></detail-announce>
    <detail-recommend v-if="recommendList" :recommendList="recommendList" :recommendDetail="recommendDetail"></detail-recommend>
    <detail-List v-if="list" :list="list" :tabList="tabList"></detail-List>
    <detail-ticket v-else></detail-ticket>
    <div class="container"></div>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailInfo from "./components/Info";
import DetailAnnounce from "./components/Announce";
import DetailRecommend from "./components/Recommend";
import DetailList from "./components/List";
import DetailTicket from "./components/Noticket";
import DetailFooter from "./components/Footer";
import axios from "axios";

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailInfo,
    DetailAnnounce,
    DetailRecommend,
    DetailList,
    DetailTicket,
    DetailFooter
  },
  data() {
    return {
      bannerImg: "",
      info: {},
      recommendList: [],
      recommendDetail: [],
      list: [],
      tabList: [],
      gallaryImgs: [],
      sightName: "",
      special: false
    };
  },
  methods: {
    getHomeInfo() {
      // 这里等于 '/api/detail.json?id=' + this.$route.params
      axios
        .get("/static/mock/detail" + this.$route.params.id + ".json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.bannerImg = data.bannerImg;
        this.info = data.info
        this.recommendList = data.recommendList
        this.recommendDetail = data.recommendDetail
        this.list = data.categoryList;
        this.tabList = data.tabList;
        this.gallaryImgs = data.gallaryImgs;
        this.sightName = data.sightName;
      }
    }
  },
  mounted() {
    this.getHomeInfo()
    const id = this.$route.params.id
    if( id == "0001" ){
      this.special = true
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.wrapper
  background: $detailbcg
.container
  height: 10rem
</style>
