import Vue from "vue";
import createStore from "./vuex/store";
import createRouter from "./router.js";
import { sync } from "vuex-router-sync";
import { createProvider } from "./vue-apollo.js";
import VueResource from "vue-resource";
import WordExpressPlugin from "./plugin";
import { WordExpressShortcodes, WordExpressHelpers } from "wordexpress-tools";

// THEME
import App from "@/App.vue";
import routes from "@/routes/index.js";

Vue.use(VueResource);
Vue.use(WordExpressPlugin, {
  shortcodes: WordExpressShortcodes,
  helpers: WordExpressHelpers
});

export function createApp(context) {
  const apolloProvider = createProvider({ ssr: context.ssr }).provide();
  const router = createRouter(routes);
  const store = createStore();
  sync(store, router);
  const app = new Vue({
    el: "#app",
    store,
    router,
    provide: apolloProvider,
    ...App,
    render: h => h(App)
  });
  return { app, router, store, apolloProvider };
}
