import axios from 'axios'



export default{
  getData: (params?: any) => axios.get('/home')
}