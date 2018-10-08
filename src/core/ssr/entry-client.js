import { loadAsyncComponents } from "@akryum/vue-cli-plugin-ssr/client";
import { createApp } from "../app";

createApp({
  async beforeApp({ router }) {
    const components = await loadAsyncComponents({ router });
    console.log(components);
  },

  afterApp({ app, store }) {
    store.replaceState(window.__INITIAL_STATE__);
    app.$mount("#app");
  }
});
