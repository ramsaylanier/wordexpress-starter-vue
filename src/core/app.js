import Vue from 'vue'
import createStore from './vuex/store'
import createRouter from './router.js'
import { sync } from 'vuex-router-sync'
import {createApolloClient} from './apollo'
import VueApollo from 'vue-apollo'
import VueResource from 'vue-resource'
import WordExpressPlugin from './plugin'
import {WordExpressShortcodes, WordExpressHelpers} from 'wordexpress-tools'
import config from 'config'

Vue.use(VueApollo)
Vue.use(VueResource)
Vue.use(WordExpressPlugin, {
  shortcodes: WordExpressShortcodes,
  helpers: WordExpressHelpers
})

export function createApp (context) {
  const theme = config.theme
  const App = require(`../themes/${theme}/App.vue`).default
  const routes = require(`../themes/${theme}/routes/index.js`).default
  const apolloClient = createApolloClient(context.ssr)
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })
  const router = createRouter(routes)
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
