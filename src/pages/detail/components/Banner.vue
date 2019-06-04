<template>
    <div>
        <div class="banner">
            <img class="banner-img" @click="handleBannerClick" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
            <div class="banner-info">
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe7b3;</span>
                    8
                </div>
                <div class="banner-title">
                    故宫(AAAAA景区)
                </div>
            </div>
        </div>
        <common-gallary 
        :imgs="imgs" 
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
    data () {
        return {
            showGallary: false,
            imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 
                   'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg']     
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


