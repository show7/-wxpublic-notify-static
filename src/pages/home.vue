<template lang="pug">
  .home-component-wrap
    Search(@input = "searchChange")
    transition(name="fade")
      router-view
    Popup(v-show="step")
      div(class="boot-page-step1" v-show='step===1')
          img(src="https://static.iqycamp.com/Group 4@2x-habvzzd1.png")
          div(class="boot-step-btn" @click="step=2") 如何通知？
      div(class="boot-page-step2" v-show='step===2')
        img(src="https://static.iqycamp.com/Group 7@2x-1eft11f2.png")
        div(class="boot-step-btn" @click='step=3') 如何查阅？
      div(class="boot-page-step3" v-show='step===3')
          img(src="https://static.iqycamp.com/Group 4@2x-habvzzd1.png")
          div(class="boot-step-btn" @click='step=0') 开始订阅！
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Search from '@/components/search/Search.vue'
import Popup from '@/components/popup/Popup.vue'

import { State, Action } from 'vuex-class'

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
  step: number = 1
  async mounted() { }
  searchChange(val: any) {
    if (val !== '') this.changeInputText(val)
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
  .boot-page-step1 {
    position: absolute;
    left: 0;
    right: 0;
    top: 130px;
    width: 337px;
    margin: auto;
    img {
      margin-bottom: 40px;
    }
  }
  .boot-page-step3 {
    position: absolute;
    left: 0;
    right: 0;
    top: 130px;
    width: 337px;
    margin: auto;
    img {
      margin-bottom: 40px;
    }
  }
  padding: 14px 0 0 0;
  .boot-page-step2 {
    position: absolute;
    left: 0;
    right: 0;
    top: 130px;
    width: 364px;
    margin: auto;
    img {
      margin-bottom: 85px;
    }
  }
}
</style>