<!-- used for showing error messages -->
<template>
  <!-- "teleport to body" brings this to the end of the body (so that it's not randomly jumbled in the DOM) -->
  <teleport to="body">
    <div class="bg-zinc-800/[.8] h-full w-full fixed top-0" @click="$emit('close')"></div>
    <dialog open class="border-2 rounded-lg p-16 fixed top-1/4 mx-12 sm:mx-auto font-sans">
      <header>
        <slot name="header">
          <h2 class="text-lg uppercase text-red-600 font-bold text-center mb-4">{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu class='flex justify-center mt-6'>
        <slot name="actions">
          <base-button @click="$emit('close')" class="border-2 border-slate-400 hover:bg-slate-300">Close</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    }
  },
  emits: ['close']
}
</script>

<style>
  dialog > * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
</style>