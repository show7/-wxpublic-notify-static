import Mock from 'mockjs'
import home from './home'

// home
Mock.mock('/home', 'get', () => {
  return {
    code: 200,
    result: home
  }
})
