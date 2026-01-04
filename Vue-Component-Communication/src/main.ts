import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routers'

// 创建应用
const app = createApp(App);

// 常见Pinia
const pinia = createPinia();

// 安装插件
app.use(pinia);
// 安装路由器
app.use(router);
// 挂载应用
app.mount('#app')