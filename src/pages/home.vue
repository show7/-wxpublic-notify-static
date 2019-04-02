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
  // @Action getHome: (params: any) => void
  // Alert(params: number) {
  //   alert(params == 1)
  // }
  async mounted() {

  }
  @State activities: StoreState.activity[]
  searchChange(val: any) {
    console.log(val)
  }
}
</script>

<style lang="less" scoped>
@import '../style/common.less';
.home-component-wrap {
  padding: 14px 0 0 0;
}
</style>