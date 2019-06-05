<template>
    <div>
        <div class="banner">
            <img class="banner-img" @click="handleBannerClick" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe7b3;</span>
                    {{this.gallaryImgs.length}}
                </div>
                <div class="banner-title">
                    {{this.sightName}}
                </div>
            </div>
        </div>
        <common-gallary 
        :imgs="gallaryImgs" 
        v-show="showGallary"
        @close="handleGallaryClick"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'

export default {
    name: 'DetailBanner',
    components: {
        CommonGallary
    },
    props: {
        bannerImg: String,
        gallaryImgs: Array,
        sightName: String
    },
    data () {
        return {
            showGallary: false,   
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClick () {
            this.showGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner {
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
    }
    .banner-img {
        width: 100%
    }
    .banner-info {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        padding: 0 .2rem .2rem .2rem;
        line-height: .6rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .4))
    }
    .banner-title {
        flex: 1;
        font-size: .36rem;
    }
    .banner-number {
        line-height: .4rem;
        background: rgba(0, 0, 0, 0.5);
        width: 1.2rem;
        height: .4rem;
        border-radius: .4rem;
        text-align: center;
        font-size: .26rem;
    }
    .banner-icon {
        font-size: .26rem;
    }
</style>


