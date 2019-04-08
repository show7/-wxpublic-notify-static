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
import Popup from '@/components/popup/Popup.vue'

import { State, Action } from 'vuex-class'
import { constants } from 'fs'

@Component({
  name: 'Home',
  components: {
    Search,
    Popup
  }
})
export default class Home extends Vue {
  @Action changeInputText: (val: string) => void
  // @Action getHome: (params: any) => void
  // Alert(params: number) {
  //   alert(params == 1)
  // }
  searchChange(val: any) {
    if (val !== '') this.changeInputText(val)
    if (val === '' && this.$route.name !== 'default') {
      window.location.replace('/wx_public/')
    } else if (val !== '' && this.$route.name === 'default') {
      this.$router.replace({ path: '/searchResult' })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/common.less';

.home-component-wrap {
}
</style>