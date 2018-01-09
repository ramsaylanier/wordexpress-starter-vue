import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter (routes) {
  return new Router({
    mode: 'history',
    routes
  })
}

export default createRouter
