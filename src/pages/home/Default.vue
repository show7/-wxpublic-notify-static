<template lang="pug">
  div(class="classify-warp")
    div(class="classify-title")
      div 公众号分类
      div(class="classify-strategy" @click="clickStrategy") 使用攻略
    van-tabs( @click="selectNav" class='tabContent')
      van-tab(v-for="(navItem,i) in typelist" :key="i" :title="navItem.name" style="")
    van-list(v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad" class='content' :offset='200')
      div(class='homeContent')
        PublicAddress(:inputSearchArr='allList')
    // Toast(:title="")
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action, Getter } from 'vuex-class'
import { constants } from 'fs'
import { fail } from 'assert'
import { setInterval } from 'timers'
import home from '../../request/home'
import PublicAddress from '@/components/publicAddress/PublicAddress.vue'
import Popup from '@/components/popup/Popup.vue'
import Toast from '@/components/toast/Toast.vue'
import mark from '../../utils/mark'
import { Watch } from 'vue-property-decorator'
import classifylist from '../../request/classifylist'
@Component({
  name: 'Default',
  components: {
    PublicAddress,
    Toast
  }
})
export default class Default extends Vue {
  @Action getTypelist: () => void
  // @Action setAllList: (params?: object) => void
  @Action setNoviceGuideState: (params: any) => void
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
  async mounted() {
    let res: Ajax.AxiosResponse | any = await classifylist.firstSubscribe()
    if (res && res.code === 200) {
      if (res.msg === true) {
        this.$router.replace('/classifyList')
        return
      }
    }
    mark({
      module: '打点',
      function: '首页',
      action: '着陆首页'
    })
    this.getTypelist()
    this.allList = []
    this.listParams = {
      category: 1,
      page: 0
    }
    this.isEnd = false
    this.loading = false
    this.finished = false
    // this.onLoad()
  }
  clickStrategy() {
    mark({
      module: '打点',
      function: '使用攻略',
      action: '点击使用攻略'
    })
    this.$router.push('/guide')
  }
  selectNav(index: number) {
    mark({
      module: '打点',
      function: '分类',
      action: '点击分类',
      memo: index
    })
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
      if (this.allList.length > 0 && this.listParams.page === 1) return
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
    background: @color-btn;
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
      background: @color-btn;
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
        background: @color-btn;
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

