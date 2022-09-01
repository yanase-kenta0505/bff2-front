import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    "@nuxt3-graphql/urql",
  ],
  urql: {
    url: 'http://localhost:4000/graphql/'
    // url: "https://rickandmortyapi.com/graphql/"
  }
})
