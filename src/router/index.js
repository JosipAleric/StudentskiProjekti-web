import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/students',
    name: 'students',
    component: () => import('../views/StudentsView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/RegisterView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
