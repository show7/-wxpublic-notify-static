import axios from 'axios'



export default{
  wxSdk: (url: string) => axios.get(url)
}