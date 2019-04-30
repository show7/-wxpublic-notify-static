import {apiGet} from './api'

export default{
  wxSdk: (url: string) => apiGet(url)
}