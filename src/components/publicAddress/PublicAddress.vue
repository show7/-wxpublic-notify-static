<template lang="pug">
  div(style='padding-top:5px')
    .public-address-component(v-for='(item,index) in SearchArr' :key='item.avatar' v-show='showMore')
      img(class="public-address-head-img" :src="item.avatar")
      div(class="public-address-info")
        div(class="public-address-title" v-html='item.weChatName')
        // div(class="public-address-introduction") 我是最棒的我是最棒的我是最棒的我～
      div(v-if='item.isSubscribe !== undefined' :class="['public-address-subscribe',subscribe(item.isSubscribe)]" @click='item.isSubscribe ? unsubscribeFnc(item.weChatPublicId, index) : subscribeFnc(item.weChatPublicId, index)') {{item.isSubscribe ? '已订阅' : '订阅'}}
    .public-address-component(v-for='(item,index) in inputSearchArr' :key='index' v-show='!showMore')
      img(class="public-address-head-img" :src="item.avatar")
      div(class="public-address-info")
        div(class="public-address-title" v-html='item.weChatName')
        // div(class="public-address-introduction") 我是最棒的我是最棒的我是最棒的我～
      div(v-if='item.isSubscribe !== undefined' :class="['public-address-subscribe',subscribe(item.isSubscribe)]" @click='item.isSubscribe ? unsubscribeFnc(item.weChatPublicId, index) : subscribeFnc(item.weChatPublicId, index)') {{item.isSubscribe ? '已订阅' : '订阅'}}
    div(v-show='showMore' class='showMore' @click='loadMore') 更多公众号

</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'
import { unsubscribe, subscribe } from '../../request'
import Toast from '@/components/toast/Toast.vue'
import { constants, truncate } from 'fs';
@Component({
  name: 'PublicAddress',
  components: {
    Toast
  },
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
  cancelSubscribe: boolean = true
  btnGroup = [{
    name: '再想想',
    color: '#FBD206',
    click: () => {
      console.log(this)
      this.cancelSubscribe = false
      console.log(this.cancelSubscribe)
    }
  }, {
    name: '确认取消',
    color: '#999999',
    click: () => {
      this.cancelSubscribe = false
      console.log('确认取消ma')
    }
  }]
  cancel() {
    console.log('取消')
  }
  showMore: boolean = this.showMore
  inputSearchArr: any = this.inputSearchArr
  get SearchArr(): any {
    let _inputSearchArr = this.inputSearchArr.map((item: object) => item)
    if (this.inputSearchArr.length > 3 && this.showMore) {
      _inputSearchArr = _inputSearchArr.splice(0, 3)
    } else {
      _inputSearchArr = this.inputSearchArr
    }
    return _inputSearchArr
  }
  loadMore() {
    this.showMore = false
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
  }//取消订阅
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


