import Mock from 'mockjs'
import home from './home'

// modules
Mock
  .mock('/home', 'get', () => {
    return {
      code: 200,
      result: modules
    }
  })


