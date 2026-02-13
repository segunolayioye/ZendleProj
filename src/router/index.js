import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/foods', component: Foods }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

