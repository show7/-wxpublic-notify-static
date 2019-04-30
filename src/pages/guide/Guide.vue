<template lang="pug">
  Popup(v-show="noviceGuideState<3 && noviceGuideState>0")
    div(class="boot-page-step" v-show='noviceGuideState===1')
        img(class="bgImg1" src="https://static.iqycamp.com/guide-buke1ruy.png")
        img(class="stepImg1" src="https://static.iqycamp.com/stepone-d0odv55v.png")
        div(class="boot-step-btn boot-step-1" @click="setNoviceGuideState({status:2})") 如何通知？
    div(class="boot-page-step" v-show='noviceGuideState===2')
        img(class="bgImg2" src="https://static.iqycamp.com/guideImg-1ej3lf7f.png")
        img(class="stepImg2" src="https://static.iqycamp.com/steptwo-bg31wwdf.png")
        div
          div(class="boot-step-btn boot-step-2" style="left:20px;right:unset" @click="pathTo('/')") 开始订阅！
          div(class="boot-step-btn boot-step-2" style="right:20px;left:unset" @click="pathTo('/myorder')") 阅读文章！
</template>
<script lang="ts">
import Vue from 'vue'
import { State, Action } from 'vuex-class'
import Component from 'vue-class-component'
import Popup from '@/components/popup/Popup.vue'
import mark from '../../utils/mark'
@Component({
  name: 'Guide',
  components: {
    Popup
  }
})
export default class Guide extends Vue {
  @Action setNoviceGuideState: (params: any) => void
  @State noviceGuideState: number
  pathTo(url: string) {
    this.$router.replace(url)
  }
  mounted() {
    mark({
      module: '打点',
      function: '首页',
      action: '着陆首页'
    })
    this.setNoviceGuideState({ status: 1 })
  }
}
</script>
<style lang="less" scoped>
@import url('./Guide.less');
</style>

