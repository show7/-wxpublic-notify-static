<template lang="pug">
  van-list(v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad")
    Article(:data='articleList.content')
</template>

<script lang="ts">
import Vue from 'vue'
import { State, Action } from 'vuex-class'
import Component from 'vue-class-component'
import Article from '@/components/article/Article.vue'
interface list {
  isEnd: boolean
}
@Component({
  components: {
    Article
  }
})
export default class ArticleList extends Vue {
  @Action ArticleList: (params: object) => void
  @State articleList: list
  listParams = {
    type: 1,
    page: 0
  }
  loading = false
  finished = false
  get isEnd() {
    return this.articleList.isEnd
  }
  onLoad() {
    this.listParams.page++
    this.ArticleList(this.listParams)
    this.loading = false
    if (this.isEnd) {
      this.finished = true
    }
  }
  mounted() {
    this.listParams.type = Number(this.$route.query.type)
  }
}
</script>
<style lang="less" scoped>
</style>
