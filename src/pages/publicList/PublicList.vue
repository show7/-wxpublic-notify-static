<template lang="pug">
  van-list(v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad" class='content')
    div(class='nightItem')
      div(class='nightContent')
        div 深夜勿扰模式
        van-switch(v-model="checked" @change='toggleSwitch' size='20px')
      div(class='nightText') 开启深夜勿扰模式，我们会将晚上十点之后更新的文章延迟到次日上午8点之后推送通知，帮您睡个好觉。
    div(class='separate')
    Public(:inputSearchArr='publicListArr')
</template>

<script lang="ts">
import Vue from 'vue'
import { State, Action } from 'vuex-class'
import Component from 'vue-class-component'
import Public from '@/components/publicAddress/PublicAddress.vue'
import { publicList, getToggleNight } from '../../request'
import { connect } from 'net'
import { constants } from 'http2'
import { setTimeout } from 'timers'
import mark from '../../utils/mark'
interface list {
  isEnd: boolean
}
@Component({
  components: {
    Public
  }
})
export default class ArticleList extends Vue {
  @Action ToggleNight: (params: object) => void
  listParams = {
    page: 0
  }
  loading = false
  finished = false
  checked = false
  isEnd = false
  publicListArr = []
  async onLoad() {
    this.listParams.page++
    let res: Ajax.AxiosResponse | any = await publicList.publicList(
      this.listParams
    )
    if (res && res.code === 200) {
      this.publicListArr = this.publicListArr.concat(res.msg.content)
      this.loading = false
      this.isEnd = res.msg.isEnd
      if (this.isEnd) {
        this.finished = true
      } else {
        this.finished = false
      }
    }
  }
  toggleSwitch() {
    if (this.checked) {
      mark({
        module: '打点',
        function: '开启深夜勿扰模式',
        action: '点击开启深夜勿扰模式'
      })
    } else {
      mark({
        module: '打点',
        function: '取消深夜勿扰模式',
        action: '点击取消深夜勿扰模式'
      })
    }
    this.ToggleNight({ quietMode: this.checked })
  }
  async mounted() {
    const res: Ajax.AxiosResponse | any = await getToggleNight.getToggleNight()
    this.checked = res.msg
  }
}
</script>
<style lang="less" scoped>
@import './PublicList.less';
</style>
