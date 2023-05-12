<template>
  <button :type="type" class="border py-2 px-4 rounded-md transition" :class="additionalStyling">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'additionalStyling']
}
</script>