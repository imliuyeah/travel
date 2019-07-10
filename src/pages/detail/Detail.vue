<template>
    <div>
        <detail-banner
         :bannerImg = "bannerImg"
         :gallaryImgs = "gallaryImgs"
         :sightName = "sightName"
        ></detail-banner>
        <detail-header></detail-header>
        <detail-info></detail-info>
        <detail-List :list="list"></detail-List>
        <div class="container"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/Info'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailInfo,
        DetailList
    },
    data () {
        return {
            bannerImg: '',
            list: [],
            gallaryImgs: [],
            sightName: ''
        }
    },
    methods: {
        getHomeInfo () {
            // 这里等于 '/api/detail.json?id=' + this.$route.params
            axios.get('/api/detail.json', {
               params: {
                   id: this.$route.params.id
               } 
            }).then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if( res.ret && res.data) {
                const data = res.data
                this.bannerImg = data.bannerImg
                this.list = data.categoryList
                this.gallaryImgs = data.gallaryImgs
                this.sightName = data.sightName
            }
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .container {
        height 50rem;
    }
</style>
