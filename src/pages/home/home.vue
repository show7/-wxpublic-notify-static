<template lang="pug">
  .home-component-wrap
    search
    Button
    div(
      class='' 
      v-for='(item,i) in activities' :key='i')
      .title {{item.title}}

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import search from '@/components/search/search.vue'
import { State, Action } from 'vuex-class'

@Component({
  components: {
    search
  }
})
export default class Home extends Vue {
  @Action getHome: (params: any) => void
  Alert(params: number) {
    alert(params == 1)
  }
  private mounted() {
    // this.Alert(1)
  }
  @State activities: StoreState.activity[]
}
</script>

<style lang="less" scoped>
.home-component-wrap {
  width: ;
  height: 20px;
  background: red;
}
</style>
