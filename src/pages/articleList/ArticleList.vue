<template lang="pug">
  van-list(v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad")
    Article(:data='articleListArr' :type='listParams.type')
</template>

<script lang="ts">
import Vue from 'vue'
import { State, Action } from 'vuex-class'
import Component from 'vue-class-component'
import Article from '@/components/article/Article.vue'
import { articleList } from '../../request'
import mark from '../../utils/mark'
interface list {
  isEnd: boolean
}
@Component({
  components: {
    Article
  }
})
export default class ArticleList extends Vue {
  listParams = {
    type: 1,
    page: 0
  }
  loading = false
  finished = false
  isEnd = false
  articleListArr = []
  async onLoad() {
    this.listParams.page++
    let res: Ajax.AxiosResponse | any = await articleList.articleList(
      this.listParams
    )
    if (res && res.code === 200) {
      this.articleListArr = this.articleListArr.concat(res.msg.content)
      this.loading = false
      this.isEnd = res.msg.isEnd
      if (this.isEnd) {
        this.finished = true
      } else {
        this.finished = false
      }
    }
  }
  mounted() {
    this.listParams.type = Number(this.$route.query.type) || 1
    if (this.listParams.type === 1) {
      mark({
        module: '打点',
        function: '查看已读文章',
        action: '点击已读文章'
      })
    } else if (this.listParams.type === 2) {
      mark({
        module: '打点',
        function: '查看未读文章',
        action: '点击未读文章'
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
