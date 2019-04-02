<template lang="pug">
  div(class="search-result-component")
    Public-address
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import PublicAddress from '@/components/publicAddress/PublicAddress.vue'
@Component({
  name: "SearchResult",
  components: {
    PublicAddress
  }
})
export default class SearchResult extends Vue {

}
</script>

<style lang="less">
.search-result-component {
  padding: 0 20px;
}
</style>

