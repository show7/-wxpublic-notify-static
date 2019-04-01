<template lang="pug">
  .main-wrapper
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";
import home from "@/pages/home.vue";


@Component
export default class Main extends Vue {
  
}
</script>

<style>
.content-wrapper {
  padding-top: 50px;
}

.loading {
  background: url('//www.dpfile.com/app/app-m-module/static/6261145dd7c0f26bc0a26831e5cb358a.gif') center 30px no-repeat #fff;
  background-size: 90px;
  height: 300px;
}
</style>
