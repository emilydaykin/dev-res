<!-- main entry point of our resources area -->
<template>
  
  <div class="flex items-center sm:justify-between flex-col sm:flex-row sm:w-96 mx-auto mb-8">
    <!-- <base-button @click="setSelectedTab('stored-resources')" :additionalStyling="storedResButtonMode">Stored Resources</base-button> -->
    <!-- <base-button @click="setSelectedTab('add-resource')" :additionalStyling="addResButtonMode">Add Resource</base-button> -->
    <router-link to="/stored-resources">
      <base-button :additionalStyling="storedResButtonMode">
        Stored Resources
      </base-button>
    </router-link>
    <router-link to="/add-resource">
      <base-button :additionalStyling="addResButtonMode">
        Add Resource
      </base-button>
    </router-link>
  </div>
  
  <!-- this (keep-alive) caches the component, so that the data won't be lost! -->
  <router-view v-slot="{ Component }">
    <keep-alive exclude="AddResource"> 
        <component :is="Component" />
        </keep-alive>
      </router-view>
</template>

<script>
import AddResource from "./AddResource.vue";
// import StoredResources from "./StoredResources.vue";

export default {
  components: {
    AddResource, // added here to exclude it from the keep-alive
    // StoredResources
  },
  data() {
    return {
      // selectedTab: 'stored-resources',
      buttonStyling: 'w-fit font-bold py-3 px-6 border-4 border-violet-100 hover:bg-violet-100 mb-3 last-of-type:mb-0 sm:mb-0',
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
      // console.log('this.$router.currentRoute.value.path:---', this.$router.currentRoute.value.path);
      return this.$router.currentRoute.value.path === '/stored-resources' ? this.buttonStyling + ' bg-violet-100 text-violet-500' : this.buttonStyling + ' text-violet-400';
    },
    addResButtonMode() {
      return this.$router.currentRoute.value.path === '/add-resource' ? this.buttonStyling + ' bg-violet-100 text-violet-500' : this.buttonStyling + ' text-violet-400';
    }
  },
  methods: {
    // setSelectedTab(tab) {
    //   this.selectedTab = tab;
    // },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      }
      // unshift to add the new resource to the beginning of the array
      this.storedResources.unshift(newResource);
      this.$router.push('/stored-resources');
      // this.selectedTab = 'stored-resources';
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