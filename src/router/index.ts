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
    path:'/',
    component:()=>import('@/pages/Home.vue'),
    children:[{
      name: 'default',
      path: '',
      component: () => import('@/pages/home/Default.vue')
    },
    {
      name: 'searchResult',
      path: 'searchResult',
      component: () => import('@/pages/home/SearchResult.vue')
    }]
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: myorder
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticleList
  },
  {
    path: '/publicList',
    name: 'publicList',
    component: PublicList
  },
  // {
  //   path: '*',
  //   redirect: '/',
  //   component: ()=>import('@/pages/home/Default.vue')
  // }
]

const router: Router = new Router({
  mode: 'history',
  base: '/wx_public',
  routes
})

export default router
