<template lang="pug">
  .default
    van-button(type="info") 信息按钮
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from 'vuex-class'

@Component
export default class Button extends Vue { }
</script>

<style lang="less" scoped>
.default {
  width: 100px;
  height: 80px;
}
</style>
