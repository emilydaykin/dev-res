<!-- main entry point of our resources area -->
<template>
  <div class="flex justify-between w-96 mx-auto mb-8">
    <base-button @click="setSelectedTab('stored-resources')" :additionalStyling="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :additionalStyling="addResButtonMode">Add Resource</base-button>
  </div>
  <!-- this (keep-alive) caches the component, so that the data won't be lost! -->
  <keep-alive> 
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResource from "./AddResource.vue";
import StoredResources from "./StoredResources.vue";

export default {
  components: {
    AddResource,
    StoredResources
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      buttonStyling: 'font-bold py-3 px-6 border-4 border-violet-100 hover:bg-violet-100',
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
  provide() {
    return {
      resources: this.storedResources, // this provides the resources to all child components
      addResource: this.addResource, // not executing the function, just passing (adding) the reference (the _inject_ executes the function)
      deleteResource: this.removeResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? this.buttonStyling + ' bg-violet-100 text-violet-500' : this.buttonStyling + ' text-violet-400';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? this.buttonStyling + ' bg-violet-100 text-violet-500' : this.buttonStyling + ' text-violet-400';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      }
      // unshift to add the new resource to the beginning of the array
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      // ----- Default way (also git copilot way). WON'T WORK!!! ❗️ ----- //
      // ----- because of the way the inject works. this is actually ---- //
      // ----- a brand new array that _DOESN'T get passed/injected_ ----- //
      // this.storedResources = this.storedResources.filter(res => res.id !== resId); 
      // ---------------------------------------------------------------- //
      const resIndex = this.storedResources.findIndex(res => res.id === resId); // index of resource we wanna delete
      this.storedResources.splice(resIndex, 1); // remove just that 1 element at the index
    }
  }
}
</script>