// @ts-nocheck
/*
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-14 19:40:33
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-16 10:36:33
 * @FilePath: \Aurora\src\main.js
 * @Description: 
 */
import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import '@/assets/css/common.less'
import '@/assets/font/font.css'
import Header from  './components/Header.vue'
import Login from './components/Login.vue'
const app=createApp(App)
app.use(router)
app.component('Header',Header )
app.component('Login',Login )
app.mount('#app')