import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import config from 'config'
import fetch from 'node-fetch'

// Install the vue plugin
Vue.use(VueApollo)

const {wordexpressServerHost} = config

// Create the apollo client
export function createApolloClient (ssr = false) {
  let initialState

  // If on the client, recover the injected state
  if (!ssr && typeof window !== 'undefined') {
    const state = window.__APOLLO_STATE__
    if (state) {
      // If you have multiple clients, use `state.<client_id>`
      initialState = state.defaultClient
    }
  }

  const link = new HttpLink({
    uri: `http://${wordexpressServerHost}/graphql`,
    fetch
  })

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
    ...(ssr ? {
      // Set this on the server to optimize queries when SSR
      ssrMode: true
    } : {
      // Inject the state on the client
      initialState,
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100
    })
  })

  return apolloClient
}
