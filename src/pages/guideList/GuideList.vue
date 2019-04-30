<template lang="pug">
  
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
@import './GuideList.less';
</style>
