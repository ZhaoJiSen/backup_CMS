import { createApp } from 'vue';

import router from './router';
import pinia from '@/stores/index';
import '@/assets/css/index.scss';

import App from './App.vue';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
