<template lang="pug">
  Article
</template>

<script lang="ts">
import Vue from 'vue'
import { State } from 'vuex-class'
import Component from 'vue-class-component'
import Article from '@/components/article/Article.vue'
@Component({
  components: {
    Article
  }
})
export default class ArticleList extends Vue {}
</script>
<style lang="less" scoped>
</style>
