<template>
  <div class="border">
    <h1>Hello World</h1>
    <ul >
      <li v-for="resource in storedResources" v-bind:key="resource.id">{{ resource.title }}</li>
    </ul>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      storedResources: [
        {id: 1, title: 'VueJS', description: 'The official guide to Vue.js', url: 'https://vuejs.org'},
        {id: 2, title: 'Tailwind', description: 'The official guide to Tailwind CSS', url: 'https://tailwindcss.com/'},
        {id: 3, title: 'Nuxt', description: 'The official guide to Nuxt.js', url: 'https://nuxtjs.org/'},
        {id: 4, title: 'ReactJS', description: 'The official guide to ReactJS', url: 'https://react.dev/'},
        {id: 5, title: 'Git', description: 'The official guide to Git', url: 'https://git-scm.com/'},
      ]
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
