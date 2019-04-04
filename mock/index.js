import Mock from 'mockjs';
import home from './home';
import search from './search';
// home
Mock.mock ('/home', 'get', () => {
  return {
    code: 200,
    result: home,
  };
});
// 公号类型列表
Mock.mock ('/api/webwechat/search', 'get', () => {
  return {
    code: 200,
    result: search,
  };
});
