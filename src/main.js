import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from "axios";

// 跨域请求
axios.defaults.baseURL = 'http://127.0.0.1:8081'
createApp(App).use(Antd).mount('#app')
