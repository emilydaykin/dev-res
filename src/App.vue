<template>
  <div>
    <the-header title="My Library"></the-header>
    <the-resources></the-resources>
  </div>
</template>

<script>
  import TheHeader from './components/layouts/TheHeader.vue';
  import TheResources from './components/dev-resources/TheResources.vue';

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheResources
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
