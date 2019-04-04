<template lang="pug">
    .search-component-wrap
      input(class="search-input" type="text" @focus='focus' v-model="text" /*@input='search'*/ @search='search' @click='clickSearch')
      span(class="iconfont icon-search") 
      span(class="iconfont icon-close-copy" @click="clearText" v-show="searchStates")
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import mark from '../../utils/mark'
@Component({
  name: 'Search',
  props: {
    input: {
      type: Function,
      default: (): void => { }
    }
  }
})
export default class Search extends Vue {
  text: any = ''
  searchStates: boolean = false
  focus() {
    this.searchStates = true
  }
  blur() {
    this.searchStates = false
  }
  clearText() {
    this.text = ''
    this.searchStates = false
  }
  search() {
    mark({
      module: '打点',
      function: '点击搜索框',
      action: '点击搜索框'
    })
    this.$emit('input', this.text)
  }
  clickSearch() {
    mark({
      module: '打点',
      function: '搜索',
      action: '点击搜索'
    })
  }
}
</script>
<style lang="less" scoped>
@import './search.less';
</style>
