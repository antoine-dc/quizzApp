import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main2'
import Admin from '@/components/Admin'
import ManageTheme from '@/components/ManageTheme'
import ManagePlayer from '@/components/ManagePlayer'
import CircularCountDownTimer from "vue-circular-count-down-timer";

Vue.use(Router)
Vue.use(CircularCountDownTimer)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
  }, {
    path: '*' /*Si tu rencontres n'importe quoi */ ,
    redirect: '/' /* tu seras alors redirigé vers la page d'accueil */
  }, {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }, {
    path: '/theme/:id(\\d+)',
    name: 'theme',
    component: ManageTheme
  }, {
    path: '/player/:id(\\d+)',
    name: 'ManagePlayer',
    component: ManagePlayer
  }]
})
