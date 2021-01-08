<template>
  <footer class="footer_guide " >
   <span href="javascript:;" class="guide_item"  :class=" { on: '/msite' ===$route.path }"  @click="goTo('/msite')">
    <span class="item_icon">
    <i class="iconfont iconicon-fenxiang" ></i>
    </span>
    <span>外卖</span>
    </span>

    <span href="javascript:;" class="guide_item" :class=" { on: '/search' ===$route.path }"  @click="goTo('/search')">
    <span class="item_icon">
    <i class="iconfont icon-sousuo"></i>
    </span>
    <span>搜索</span>
    </span>

    <span href="javascript:;" class="guide_item" :class=" { on: '/order' ===$route.path }"  @click="goTo('/order')">
    <span class="item_icon">
    <i class="iconfont icon-dingdan"></i>
    </span>
    <span>订单</span>
    </span>

    <span href="javascript:;" class="guide_item" :class=" { on: '/profile' ===$route.path }"  @click="goTo('/profile')">
    <span class="item_icon">
    <i class="iconfont icon-geren"></i>
    </span>
    <span>我的</span>
    </span>

</footer>

</template>
<script>
export default {
    methods: {
        goTo(path){
            this.$router.replace(path)
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

.footer_guide
    top-border-1px(#cccccc)
    z-index 100
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    background-color #fff

    .guide_item
      display flex
      flex-direction column
      text-align center
      width 25%
      &.on
        color $green
      span
        margin-top 4px
        font-size 12px
        .iconfont
          font-size 22px
</style>
