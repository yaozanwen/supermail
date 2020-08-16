import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import ('../views/home/Home.vue'),
    meta:{
      title:"主页"
    }
  },
  {
    path: "/category",
    component: () => import ('../views/category/Category.vue'),
    meta:{
      title:"分类"
    }
  },
  {
    path: "/cart",
    component: () => import ('../views/cart/Cart.vue'),
    meta:{
      title:"购物车"
    }
  },
  {
    path: "/profile",
    component: () => import ('../views/profile/Profile.vue'),
    meta:{
      title:"我的"
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
