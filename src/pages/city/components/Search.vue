<template>
    <div>   
        <div class="search">
            <input v-model="keyword" class="search-input" type="texy" placeholder="输入城市名或拼音">
        </div>
        <!-- v-show 控制这个div是否显示，keyword 默认为空，因此 v-show 为 false，div隐藏。
        当我们在 input 框中输入内容时，由于双向绑定，keyword 的值不为空了，则 v-show 为 true，div显示 -->
        <div class="search-content" v-show="keyword" ref="search">
            <ul>
                <!-- 将 watch 中循环得到的匹配的值，用 v-for 循环显示到页面上 -->
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
                    {{item.name}}
                </li>
                <!-- 当没有找到匹配数据时，会显示这个 li 标签的内容 -->
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
        // 这里接收到的，父组件传入的 cities 是 city.json 中 data.cities 下的数据
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null,
        }
    },
    methods: {
        handleCityClick (city) {
            // this.$store.commit('changeCity' , city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        // 当 list 有内容时，说明找到了匹配的 keyword ，则返回 false ，当 list 为空时，说明没有找到匹配的 keyword ，则返回 true
        hasNoData () {
            return !this.list.length
        }
        
    },
    watch: {
        keyword () {
            // 函数节流
            if (this.timer) {
                clearTimeout(this.timer)
            }
            // 如果没有找到keyword，则让list为一个空数组
            if (!this.keyword) {
                this.list = []
                return
            }
            // 函数节流
            this.timer = setTimeout(() => {
                const result = []
                //for in 循环后，i 中取到的是 cities 中的对象的键名，即 A、B、C、D……
                for (let i in this.cities) {
                    // cities[i] 取到的是，i 这个键名，后面对应的值的内容，比如 i = A 时，取到的就是 A 后面对应的数组（就是拼音a开头的城市）
                    // forEach方法，会在每个 cities[i] 取到的对应数组上，调用括号里的函数，value 就是数组的内容
                    this.cities[i].forEach((value) =>{
                        // indexOf 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
                        // 这里判断我们在keyword 中输入的值，是否在 value.spell 与 value.name 中有相匹配的，如果有则将结果放到 result 数组里。
                        if(value.spell.indexOf(this.keyword) > -1 ||
                        value.name.indexOf(this.keyword) > -1 ) {
                            result.push(value)
                        }
                    })
                }
                // 将 result 中的结果赋值给 list ，这样就可以在 div.search-content 中循环 list 将结果展示出来。
                this.list = result
            },100)
        }
    },
    //利用 better-scroll 实现查询到的列表，超出页面的部分滚动效果
    mounted () {
        this.scroll = new BScroll(this.$refs.search)
    }
}

</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'

    .search {
        height: .72rem;
        padding: 0 .1rem;
        background: $bgColor;
    }
    .search-input {
        box-sizing: border-box;
        width: 100%;
        height: .62rem;
        padding: 0 .1rem;
        line-height: .62rem;
        text-align: center;
        border-radius: .06rem;
        color: #666;
    }
    .search-content {
        z-index: 1;
        position: absolute;
        overflow: hidden;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #eee;
    }
    .search-item {
        line-height: .62rem;
        padding-left: .2rem;
        background: #fff;
        color: #666;
    }
</style>


