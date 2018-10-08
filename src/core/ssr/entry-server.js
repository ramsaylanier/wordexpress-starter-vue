import "isomorphic-fetch";
import { createApp } from "../app";

export default context => {
  return new Promise(async (resolve, reject) => {
    const { app, router, store, apolloProvider } = await createApp();

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ code: 404 });
      }

      Promise.all([
        // Async data
        ...matchedComponents.map(Component => {
          if (Component.asyncData) {
            return Component.asyncData({
              store,
              route: router.currentRoute
            });
          }
        }),
        // Apollo prefetch
        apolloProvider.prefetchAll(
          {
            route: router.currentRoute
          },
          matchedComponents
        )
      ]).then(() => {
        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // When we attach the state to the context, and the `template` option
        // is used for the renderer, the state will automatically be
        // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
        context.state = store.state;

        // Apollo
        context.apolloState = apolloProvider.getStates();
      });

      resolve(app);
    }, reject);
  });
};
