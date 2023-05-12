<template>
  <button :type="type" class="border py-2 px-4 rounded-md border-red-100 text-red-500 hover:bg-red-100 transition" :class="additionalStyling">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'additionalStyling']
}
</script>