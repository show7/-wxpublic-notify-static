<template lang="pug">
  div(class="classify-warp")
    div(class="classify-title")
      div 公众号分类
      div(class="classify-strategy" @click="setNoviceGuideState(1)") 使用攻略 &gt;
    van-tabs( @click="selectNav" class='tabContent')
      van-tab(v-for="(navItem,i) in typelist" :key="i" :title="navItem.name" style="")
    van-list(v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad" class='content' :offset='200')
      div(class='homeContent')
        PublicAddress(:inputSearchArr='allList')
    // Toast(:title="")
    Popup(v-show="noviceGuideState")
      div(class="boot-page-step" v-show='noviceGuideState===1')
          img(src="https://static.iqycamp.com/01-se9pnk59.png")
          div(class="boot-step-btn boot-step-1" @click="setNoviceGuideState(2)") 如何通知？
      div(class="boot-page-step" v-show='noviceGuideState===2')
        img(src="https://static.iqycamp.com/02-u7xf7vms.png")
        div(class="boot-step-btn boot-step-2" @click='setNoviceGuideState(3)') 如何查阅？
      div(class="boot-page-step" v-show='noviceGuideState===3')
          img(src="https://static.iqycamp.com/03-8tl9x5f0.png")
          div(class="boot-step-btn boot-step-3" @click='setNoviceGuideState(0)') 开始订阅！
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action, Getter } from 'vuex-class'
import { constants } from 'fs'
import { fail } from 'assert'
import { setInterval } from 'timers'
import home from '../../request/home'
import PublicAddress from '@/components/publicAddress/publicAddress.vue'
import Popup from '@/components/popup/Popup.vue'
import Toast from '@/components/toast/Toast.vue'
@Component({
  name: 'Default',
  components: {
    PublicAddress,
    Popup,
    Toast
  }
})
export default class Default extends Vue {
  @Action getTypelist: () => void
  @Action setAllList: (params?: object) => void
  @Action setNoviceGuideState: (params?: any) => void
  @State typelist: any
  @State noviceGuideState: number
  allList = []
  listParams = {
    category: 1,
    page: 0
  }
  isEnd = false
  loading = false
  finished = false
  mounted() {
    this.getTypelist()
    const step = localStorage.getItem('noviceGuideState') ? 0 : 1
    this.setNoviceGuideState(step)
    localStorage.setItem('noviceGuideState', 'true')
    this.onLoad()
    this.allList = []
    this.listParams = {
      category: 1,
      page: 0
    }
    this.isEnd = false
    this.loading = false
    this.finished = false
  }

  selectNav(index: number) {
    this.listParams = {
      category: index + 1,
      page: 0
    }
    this.allList = []
    this.onLoad()
  }
  async onLoad() {
    this.listParams.page++
    let res: Ajax.AxiosResponse | any = await home.getAllList(this.listParams)
    if (res && res.code === 200) {
      this.allList = this.allList.concat(res.msg.content)
      console.log(this.allList)
      this.loading = false
      this.isEnd = res.msg.isEnd
      if (this.isEnd) {
        this.finished = true
      } else {
        this.finished = false
      }
    }
  }
}
</script>

<style lang="less">
@import '../../style/common.less';
.classify-warp {
  padding-top: 120px;
  .van-tabs__line {
    background: @color-subscribe-btn;
  }
  .classify-title {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
    padding: 70px 20px 50px 20px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-content: center;
    color: @color-title;
    font-size: @font-title;
    font-weight: @font-wight6;
    .classify-strategy {
      width: 76px;
      height: 24px;
      box-shadow: 0px 4px 10px 0px rgba(251, 210, 6, 0.32);
      border-radius: 12px;
      background: @color-subscribe-btn;
      color: #1d1300;
      font-size: @font-content;
      line-height: 24px;
      text-align: center;
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
.homeContent {
  padding: 20px;
}
.tabContent {
  width: 100%;
  position: fixed;
  left: 0;
  top: 100px;
  z-index: 10;
}
.home-component-wrap .search-component-wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 10px;
  width: 342px;
  margin: 0 auto;
  z-index: 11;
}
</style>

