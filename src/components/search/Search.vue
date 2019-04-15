<template lang="pug">
    .search-component-wrap
      input(class="search-input" type="search" /*@focus='focus'*/ v-model="text" @input='judge' @search='search' @blur='iosBlur' @click='clickSearch')
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
      default: (): void => {}
    }
  }
})
export default class Search extends Vue {
  text: any = ''
  searchStates: boolean = false
  canChangeInput = true
  focus() {
    this.searchStates = true
  }
  // blur() {
  //   this.searchStates = false
  // }
  clearText() {
    this.text = ''
    this.searchStates = false
    // window.location.replace('/wx_public/')
    this.$emit('input', this.text)
  }
  judge() {
    if (!this.canChangeInput) return
    if (this.text === '') {
      this.searchStates = false
      // window.location.replace('/wx_public/')
      this.$emit('input', this.text)
    }
  }
  iosBlur() {
    let _timer = setTimeout(() => {
      clearTimeout(_timer)
      window.scrollTo(0, 0)
    }, 100)
  }
  search() {
    if (this.text === '') {
      this.clearText()
    } else {
      this.focus()
    }
    mark({
      module: '打点',
      function: '搜索',
      action: '点击搜索'
    })
    this.$emit('input', this.text)
  }
  clickSearch() {
    mark({
      module: '打点',
      function: '点击搜索框',
      action: '点击搜索框'
    })
  }
  mounted() {
    document.addEventListener('compositionstart', () => {
      this.canChangeInput = false
    })
    document.addEventListener('compositionend', () => {
      this.canChangeInput = true
    })
  }
}
</script>
<style lang="less" scoped>
@import './Search.less';
</style>
