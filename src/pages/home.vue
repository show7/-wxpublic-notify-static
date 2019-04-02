<template lang="pug">
  .home-component-wrap
    Search(@input = "searchChange")
    transition(name="fade")
      router-view
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Search from '@/components/search/Search.vue'

import { State, Action } from 'vuex-class'

@Component({
  name: 'Home',
  components: {
    Search
  }
})
export default class Home extends Vue {
  @Action changeInputText: (val: string) => void
  // @Action getHome: (params: any) => void
  // Alert(params: number) {
  //   alert(params == 1)
  // }
  async mounted() {}
  searchChange(val: any) {
    this.changeInputText(val)
    if (val === '' && location.href.indexOf('/update/Default') === -1) {
      this.$router.replace({ path: '/update/Default' })
    } else if (location.href.indexOf('/update/SearchResult') === -1) {
      this.$router.replace({ path: '/update/SearchResult' })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/common.less';
.home-component-wrap {
  padding: 14px 0 0 0;
}
</style>