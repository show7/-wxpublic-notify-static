import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const home: AsyncComponent = (): any => import('@/pages/home.vue')
const personal: AsyncComponent = (): any => import('@/pages/personal.vue')
// import main from '@/views/main.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home',
    component: home
  },
  {
    name:'home',
    path:'/home',
    component:home
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal
  },
  // {
  //   path: '*',
  //   component: pageNotFound
  // }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
