<template>
  <li>
    <base-card class="flex flex-col sm:flex-row sm:justify-between">
      <div class="border-6 border-black">
        <header>
          <h3 class="font-bold mb-2">{{ title }}</h3>
        </header>
        <p>{{ description }}</p>
        <nav class="mt-2">
          <a :href="link" target="_blank" class="text-sky-300 font-bold italic">View link</a>
        </nav>
      </div>
      <base-button additionalStyling="border-red-100 text-red-500 hover:bg-red-100 mt-3 sm:mt-0 self-end sm:self-start" @click="deleteResource(id)">Delete</base-button>
    </base-card>
  </li>
</template>

<script>
  export default {
    props: ['id', 'title', 'description', 'link'],
    inject: ['deleteResource']
  };
</script>
