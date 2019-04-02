<template lang="pug">
  .home-component-wrap
    Search(@input = "searchChange")
    Button
    div(class="classify-warp")
      div(class="classify-title")
        div 公众号分类
        div(class="classify-strategy") 使用攻略 &gt;
      div(class="classify-nav")
        Public-address
        
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Search from '@/components/search/Search.vue'
import PublicAddress from '@/components/publicAddress/PublicAddress.vue'
import { State, Action } from 'vuex-class'

@Component({
  name: 'Home',
  components: {
    Search,
    PublicAddress
  }
})
export default class Home extends Vue {
  @Action getHome: (params: any) => void
  Alert(params: number) {
    alert(params == 1)
  }
  async mounted() {
    // this.Alert(1)
  }
  @State activities: StoreState.activity[]
  searchChange(val: any) {
    console.log(val)
  }
}
</script>

<style lang="less" scoped>
@import './Home.less';
</style>
