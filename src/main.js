import { createApp} from 'vue';
import router from './routes/index.js';
import {
    Menu,
    List,
    Drawer,
    Button,
    message } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.mount('#app');

app.config.globalProperties.$message = message;
