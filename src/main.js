// @ts-nocheck
/*
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-14 19:40:33
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-28 23:33:44
 * @FilePath: \Aurora\src\main.js
 * @Description: 
 */
import { createApp } from 'vue'
import store from './store'
import router from './router/index'
import App from './App.vue'
import '@/assets/css/common.less'
import '@/assets/font/font.css'
import Login from './components/Login.vue'
const app=createApp(App)
app.use(store)
app.use(router)
app.component('Login',Login )
app.mount('#app')