// @ts-nocheck
/*
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-15 13:24:30
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-16 10:32:08
 * @FilePath: \Aurora\src\router\routes.js
 * @Description: 
 */
export default [
    { path: '/login', component: () => import('@/components/Login.vue') },
    {path:'/index',component: () => import('@/view/Index/Index.vue') },
    { path: '/', redirect: '/index' },
]