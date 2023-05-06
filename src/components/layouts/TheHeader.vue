<template>
  <header class="p-8 mb-8 bg-blue-100">
    <h1 class="text-sky-800 font-bold text-3xl text-center">{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    props: ['title'],
  };
</script>
