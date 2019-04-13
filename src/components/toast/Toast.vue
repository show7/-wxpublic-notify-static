<template lang="pug">
  div(class="toast-component-wrap")
    Popup
      div(class="toast-content")
        div(class="toast-title")
          img(src="https://static.iqycamp.com/Bitmap-iw8yjka0.png"
               alt="")
          span {{title}}
        div
          slot(name="content")
        div(class="toast-btn-group")
          div(v-for="(btn,i) in btnGroup"
               :style="{color:btn.color}"
               @click="btn.click"
               :key="i") {{btn.name}}
  </div>
</template>
<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component';
import Popup from '@/components/popup/Popup.vue'
import { constants } from 'fs';

@Component({
  name: 'ToastPoup',
  props: {
    title: {
      type: String,
      default: () => '小新提示'
    },
    cancel: {
      type: Function,
      default: () => { }
    },
    btnGroup: {
      type: Array,
      default: () => [{
        name: '再想想',
        color: '#FBD206',
        click: () => {
          console.log('再想想')
        }
      }, {
        name: '确认取消',
        color: '#999999',
        click: () => {
          console.log('确认取消')
        }
      }]
    }

  },
  components: {
    Popup
  }
})
export default class ToastPoup extends Vue {

}
</script>
<style lang="less">
@import '../../style/common.less';
.toast-component-wrap {
  .toast-content {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    width: 263px;
    margin: auto;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding: 17px 30px 14px 30px;
    box-sizing: border-box;
    .toast-title {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: @font-weight4;
      color: @color-public-title;
      font-size: @font-public-title;
      margin-bottom: 7px;
      img {
        width: 40px;
        height: 39px;
        margin-right: 10px;
      }
    }
    .toast-btn-group {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 17px;
      font-size: @font-wight6;
      font-weight: @font-wight6;
      color: @color-content;
      div {
        cursor: pointer;
      }
    }
  }
}
</style>


