<template lang="pug">
  ScrollView
    .topic 感谢关注，小新为您推荐～
    .contentFlex
      .public-address-component(v-for='(item,index) in allList' :key='index')
        div
          img(class="public-address-head-img" :src="item.avatar")
          div(class="public-address-info")
            div(class="public-address-title" v-html='item.weChatName')
            div(class="public-address-introduction") {{item.description}}
          div(v-if='item.isSubscribe !== undefined' :class="['public-address-subscribe',subscribe(item.isSubscribe)]" @click='setSubscribeStatus(item,index)') 
            i(v-if='item.isSubscribe' class="iconfont iconduihao")
            div {{item.isSubscribe ? '已订阅' : '订阅'}}
        //- .public-address-component(v-for='(item,i) in allList' :key='"index"+i' v-show='!showMore' @click="recommend ? confirm((item.weChatName).replace('<strong>','').replace('</strong>',''),item.searchId) :''")
        //-   div
        //-     img(class="public-address-head-img" :src="item.avatar")
        //-     div(class="public-address-info")
        //-       div(class="public-address-title" v-html='item.weChatName')
        //-       div(class="public-address-introduction") {{item.description}}
        //-   div(v-if='item.isSubscribe !== undefined' :class="['public-address-subscribe',subscribe(item.isSubscribe)]" @click='setSubscribeStatus(item,i)') {{item.isSubscribe ? '已订阅' : '订阅'}}
        //- div(v-show='showMore' class='showMore' @click='loadMore') 更多公众号
          van-icon(name='arrow-down')
    .public-address-subscribe(class="no-subscribe moreItem") 订阅更多  
    Toast(title='小新提示' :btnGroup="unSubbtnGroup" v-show="cancelSubPopup")
      div(slot="content") 取消订阅之后，就不能收到最新更新的提醒了哦！
    Toast(title='小新提示' :btnGroup="subBtnGroup" v-show="subscribePopup")
      div(slot="content") 你已经订阅了{{subscribeNum}}个心仪的公众号啦~ 继续订阅的话，每天可能会收到多条来自小新的提醒哦！
    Toast(title='小新提示' :btnGroup="recommendedBtn" v-show="recommendedPopup")
      div(slot="content") 推荐成功！我会在24小时内审核，收录后会告诉你哒！
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'
import { unsubscribe, subscribe } from '../../request'
import Toast from '@/components/toast/Toast.vue'
import { searchPublic } from '../../request'
import { constants, truncate } from 'fs'
import mark from '../../utils/mark'
import home from '../../request/home'
import ScrollView from '@/components/scrollView/ScrollView.vue'
@Component({
  name: 'PublicAddress',
  components: {
    Toast,
    ScrollView
  }
})
export default class ClassifyList extends Vue {
  @Action CanClick: (params: any) => void
  @Action Subscribe: (params: any) => void
  @State canClick: any
  isEnd = false
  loading = false
  finished = false
  private cancelSubPopup: boolean = false
  private subscribePopup: boolean = false
  private subscribeNum: number = 0
  private recommendedPopup: boolean = false
  private recommendedBtn: object[] = [
    {
      name: '好的',
      color: '#FBD206',
      click: () => {
        this.recommendedPopupOk()
      }
    }
  ]
  recommendedPopupOk() {
    this.recommendedPopup = false
  }
  weChatPublicId = 0
  index = 0
  subBtnGroup = [
    {
      name: '好的',
      color: '#FBD206',
      click: () => {
        this.ok()
      }
    }
  ]
  unSubbtnGroup = [
    {
      name: '再想想',
      color: '#FBD206',
      click: () => {
        this.cancel()
      }
    },
    {
      name: '确认取消',
      color: '#999999',
      click: () => {
        this.cancelSubscribe()
      }
    }
  ]
  ok() {
    this.subscribePopup = false
  }
  cancelSubscribe() {
    mark({
      module: '打点',
      function: '确认取消订阅',
      action: '点击确认取消'
    })
    this.unsubscribeFnc(this.weChatPublicId, this.index)
  }
  cancel() {
    this.cancelSubPopup = false
  }
  allList: any = []
  subscribe(isSubscribe: boolean) {
    return isSubscribe ? 'is-subscribe' : 'no-subscribe'
  }
  async confirm(publicName: any, searchId: any) {
    const res: Ajax.AxiosResponse | any = await searchPublic.recommandPublic({
      weChatName: publicName,
      searchId
    })
    if (res && res.code === 200) {
      // this.$toast('推荐成功！')
      this.recommendedPopup = true
    }
  }
  async subscribeFnc(weChatPublicId: number, index: number) {
    this.CanClick('')
    const res: Ajax.AxiosResponse | any = await subscribe.subscribe({
      isSearchResult: false,
      weChatPublicId: weChatPublicId
    })
    this.subscribeNum = res.msg
    // this.subscribePopup = true
    this.allList[index].isSubscribe = true
  } //取消订阅
  async unsubscribeFnc(weChatPublicId: number, index: number) {
    this.cancelSubPopup = true
    this.CanClick('')
    const res: Ajax.AxiosResponse | any = await unsubscribe.unsubscribe({
      isSearchResult: false,
      weChatPublicId: weChatPublicId
    })
    this.cancelSubPopup = false
    this.allList[index].isSubscribe = false
  }
  setSubscribeStatus(item: any, index: number) {
    const { isSubscribe, weChatPublicId } = item
    if (isSubscribe) {
      mark({
        module: '打点',
        function: '已订阅按钮',
        action: '点击已订阅按钮点击'
      })
      this.cancelSubPopup = true
      this.weChatPublicId = weChatPublicId
      this.index = index
    } else {
      mark({
        module: '打点',
        function: '订阅按钮',
        action: '订阅按钮点击'
      })
      this.subscribeFnc(weChatPublicId, index)
    }
  }
  async mounted() {
    let res: Ajax.AxiosResponse | any = await home.getAllList()
    if (res && res.code === 200) {
      this.allList = res.msg.content
    }
  }
}
</script>
<style lang="less">
@import './ClassifyList.less';
</style>
