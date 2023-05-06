<template>
  <div>
    <the-header title="My Library"></the-header>
    <stored-resources :resources="storedResources"></stored-resources>
  </div>
</template>

<script>
  import StoredResources from './components/dev-resources/StoredResources.vue';
  import TheHeader from './components/layouts/TheHeader.vue';

  export default {
    name: 'App',
    components: {
      StoredResources,
      TheHeader,
    },
    data() {
      return {
        storedResources: [
          {
            id: 1,
            title: 'VueJS',
            description: 'The official guide to Vue.js',
            link: 'https://vuejs.org',
          },
          {
            id: 2,
            title: 'Tailwind',
            description: 'The official guide to Tailwind CSS',
            link: 'https://tailwindcss.com/',
          },
          {
            id: 3,
            title: 'Nuxt',
            description: 'The official guide to Nuxt.js',
            link: 'https://nuxtjs.org/',
          },
          {
            id: 4,
            title: 'ReactJS',
            description: 'The official guide to ReactJS',
            link: 'https://react.dev/',
          },
          {
            id: 5,
            title: 'Git',
            description: 'The official guide to Git',
            link: 'https://git-scm.com/',
          },
        ],
      };
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
