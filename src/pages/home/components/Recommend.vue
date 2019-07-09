<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看更多</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRcommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
}

.item-img {
  width: 1.7rem;
  padding: 0.1rem;
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  ellipsis();
}

.item-desc {
  line-height: 0.4rem;
  color: #bbb;
  ellipsis();
}

.item-button {
  line-height: 0.44rem;
  margin-top: 0.2rem;
  padding: 0 0.1rem;
  border-radius: 0.06rem;
  background: #3e86e5;
  color: #fff;
}
</style>
