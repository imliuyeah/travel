<template>
    <div class="header">
        <router-link tag="div" to="/" class="header-abs">
            <div class="iconfont back-icon">&#xe658;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="iconfont header-back">&#xe658;</div>
            </router-link>
        </div>
        <div class="a"></div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: false,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop;
            if( top > 60){
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = true
            }else {
                this.showAbs = false
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    }    
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .a{
        height: 50rem;
    }
    .header-fixed {
        position: fixed;
        top: 0;
        height: .8rem;
        width: 100%;
        line-height: $headerHeight;
        background: $bgColor;
        color: #fff;
        text-align: center;
    }
    .header-back {
        position: absolute;
        top: 0;
        left: 0;
        width: .64rem;
        text-align: center;
        font-size: .5rem;
        color: #fff;
    }
    .header-abs {
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .8rem;
        height: .8rem;
        border-radius: .4rem;
        background: rgba(0, 0, 0, .4);
        text-align: center;
    }
    .back-icon {
        line-height: .8rem;
        font-size: .6rem;
        color: #fff;
    }
</style>

