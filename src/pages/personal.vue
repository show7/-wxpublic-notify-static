<template lang="pug">
  button(class='default')
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";
import button from '@/components/Button.vue';
@Component
export default class Home extends Vue {
  // @State activities: StoreState.activity[]
}
</script>

<style lang="less" scoped>
// .default{
//     width: 100px;
//     height:80px;
//     background-color: #f00
// }
</style>
