import axios from 'axios'

import Vue from 'vue'

export default{
  wxSdk: (url: string) => Vue.axios.get(url)
}