<template lang="pug">
  Popup(v-show="noviceGuideState<3 && noviceGuideState>0")
    div(class="boot-page-step" v-show='noviceGuideState===1')
        img(src="https://static.iqycamp.com/guide1-5lt8ghmv.png")
        div(class="boot-step-btn boot-step-1" @click="setNoviceGuideState({status:2})") 如何通知？
    div(class="boot-page-step" v-show='noviceGuideState===2')
        img(src="https://static.iqycamp.com/guide2-thecb1bw.png")
        div(class="boot-step-btn boot-step-2" @click='lastStep') 开始订阅！
</template>
<script lang="ts">
import Vue from 'vue'
import { State, Action } from 'vuex-class'
import Component from 'vue-class-component'
import Popup from '@/components/popup/Popup.vue'
@Component({
  name: 'Guide',
  components: {
    Popup
  }
})
export default class Guide extends Vue {
  @Action setNoviceGuideState: (params: any) => void
  @State noviceGuideState: number
  lastStep() {
    this.setNoviceGuideState({ status: 3, isStrategy: true })
    this.$router.replace('/')
  }
  mounted() {
    this.setNoviceGuideState({ status: 1 })
  }
}
</script>
<style lang="less" scoped>
@import url('./Guide.less');
</style>

