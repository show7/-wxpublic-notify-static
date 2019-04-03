<template lang="pug">
  div(style='padding-top:5px')
    .public-address-component(v-for='(item,index) in SearchArr' :key='index')
      img(class="public-address-head-img" :src="item.avatar")
      div(class="public-address-info")
        div(class="public-address-title" v-html='item.weChatName')
        // div(class="public-address-introduction") 我是最棒的我是最棒的我是最棒的我～
      div(v-if='item.isSubscribe !== undefined' :class="['public-address-subscribe',subscribe(item.isSubscribe)]" @click='item.isSubscribe ? unsubscribeFnc(item.weChatPublicId, index) : subscribeFnc(item.weChatPublicId, index)') {{item.isSubscribe ? '已订阅' : '订阅'}}

</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'
import { unsubscribe, subscribe } from '../../request'
@Component({
  name: 'PublicAddress',
  props: {
    inputSearchArr: Array,
    showMore: Boolean,
    justRecommend: Boolean
  }
})
export default class PublicAddress extends Vue {
  @Action CanClick: (params: any) => void
  @Action Subscribe: (params: any) => void
  @State canClick: any
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
  subscribe(isSubscribe: boolean) {
    return isSubscribe ? 'is-subscribe' : 'no-subscribe'
  }
  async subscribeFnc(weChatPublicId: number, index: number) {
    this.CanClick('')
    const res: Ajax.AxiosResponse | any = await subscribe.subscribe({
      isSearchResult: false,
      weChatPublicId: weChatPublicId
    })
    this.SearchArr[index].isSubscribe = true
  }
  async unsubscribeFnc(weChatPublicId: number, index: number) {
    this.CanClick('')
    const res: Ajax.AxiosResponse | any = await unsubscribe.unsubscribe({
      isSearchResult: false,
      weChatPublicId: weChatPublicId
    })
    this.SearchArr[index].isSubscribe = false
  }
}
</script>
<style lang="less">
@import './PublicAddress.less';
</style>


