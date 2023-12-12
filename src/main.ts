import { createApp } from 'vue';

import router from './router';
import pinia from '@/stores/index';
import '@/assets/css/index.scss';

/* 针对 ELMessage 和 ELLoading 来单独引入样式 */
// import 'element-plus/theme-chalk/el-message-box.css';
// import 'element-plus/theme-chalk/el-loading.css';

import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
