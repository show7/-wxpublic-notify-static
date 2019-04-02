<template lang="pug">
  .public-address-wrap 
    img(class="public-address-head-img" src="")
    div(class="public-address-info")
      div(class="public-address-title") 吴晓波频道
      div(class="public-address-introduction") 我是最棒的我是最棒的我是最棒的我～
    div(:class="['public-address-subscribe',subscribe.class]") {{subscribe.text}}
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component({
  name: "PublicAddress",
  computed: {
    subscribe(): Object {
      return false ? { class: "is-subscribe", text: '已订阅' } : { class: "no-subscribe", text: '订阅' }
    }
  }
})
export default class PublicAddress extends Vue {



}
</script>
<style lang="less">
@import './PublicAddress.less';
</style>


