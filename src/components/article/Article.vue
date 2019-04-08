<template lang="pug">
  div
    van-cell(v-for='(item, index) in computedMsg' :key='index' @click='pathToArticle(item.recordId,index,item)')
      div(class='articleTit') {{item.title}}
      div(class='articleContent')
        div(class='contentLeft')
          img(:src='item.avatar' class='articleUserImg')
          div(class='channelName') {{item.nickname}}
        div(class='contentRight') {{item.pushDate}}
</template>

<script lang="ts">
import Vue from 'vue'
import { State, Action } from 'vuex-class'
import Component from 'vue-class-component'
import { articleList } from '../../request'
import mark from '../../utils/mark'
@Component({
  props: {
    data: Array,
    type: Number
  }
})
export default class Article extends Vue {
  @Action getArticle: () => void
  name: 'Article'
  private data: object[] = this.data
  private updatePulic = 0
  type: number = this.type
  mounted() {
    console.log(this.data)
  }
  get computedMsg() {
    return this.data
  }
  async pathToArticle(recordId: number, index: number, item: any) {
    mark({
      module: '打点',
      function: '点击文章',
      action: '点击阅读文章'
    })
    if (!item.isRead) {
      let res: Ajax.AxiosResponse | any = await articleList.openArticle({
        recordId
      })
      // if (res && res.code === 200) this.computedMsg.splice(index, 1)
    }
    this.getArticle()
    window.location.href = item.url
  }
}
</script>
<style lang="less" scoped>
.cellTit {
  font-size: 16px;
  font-weight: bold;
}
.cellTit .findMore {
  font-size: 14px;
  font-weight: normal;
}
.articleContent {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
}
.contentLeft {
  display: flex;
  align-items: center;
}
.articleUserImg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.channelName {
  font-size: 14px;
  margin-left: 5px;
}
.contentRight {
  font-size: 12px;
  color: rgba(193, 192, 201, 1);
}
.articleTit {
  color: rgba(80, 80, 90, 1);
  margin: 10px 0;
  padding: 0 15px;
  font-size: 16px;
  line-height: 1.5;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
}
</style>
