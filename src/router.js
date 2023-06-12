import * as VueRouter from 'vue-router'

const Home = () => import('./views/Home/index.vue')
const Login = () => import('./views/Login.vue')
const Signup = () => import('./views/Signup.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
