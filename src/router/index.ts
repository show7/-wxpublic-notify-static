import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const home: AsyncComponent = (): any => import('@/pages/home/home.vue')
const personal: AsyncComponent = (): any => import('@/pages/personal.vue')
// import main from '@/views/main.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    name:'home',
    path:'/update/home',
    component:home
  },
  {
    path: '/update/personal',
    name: 'personal',
    component: personal
  },
  {
    path: '*',
    redirect: '/update/home',
    component: home
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
