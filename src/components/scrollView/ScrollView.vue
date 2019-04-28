<template lang="pug">
  .scroll-view(:style="{height:height}")
    .scroll-container
      slot
    slot(name="fixButton")
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getHeight } from '../../utils/domUtil.js'
@Component({})
export default class PublicAddress extends Vue {
  height: any = 0
  mounted() {
    console.log(getHeight())
    this.height = getHeight() + 'px'
  }
}
</script>
<style lang="less" scoped>
@import url('./ScrollView.less');
</style>
