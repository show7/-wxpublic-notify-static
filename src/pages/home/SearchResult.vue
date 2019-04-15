<template lang="pug">
  div(class="search-result-component")
    div()
      Public-address(:inputSearchArr='inputSearch.ownerList' :showMore='arrLength > 3 ? true : false')
    div(class='notice' v-show='inputSearch.searchList.length > 0')
      div 下面的是来自网络搜索的公众号
      div 如果里面有你想要的，可以点击向小新推荐收录哦~
    Public-address(:inputSearchArr='inputSearch.searchList' :showMore='false' :recommend="true")
    div( :class='inputSearch.ownerList.length <= 0 && inputSearch.searchList.length <= 0 ? "included middle" : "included" ')
      div(class='noList' v-show='inputSearch.ownerList.length <= 0 && inputSearch.searchList.length <= 0 ') 小新没有找到你心仪的公众号
      van-button(type="info" @click='popup') {{inputSearch.ownerList.length <= 0 && inputSearch.searchList.length <= 0 ? '让小新补充收录！' : '没有我想要的，我要让小新补充收录！' }}
    van-popup(v-model='initState.show' position="bottom" :overlay="true") 
      div(class='popContent')
        div(class='popText') 请输入你收录的公众号名称
        input(class='inputItem' placeholder='请输入你推荐收录的公众号名称 ' maxlength='20' v-model='initState.inputText' @blur='iosBlur')
        div(class='confirm')
          van-button(type="default" @click='cancel') 取消
          van-button(type="default" style='background-color:rgba(251, 210, 6, 1)' @click='confirm') 提交
    Toast(title='小新提示' :btnGroup="recommendedBtn" v-show="recommendedPopup")
      div(slot="content") 推荐成功！我会在24小时内审核，收录后会告诉你哒！
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import PublicAddress from '@/components/publicAddress/PublicAddress.vue'
import { State, Action } from 'vuex-class'
import { searchPublic } from '../../request'
import Toast from '@/components/toast/Toast.vue'
import { setTimeout, clearTimeout } from 'timers'
interface stateType {
  showMore: boolean
  show: boolean
  inputText: string
}

interface arr {
  ownerList: any[]
}
@Component({
  name: 'SearchResult',
  components: {
    PublicAddress,
    Toast
  }
})
export default class SearchResult extends Vue {
  recommendedPopup = false
  private recommendedBtn: object[] = [
    {
      name: '好的',
      color: '#FBD206',
      click: () => {
        this.ok()
      }
    }
  ]
  ok() {
    this.recommendedPopup = false
  }
  @Action changeInputText: () => void
  @Action searchPublic: (params: any) => void
  @State inputSearch: arr
  private initState: stateType = {
    showMore: true,
    show: false,
    inputText: ''
  }
  iosBlur(e: any) {
    let _timer = setTimeout(() => {
      clearTimeout(_timer)
      window.scrollTo(0, 0)
    }, 100)
  }
  cancel() {
    this.initState.show = false
  }
  popup() {
    this.initState.inputText = ''
    if (this.initState.show) {
      this.initState.show = false
    } else {
      this.initState.show = true
    }
  }
  async confirm(e?: any) {
    if (!this.initState.inputText) {
      this.$toast('您还没有填写哦~')
      return
    }
    const res: Ajax.AxiosResponse | any = await searchPublic.recommandPublic({
      weChatName: this.initState.inputText
    })
    if (res && res.code === 200) {
      // this.$toast('推荐成功！')
      this.initState.show = false
    }
    this.recommendedPopup = true
    this.cancel()
  }
  get arrLength() {
    return this.inputSearch.ownerList.length
  }
}
</script>

<style lang="less">
.notice {
  font-size: 12px;
  color: rgba(193, 192, 201, 1);
  text-align: center;
  padding: 10px 0;
}
.notice > div {
  padding: 2px 0;
}
.home-component-wrap .search-component-wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 342px;
  margin: 0 auto;
  z-index: 11;
  padding: 10px 0;
  background-color: #fff;
}
.search-result-component {
  padding: 50px 20px;
}
.included button {
  width: 100%;
  padding: 0 10px;
  height: 40px;
  line-height: 35px;
  border-radius: 40px;
  background-color: rgba(251, 210, 6, 1);
  border: 0;
  margin: 10px 0;
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
.middle {
  position: fixed;
  left: 0;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 342px;
}
.noList {
  font-size: 12px;
  color: rgba(193, 192, 201, 1);
  text-align: center;
}
// .van-popup {
//   top: unset;
// }
</style>

