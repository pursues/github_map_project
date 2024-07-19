import { createRouter, createWebHistory} from 'vue-router'

export const constantRoutes = [
  {
    path: '/',
    component: () => import('../views/home/index.vue'),
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('../views/home/index.vue'),
    name: 'home',
    meta: { title: '首页', icon: 'HomeFilled', affix: true }
  },
  {
    path: '/user',
    component: () => import('../views/user/user.vue'),
    name: 'user',
    meta: { title: '用户管理', icon: 'Tools', roles: ['admin'] }
  },
  {
    path: '/cultural_relics',
    component: () => import('../views/cultural/cultural_relics.vue'),
    name: 'cultural_relics',
    meta: { title: '文物管理', icon: 'Histogram', roles: ['admin', 'editor'] }
  },
  {
    path: '/camera',
    component: () => import('../views/camera/camera.vue'),
    name: 'camera',
    meta: { title: '摄像头管理', icon: 'Flag', roles: ['admin'] }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export const asyncRoutes = []

export const router = createRouter({
    history: createWebHistory(),
  routes: constantRoutes
})

export default router
