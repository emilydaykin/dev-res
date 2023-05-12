<template>
  <div class="w-9/12 mx-auto">
    <base-card class="max-w-3xl mx-auto">
    <form class="p-12" @submit.prevent="submitData">
      <div class="flex flex-col mb-4">
        <label for="title" class="font-bold">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" class="border-2 border-blue-200 px-3 py-2 rounded" />
      </div>
      <div class="flex flex-col mb-4">
        <label for="description" class="font-bold">Description</label>
        <textarea id="description" name="description" rows="3" ref="descriptionInput" class="border-2 border-blue-200 px-3 py-2 rounded" />
      </div>
      <div class="flex flex-col mb-8">
        <label for="link" class="font-bold">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" class="border-2 border-blue-200 px-3 py-2 rounded" />
      </div>
      <div class="flex justify-center">
        <base-button type="submit" class="font-bold py-3 px-6 border-4 border-violet-200 hover:bg-violet-200 w-3/5">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</div>
</template>

<script>
export default {
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      console.log('enteredTitle ', enteredTitle)
      const enteredDescription = this.$refs.descriptionInput.value;
      console.log('enteredDescription ', enteredDescription)
      const enteredLink = this.$refs.linkInput.value;
      console.log('enteredLink ', enteredLink)

      this.addResource(enteredTitle, enteredDescription, enteredLink)
    }
  }
}
</script>