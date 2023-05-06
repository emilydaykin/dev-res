<template>
  <li class="border-2 border-blue-100 mx-6 my-5 px-4 py-3 rounded-lg shadow-md">
    <base-card>
      <header class="flex items-center justify-between">
        <h3 class="font-bold">{{ title }}</h3>
        <button
          class="border py-2 px-4 rounded-md border-red-200 text-red-700 hover:bg-red-100 transition"
        >
          Delete
        </button>
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
