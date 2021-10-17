import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql'
    }),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState = {}) {
  // verificar se ja existe uma instancia para nao criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // recuperando dados do cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
