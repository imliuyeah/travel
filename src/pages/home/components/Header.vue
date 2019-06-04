<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe658;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe63c;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont">&#xe65c;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Header',
    computed: {
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>

    @import '~styles/varibles.styl'
    .header {
        display: flex;
        line-height: $headerHeight;
        background: $bgColor;
        color: #fff;
    }
    .header-left {
        float: left;
        width: .64rem;
    }
    .back-icon {
        text-align: center;
        font-size: .5rem;
    }
    .header-input {
        flex: 1;
        height: .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        padding-left: .2rem;
        border-radius: .1rem;
        line-height: .64rem;
        background: #fff;
        color: #ccc;
    }
    .header-right {
        float: right;
        min-width: 1.04rem;
        padding: 0 .1rem;
        text-align: center;
        color: #fff;
    }
</style>
