<template lang="pug">
  div(class="search-result-component")
    div(style='min-height:40vh')
      Public-address(:inputSearchArr='inputSearch.ownerList' :showMore='initState.showMore')
    div(style='height:30px')
    Public-address(:inputSearchArr='inputSearch.searchList')
    van-button(type="info" class='included' @click='popup') 没有我想要的，我要让小新补充收录
    van-popup(v-model='initState.show' position="bottom" :overlay="true") 
      div(class='popContent')
        div(class='popText') 请输入你收录的公众号名称
        input(class='inputItem' placeholder='请输入你收录的公众号名称')
        div(class='confirm')
          van-button(type="default" @click='cancel') 取消
          van-button(type="default" style='background-color:rgba(251, 210, 6, 1)' ) 确认
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import PublicAddress from '@/components/publicAddress/PublicAddress.vue'
import { State, Action } from 'vuex-class'
interface stateType {
  showMore: boolean
  show: boolean
}
@Component({
  name: 'SearchResult',
  components: {
    PublicAddress
  }
})
export default class SearchResult extends Vue {
  @Action changeInputText: () => void
  @State inputSearch: Object
  private initState: stateType = {
    showMore: true,
    show: false
  }
  cancel() {
    this.initState.show = false
  }
  popup() {
    if (this.initState.show) {
      this.initState.show = false
    } else {
      this.initState.show = true
    }
  }
}
</script>

<style lang="less">
.search-result-component {
  padding: 0 20px;
}
.included {
  width: 100%;
  padding: 0 10px;
  height: 40px;
  line-height: 35px;
  border-radius: 40px;
  background-color: rgba(251, 210, 6, 1);
  border: 0;
}
.popContent {
  height: 203px;
  position: relative;
}
.confirm {
  position: absolute;
  left: 0;
  bottom: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.popText {
  font-size: 16px;
  padding: 10px 20px;
}
.confirm button {
  width: 136px;
  height: 40px;
  border-radius: 20px;
  line-height: 35px;
}
.inputItem {
  margin: 0 auto;
  display: block;
  width: 80%;
  margin-top: 10px;
  border: 0;
  height: 40px;
  font-size: 14px;
}
</style>

