<template lang="pug">
  div
    .public-address-component(v-for='(item,index) in inputSearchArr' :key='index')
      img(class="public-address-head-img" src="")
      div(class="public-address-info")
        div(class="public-address-title") 吴晓波频道
        div(class="public-address-introduction") 我是最棒的我是最棒的我是最棒的我～
      div(:class="['public-address-subscribe',subscribe.class]") {{subscribe.text}}
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'
@Component({
  name: 'PublicAddress',
  computed: {
    subscribe(): Object {
      return false
        ? { class: 'is-subscribe', text: '已订阅' }
        : { class: 'no-subscribe', text: '订阅' }
    }
  },
  props: {
    inputSearchArr: Array
  }
})
export default class PublicAddress extends Vue {
  inputSearchArr: any = this.inputSearchArr
}
</script>
<style lang="less">
@import './PublicAddress.less';
</style>


