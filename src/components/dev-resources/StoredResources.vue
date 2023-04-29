<template>
  <ul>
    <dev-resources
      v-for="resource in resources"
      v-bind:key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></dev-resources>
  </ul>
</template>

<script>
  import DevResources from './DevResources.vue';

  export default {
    props: ['resources'],
    components: {
      DevResources,
    },
  };
</script>
