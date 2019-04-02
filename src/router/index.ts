import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'
// import main from '@/views/main.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    name:'Home',
    path:'/home',
    component:()=>import('@/pages/home.vue'),
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
