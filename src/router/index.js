import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Post from '../components/Post'
import Details from '../components/Details'
import Camera from '../components/Camera';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue')
  },
  {
    path: '/camera',
    name: 'camera',
    component: Camera,
    component: () => import(/* webpackChunkName: "home" */ '../components/Camera.vue')
  },
  {
    path: '/details/:id',
    name: 'details',
    component: Details,
    props: true,
    component: () => import(/* webpackChunkName: "home" */ '../components/Details.vue')
  },
  {
    path: '/post',
    name: 'post',
    props: true,
    component: Post
  },
]

const router = new VueRouter({
  routes
})

export default router
