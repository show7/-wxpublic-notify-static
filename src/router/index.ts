import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const home: AsyncComponent = (): any => import('@/pages/home/home.vue')
const myorder: AsyncComponent = (): any => import('@/pages/myorder/Myorder.vue')
const ArticleList: AsyncComponent = (): any => import('@/pages/articleList/ArticleList.vue')
// import main from '@/views/main.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    name:'home',
    path:'/update/home',
    component:home
  },
  {
    path: '/update/myorder',
    name: 'myorder',
    component: myorder
  },
  {
    path: '/update/articleList',
    name: 'articleList',
    component: ArticleList
  },
  // {
  //   path: '*',
  //   redirect: '/update/home',
  //   component: home
  // }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
