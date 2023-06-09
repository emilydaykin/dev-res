import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import './style.css';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import StoredResources from "./components/dev-resources/StoredResources.vue";
import AddResource from "./components/dev-resources/AddResource.vue";

const router = createRouter({
  history: createWebHistory(), // how to manage the routing history (use the browser's built in mechanism)
  routes: [
    { path: '/stored-resources', component: StoredResources },
    { path: '/add-resource', component: AddResource }
  ]
})

const app = createApp(App);

app.component('base-card', BaseCard); // register the base card HTML elemeet name
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.use(router);

app.mount('#app');
