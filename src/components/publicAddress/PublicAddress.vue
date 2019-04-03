<template lang="pug">
  div(style='padding-top:5px')
    .public-address-component(v-for='(item,index) in SearchArr' :key='index')
      img(class="public-address-head-img" :src="item.avatar")
      div(class="public-address-info")
        div(class="public-address-title") {{item.weChatName}}
        // div(class="public-address-introduction") 我是最棒的我是最棒的我是最棒的我～
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
    inputSearchArr: Array,
    showMore: Boolean
  }
})
export default class PublicAddress extends Vue {
  showMore: boolean = this.showMore
  inputSearchArr: any = this.inputSearchArr
  get SearchArr(): any {
    let _inputSearchArr = []
    if (this.showMore) {
      _inputSearchArr = this.inputSearchArr.splice(0, 3)
    } else {
      _inputSearchArr = this.inputSearchArr
    }
    return _inputSearchArr
  }
}
</script>
<style lang="less">
@import './PublicAddress.less';
</style>


