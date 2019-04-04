import axios from 'axios'


const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700
export default{
  getToggleNight: (params?: any) => axios.get('/api/webwechat/quiet/mode',{...params,validateStatus})
}