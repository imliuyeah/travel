<template>
    <div class="header">
        城市选择
        <!-- 设置点击返回主页的router-link -->
        <router-link to="/">
            <div class="iconfont header-back">&#xe658;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader', 
}
</script>

<style lang="stylus" scoped>

    @import '~styles/varibles.styl'
    
    .header {
        position: relative;
        overflow: hidden;
        height: $headerHeight;
        font-size: .32rem;
        text-align: center;
        line-height: $headerHeight;
        background: $bgColor;
        color: #fff;
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
</style>
