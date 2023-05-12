<!-- main entry point of our resources area -->
<template>
  <div class="flex justify-between w-96 mx-auto mb-8">
    <base-button @click="setSelectedTab('stored-resources')" :additionalStyling="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :additionalStyling="addResButtonMode">Add Resource</base-button>
  </div>
  <component :is="selectedTab"></component>
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
      buttonStyling: 'font-bold py-3 px-6 border-4 border-violet-100 text-violet-500 hover:bg-violet-100',
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
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? this.buttonStyling + ' bg-violet-100' : this.buttonStyling;
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? this.buttonStyling + ' bg-violet-100' : this.buttonStyling;
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
      console.log(tab)
    },
  }
}
</script>