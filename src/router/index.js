import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main2'
import CircularCountDownTimer from "vue-circular-count-down-timer";

Vue.use(Router)
Vue.use(CircularCountDownTimer)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
  }]
})
