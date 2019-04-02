module.exports = [
  {
    name: 'Default',
    path: 'default',
    component: () => import('@/pages/home/Default.vue')
  },
  {
    name: 'SearchResult',
    path: 'searchResult',
    component: () => import('@/pages/home/SearchResult.vue')
  }
]
