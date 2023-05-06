import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

app.component('base-card', BaseCard); // register the base card HTML elemeet name

app.mount('#app');
