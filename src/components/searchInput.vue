<template lang="pug">
  div
    img( class="searchImg" src="https://static.iqycamp.com/search-icon-r1tq867b.png")
    input
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'
import Button from '@/components/Button.vue'

export default class Home extends Vue {
  @Action getHome: (params: any) => void
  Alert(params: number) {
    alert(params == 1)
  }
  private mounted() {
    this.getHome('')
  }
  @State activities: StoreState.activity[]
}
</script>

<style lang="less" scoped>
.searchImg {
  width: 2rem;
}
</style>
