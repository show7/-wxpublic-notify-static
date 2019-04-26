<template lang="pug">
  .public-address-component(v-for='(item,index) in SearchArr' :key='index' v-show='showMore')
      div
        img(class="public-address-head-img" :src="item.avatar")
        div(class="public-address-info")
          div(class="public-address-title" v-html='item.weChatName')
          div(class="public-address-introduction") {{item.description}}
      div(v-if='item.isSubscribe !== undefined' :class="['public-address-subscribe',subscribe(item.isSubscribe)]" @click='setSubscribeStatus(item,index)') {{item.isSubscribe ? '已订阅' : '订阅'}}
    .public-address-component(v-for='(item,i) in inputSearchArr' :key='"index"+i' v-show='!showMore' @click="recommend ? confirm((item.weChatName).replace('<strong>','').replace('</strong>',''),item.searchId) :''")
      div
        img(class="public-address-head-img" :src="item.avatar")
        div(class="public-address-info")
          div(class="public-address-title" v-html='item.weChatName')
          div(class="public-address-introduction") {{item.description}}
      div(v-if='item.isSubscribe !== undefined' :class="['public-address-subscribe',subscribe(item.isSubscribe)]" @click='setSubscribeStatus(item,i)') {{item.isSubscribe ? '已订阅' : '订阅'}}
    div(v-show='showMore' class='showMore' @click='loadMore') 更多公众号
      van-icon(name='arrow-down')
</template>

<script lang="ts">
import Vue from 'vue'
import { State, Action } from 'vuex-class'
import Component from 'vue-class-component'
import Article from '@/components/article/Article.vue'
import { articleList } from '../../request'
import mark from '../../utils/mark'
interface list {
  isEnd: boolean
}
@Component({})
export default class GuideList extends Vue {}
</script>

<style lang="less">
@import './OrderList.less';
</style>
