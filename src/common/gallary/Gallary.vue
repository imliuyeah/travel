<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) of imgs" :key="index">
                <img class="gallary-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                // 下面这两个参数的意思，就是我这个元素或者父级元素发生变化的时候就会自我刷新，可以通过这两个参数解决 swiper 宽度计算的问题
                // observeParents：将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
                // observer：启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
                observeParents: true,
                observer: true
            }
		}
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}

</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container{
        overflow: inherit
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 99;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
    }
    .wrapper {
        height: 0;
        width: 100%;
        padding-bottom: 100%;
    }
    .gallary-img {
        width: 100%;
    }
    .swiper-pagination {
        color: #fff;
        bottom: -1rem;
    }
</style>
