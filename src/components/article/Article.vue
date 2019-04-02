<template lang="pug">
  div
      div(class='articleTit') 阿萨德与我阿萨德与我阿萨德与时代与阿萨德与我阿萨德与我阿萨德与时代与阿萨德与我阿萨德与我阿萨德与时代与
      div(class='articleContent')
        div(class='contentLeft')
          img(src='' class='articleUserImg')
          div(class='channelName') 圈外同学
        div(class='contentRight') 2019.01.07 12:30
</template>

<script lang="ts">
import Vue from 'vue'
import { State } from 'vuex-class'
export default class Article extends Vue {
  private updatePulic = 0
}
</script>
<style lang="less" scoped>
.cellTit {
  font-size: 16px;
  font-weight: bold;
}
.cellTit .findMore {
  font-size: 14px;
  font-weight: normal;
}
.articleContent {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
}
.contentLeft {
  display: flex;
}
.articleUserImg {
  width: 20px;
}
.channelName {
  font-size: 14px;
  margin-left: 5px;
}
.contentRight {
  font-size: 12px;
  color: rgba(193, 192, 201, 1);
}
.articleTit {
  color: rgba(80, 80, 90, 1);
  margin: 10px 0;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1.5;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
}
</style>
