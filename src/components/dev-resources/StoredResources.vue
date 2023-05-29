<template>
  <ul class="w-9/12 mx-auto max-w-3xl">
    <dev-resource
      v-for="resource in resources"
      v-bind:key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></dev-resource>
  </ul>
</template>

<script>
  import DevResource from './DevResource.vue';

  export default {
    inject: ['resources'], // inject them instead of passing them as props
    components: {
      DevResource,
    },
  };
</script>
