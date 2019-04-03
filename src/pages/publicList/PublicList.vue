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
    Public(:inputSearchArr='publicList.content')
</template>

<script lang="ts">
import Vue from 'vue'
import { State, Action } from 'vuex-class'
import Component from 'vue-class-component'
import Public from '@/components/publicAddress/PublicAddress.vue'
interface list {
  isEnd: boolean
}
@Component({
  components: {
    Public
  }
})
export default class ArticleList extends Vue {
  @Action PublicList: (params: object) => void
  @Action ToggleNight: (params: object) => void
  @Action GetToggleNight: (params: object) => void
  @State publicList: list
  @State gettoggleNight: boolean
  listParams = {
    type: 1,
    page: 0
  }
  loading = false
  finished = false
  checked = true
  get isEnd() {
    return this.publicList.isEnd
  }
  onLoad() {
    this.listParams.page++
    this.PublicList(this.listParams)
    this.loading = false
    if (this.isEnd) {
      this.finished = true
    }
  }
  toggleSwitch() {
    this.ToggleNight({ quietMode: this.checked })
  }
  mounted() {
    this.GetToggleNight({})
  }
}
</script>
<style lang="less" scoped>
.nightItem {
  padding: 12px 0;
}
.content {
  padding: 0 20px;
}
.nightContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 8px;
}
.nightText {
  font-size: 12px;
  color: rgba(153, 153, 153, 1);
  line-height: 1.5;
}
.separate {
  height: 9px;
  background-color: rgba(245, 245, 245, 1);
  margin: 0 -20px;
}
.van-switch--on {
  background-color: #fbd206;
}
</style>
