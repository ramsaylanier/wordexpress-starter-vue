import Vue from 'vue'
import App from './App.vue'
import createStore from './vuex/store'
import createRouter from './router.js'
import { sync } from 'vuex-router-sync'
import {createApolloClient} from './apollo'
import VueApollo from 'vue-apollo'
import VueResource from 'vue-resource'

Vue.use(VueApollo)
Vue.use(VueResource)

export function createApp (context) {
  const apolloClient = createApolloClient(context.ssr)
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  const app = new Vue({
    el: '#app',
    store,
    router,
    apolloProvider,
    ...App,
    render: h => h(App)
  })
  return { app, router, store, apolloProvider }
}
