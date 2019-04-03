<template>
  <div class="popup-component-wrap">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  name: 'Popup'
})
export default class Popup extends Vue {

}
</script>

<style lang="less">
.popup-component-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.5);
  z-index: 99;
}
</style>

