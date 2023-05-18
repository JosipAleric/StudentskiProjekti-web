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
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsView.vue')
  },
  {
    path: '/students',
    name: 'students',
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentsView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
