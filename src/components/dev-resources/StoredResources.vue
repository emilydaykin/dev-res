<template>
  <ul class="w-9/12 mx-auto max-w-3xl">
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
    inject: ['resources'], // inject them instead of passing them as props
    components: {
      DevResources,
    },
  };
</script>
