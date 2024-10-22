import { createApp } from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue"

import router from './router'
import 'ant-design-vue/dist/reset.css';
// import 'ant-design-vue/dist/antd.css'

createApp(App).use(router).use(Antd).mount('#app')


