<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
}
</style>
