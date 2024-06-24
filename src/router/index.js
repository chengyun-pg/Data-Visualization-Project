import { createRouter, createWebHashHistory } from 'vue-router'
import qvZhou from './qv-zhou'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...qvZhou]
})

router.beforeEach((guard) => {
  document.title = guard.meta?.title || ''
})

export default router
