<template lang="pug">
  div(class="search-result-component")
    Public-address(:inputSearchArr='inputSearch.ownerList' :showMore='showMore')
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import PublicAddress from '@/components/publicAddress/PublicAddress.vue'
import { State, Action } from 'vuex-class'
@Component({
  name: 'SearchResult',
  components: {
    PublicAddress
  }
})
export default class SearchResult extends Vue {
  @Action changeInputText: () => void
  @State inputSearch: Object
  showMore: boolean = true
}
</script>

<style lang="less">
.search-result-component {
  padding: 0 20px;
}
</style>

