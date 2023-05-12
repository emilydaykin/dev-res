<template>
  <li>
    <base-card>
      <header class="flex items-center justify-between">
        <h3 class="font-bold">{{ title }}</h3>
        <base-button additionalStyling="border-red-100 text-red-500 hover:bg-red-100">Delete</base-button>
      </header>
      <p>{{ description }}</p>
      <nav class="mt-2">
        <a :href="link" target="_blank" class="text-sky-300 font-bold italic">View link</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
  export default {
    props: ['title', 'description', 'link'],
  };
</script>
