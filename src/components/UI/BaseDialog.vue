<!-- used for showing error messages -->
<template>
  <div class="bg-zinc-800/[.8] h-full w-full fixed top-0" @click="$emit('close')"></div>
  <dialog open class="border-2 rounded-lg p-16 fixed">
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