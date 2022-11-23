/*
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-15 13:24:25
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-15 13:25:05
 * @FilePath: \Aurora\src\router\index.js
 * @Description: 
 */
import routes from './routes'
import { createRouter,createWebHistory } from 'vue-router'

//对外默认暴露一个VueRouter的实例
//在路由配置的时候，对外暴露一个Router类的一个实例
const router = createRouter({
    //配置路由
    history: createWebHistory(),
    routes,
});
// router.beforeEach((to,from,next) => {
//     if(to.path=='/login')  return  next()
//     //获取token
//     const tokenStr=sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
//     next()
// })
export default router;