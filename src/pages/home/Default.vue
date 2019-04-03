<template lang="pug">
    div(class="classify-warp")
      div(class="classify-title")
        div 公众号分类
        div(class="classify-strategy") 使用攻略 &gt;
      van-tabs( @click="selectNav")
          van-tab(v-for="(navItem,i) in typelist" :key="i" :title="navItem.name")
      van-list(class="public-address-wrap" v-model="loading[activeIndex]" :finished="finished[activeIndex]" finished-text="没有更多了" @load="onLoad")
        van-cell(v-for="(publist,i) in allList.content" :key='i' style='padding:30px 0;border:1px solid red')
                    // Public-address(v-for="(publist,i) in allList" :inputSearchArr="publist.content" :showMore="false" :key='i')
      // div(class="classify-nav-wrap")
      //   div(class="nav-active" v-for="(navItem,i) in typelist" :key="i" @click="checkNavItem(navItem.id)") {{navItem.name}}
      // van-list(class="public-address-wrap" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad")
      //   van-cell
      //     Public-address(v-for="(publist,i) in allList" :inputSearchArr="publist.content" :showMore="false")
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import PublicAddress from '@/components/publicAddress/PublicAddress.vue'
import { State, Action, Getter } from 'vuex-class'
import { constants } from 'fs'
import { fail } from 'assert'
import { setInterval } from 'timers'
@Component({
  name: 'Default',
  components: {
    PublicAddress
  }
})
export default class Default extends Vue {
  @Action getTypelist: () => void
  @Action setAllList: (params?: object) => void
  @Action loadMore: (params?: object) => void
  @State typelist: StoreState.typelist[]
  @State allList: StoreState.typelist[]
  @State loading: StoreState.typelist[]
  @State finished: StoreState.typelist[]
  @State activeIndex: number
  @State listParams: StoreState.typelist[]
  currentPublicInfo = {}
  private mounted() {
    this.getTypelist()
    // const params = {
    //   category: 1,
    //   page: 1
    // }
    // console.log(params)
    // // console.log(this.typelist[this.active])
    // this.setAllList(params)
  }
  selectNav(index: number) {
    const params = this.listParams[index]
    // console.log(this.typelist[this.active])
    this.setAllList(params)
  }
  // get category() {
  //   return this.typelist[this.active].id
  // }
  // get currentList() {
  //   return this.allList[this.category]
  // }
  onLoad() {
    console.log(true)
    let params = {}
    params = {
      ...this.listParams[this.activeIndex],
      page: this.listParams[this.activeIndex].page++
    }
    this.setAllList(params)
  }
  get allListItem() {
    return this.allList
  }
}
</script>

<style lang="less">
@import '../../style/common.less';
.classify-warp {
  padding-top: 18px;
  .van-tabs__line {
    background: @color-subscribe-btn;
  }
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

