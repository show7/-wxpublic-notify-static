import axios from 'axios'



export const getData = (params?: any) => axios.get('/home');
// export const getSearch = (params: Params) => ajaxGet('/api/webwechat/search')