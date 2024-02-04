import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'https://vortex.korabli.su/api/graphql/glossary/',
    // uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
})


import { createApolloProvider } from '@vue/apollo-option'

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})


createApp(App)
    .use(apolloProvider)
    .mount('#app')
