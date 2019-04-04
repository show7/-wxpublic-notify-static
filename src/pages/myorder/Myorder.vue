<template lang='pug'>
  div
    van-cell-group
      van-cell(title='又更新公众号' class='cellTit' is-link)
        span(class='findMore' @click='pathToPublicList') 查看全部({{mySubscribe.totalSubscribeCount}})
    van-row(class='descriptionContent')
      van-col(span='6' v-for='(item, index) in publicList' :key='index' @click='pathToPublic(item.url)')
        div(class='mySubscribe-item')
          img(class='mySubscribe' :src='item.avatar')
        div(class='descriptionTxt') {{item.weChatName}}
    div(class='separate')
    van-cell-group
        van-cell(title='又更新文章' class='cellTit' is-link)
          span(v-if='mySubscribe.totalUnReadCount > 3' class='findMore' @click='pathToArticle(2)') 查看全部({{mySubscribe.totalUnReadCount}})
    Article(:data='mySubscribe.unReadArticles')
    div(class='separate')
    van-cell(title="已阅文章" is-link class='cellTit' @click='pathToArticle(1)')
    Toast(title='小新提示' :btnGroup="noviceGuideBtn" v-show="noviceState")
      div(slot="content") 你还没有订阅任何公众号哦！ 点击按钮完成新手教学吧～
    Popup(v-show="noviceGuideState")
      div(class="boot-page-step" v-show='noviceGuideState===1')
          img(src="https://static.iqycamp.com/01-se9pnk59.png")
          div(class="boot-step-btn boot-step-1" @click="setNoviceGuideState(2)") 如何通知？
      div(class="boot-page-step" v-show='noviceGuideState===2')
        img(src="https://static.iqycamp.com/02-u7xf7vms.png")
        div(class="boot-step-btn boot-step-2" @click='setNoviceGuideState(3)') 如何查阅？
      div(class="boot-page-step" v-show='noviceGuideState===3')
          img(src="https://static.iqycamp.com/03-8tl9x5f0.png")
          div(class="boot-step-btn boot-step-3" @click='setNoviceGuideState(0)') 开始订阅！
</template>

<script lang='ts'>
import mark from '../../utils/mark.js'
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'
import Article from '@/components/article/Article.vue'
import Toast from '@/components/toast/Toast.vue'

@Component({
  components: {
    Article,
    Toast
  }
})
export default class Myorder extends Vue {
  @State mySubscribe: StoreState.overview
  @Action getArticle: () => void
  @Action setNoviceGuideState: (params?: any) => void
  @Action setNoviceState: (params?: any) => void
  @State noviceGuideState: number
  @State noviceState: number
  private updatePulic = 0
  private mounted() {
    this.getArticle()
  }
  noviceGuideBtn: object[] = [
    {
      name: '新手引导',
      color: '#FBD206',
      click: () => {
        this.setNoviceGuideState(1)
        this.setNoviceState(false)
      }
    }
  ]
  cancle() {}
  get publicList() {
    if (this.mySubscribe.publicList.length > 4) {
      let _public = this.mySubscribe.publicList.slice(0, 4)
      return _public
    } else {
      return this.mySubscribe.publicList
    }
  }
  pathToPublic(url: string) {
    window.location.href = url
  }
  async pathToArticle(type: number) {
    if (type === 2) {
      mark({
        module: '打点',
        function: '查看全部文章',
        action: '点击查看全部文章'
      })
    }
    this.$router.push(`/update/articles?type=${type}`)
  }
  pathToPublicList() {
    mark({
      module: '打点',
      function: '查看全部公众号',
      action: '点击查看全部公众号'
    })
    this.$router.push(`/update/publicList`)
  }
}
</script>

<style lang='less' scoped>
.descriptionContent {
  padding: 8px 0;
}
.mySubscribe {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.mySubscribe-item {
  display: flex;
  justify-content: center;
  padding: 5px 0;
}
.descriptionTxt {
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cellTit {
  font-size: 16px;
  font-weight: bold;
}
.cellTit .findMore {
  font-size: 14px;
  font-weight: normal;
}
.separate {
  height: 9px;
  background-color: rgba(245, 245, 245, 1);
}
</style>
