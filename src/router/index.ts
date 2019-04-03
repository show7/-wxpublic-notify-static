import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

// const home: AsyncComponent = (): any => import('@/pages/home/home.vue')
const myorder: AsyncComponent = (): any => import('@/pages/myorder/Myorder.vue')
const ArticleList: AsyncComponent = (): any => import('@/pages/articleList/ArticleList.vue')
const PublicList: AsyncComponent = (): any => import('@/pages/publicList/PublicList.vue')

// import main from '@/views/main.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    name:'Home',
    path:'/update',
    component:()=>import('@/pages/Home.vue'),
    children:[{
      name: 'Default',
      path: 'default',
      component: () => import('@/pages/home/Default.vue')
    },
    {
      name: 'SearchResult',
      path: 'searchResult',
      component: () => import('@/pages/home/SearchResult.vue')
    }]
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
  {
    path: '/update/publicList',
    name: 'publicList',
    component: PublicList
  },
  {
    path: '*',
    redirect: '/home/Default',
    component: ()=>import('@/pages/home/Default.vue')
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
