<template lang="pug">
    div(class="classify-warp")
      div(class="classify-title")
        div 公众号分类
        div(class="classify-strategy") 使用攻略 &gt;
      div(class="classify-nav-wrap")
        div(class="nav-active") 小新推荐
        div 小新推荐
        div 小新推荐
        div 小新推荐
        div 小新推荐
        div 小新推荐
        div 小新推荐
        div 小新推荐
      .public-address-wrap
        Public-address
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import PublicAddress from '@/components/publicAddress/PublicAddress.vue'
@Component({
  name: 'Default',
  components: {
    PublicAddress
  }}
)
export default class Default extends Vue {

}
</script>

<style lang="less">
@import '../../style/common.less';
.classify-warp {
  padding-top: 18px;
  .classify-title {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-content: center;
    color: @color-title;
    font-size: @font-title;
    font-weight: @font-wight6;
    .classify-strategy {
      color: @color-content;
      font-size: @font-content;
    }
  }
  .classify-nav-wrap {
    display: flex;
    height: 76px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    flex-wrap: wrap;
    div {
      width: 25%;
      color: @color-content;
      text-align: center;
      font-size: @font-nav;
    }
    .nav-active {
      position: relative;
      font-weight: @font-weight4;
      color: @color-nav-active;
      &::after {
        position: absolute;
        left: 50%;
        bottom: -5px;
        content: '';
        width: 13px;
        height: 2px;
        transform: translateX(-50%);
        background: @color-subscribe-btn;
      }
    }
  }
}
.public-address-wrap {
  border-top: 9px solid @color-gap;
  padding: 0 20px;
}
</style>

