<template lang='pug'>
  div
    van-cell-group
      van-cell(title='又更新公众号' class='cellTit')
        span(class='findMore') 查看全部({{updatePulic}})
    van-row(class='descriptionContent')
      van-col(span='6')
        div(class='mySubscribe-item')
          img(class='mySubscribe' src='')
        div(class='descriptionTxt') 圈外孙圈圈
      van-col(span='6')
        div(class='mySubscribe-item')
          img(class='mySubscribe' src='')
        div(class='descriptionTxt') 圈外孙圈圈
      van-col(span='6')
        div(class='mySubscribe-item')
          img(class='mySubscribe' src='')
        div(class='descriptionTxt') 圈外孙圈圈
      van-col(span='6')
        div(class='mySubscribe-item')
          img(class='mySubscribe' src='')
        div(class='descriptionTxt') 圈外孙圈圈
    div(class='separate')
    van-cell-group
        van-cell(title='又更新文章' class='cellTit')
          span(class='findMore') 查看全部({{updatePulic}})
    Article
    div(class='separate')
    van-cell(title="单元格" is-link class='cellTit')
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'
import Article from '@/components/article/Article.vue'
@Component({
  components: {
    Article
  }
})
export default class Myorder extends Vue {
  @State activities: StoreState.activity[]
  @Action getArticle: () => void
  private updatePulic = 0
  private mounted() {
    this.getArticle()
  }
}
</script>

<style lang='less' scoped>
.descriptionContent {
  padding: 8px 0;
}
.mySubscribe {
  width: 34px;
  height: 34px;
}
.mySubscribe-item {
  display: flex;
  justify-content: center;
  padding: 5px 0;
}
.descriptionTxt {
  font-size: 16px;
  text-align: center;
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
