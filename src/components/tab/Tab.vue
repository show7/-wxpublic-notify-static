<template lang="pug">
  van-tabs(v-model='active')
    van-tab(title='asd')
    van-tab(title='asd')
</template>
<script lang='ts'>
import Vue from 'vue'
import { State } from 'vuex-class'
export default class Myorder extends Vue {
  private updatePulic = 0
}
</script>

<style lang='less' scoped>
</style>
