import Vue from 'vue'

const validateStatus = (status:number)=>status >= 200 && status < 300 || status == 700


export const apiGet = (url:string, params?:any) => Vue.axios.get(url,{params, validateStatus})

export const apiPost = (url:string, params?:any) => Vue.axios.post(url,{...params, validateStatus})