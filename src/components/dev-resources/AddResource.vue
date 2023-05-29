<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>At least one input is invalid/empty.</p>
      <p>Please make sure you fill all the fields.</p>
    </template>
    <template v-slot:actions>
      <base-button @click="confirmError" class="border-2 border-slate-400 hover:bg-slate-300">
        Okay
      </base-button>
    </template>
  </base-dialog>
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
        <base-button type="submit" class="font-bold py-3 px-6 border-4 border-violet-200 hover:bg-violet-200 sm:w-3/5">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import BaseDialog from "../UI/BaseDialog.vue";

export default {
  components: { BaseDialog, BaseButton },
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredLink.trim() === '') {
        // alert('Please enter all required fields!');
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredLink)
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
}
</script>