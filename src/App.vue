<template>
  <div class="border">
    <h1>Hello World</h1>
    <ul>
      <dev-resources 
        v-for="resource in storedResources" 
        v-bind:key="resource.id" 
        :title="resource.title" 
        :description="resource.description"
        :link="resource.link"
      ></dev-resources>
    </ul>
  </div>
  
</template>

<script>
import DevResources from './components/dev-resources/DevResources.vue'

export default {
  name: 'App',
  components: {
    DevResources
  },
  data() {
    return {
      storedResources: [
        {id: 1, title: 'VueJS', description: 'The official guide to Vue.js', link: 'https://vuejs.org'},
        {id: 2, title: 'Tailwind', description: 'The official guide to Tailwind CSS', link: 'https://tailwindcss.com/'},
        {id: 3, title: 'Nuxt', description: 'The official guide to Nuxt.js', link: 'https://nuxtjs.org/'},
        {id: 4, title: 'ReactJS', description: 'The official guide to ReactJS', link: 'https://react.dev/'},
        {id: 5, title: 'Git', description: 'The official guide to Git', link: 'https://git-scm.com/'},
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
  color: #2c3e50;
}
</style>
