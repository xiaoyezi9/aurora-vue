/*
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-27 16:02:36
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-27 16:37:34
 * @FilePath: \Aurora\src\store\common.js
 * @Description: 
 */
import { defineStore } from 'pinia'
export const useCommonStore = defineStore('common', {
    state: () => {
        return {
            isLogin: true,

        }
    },
    actions: {
        changeBtn() {
            this.isLogin = !this.isLogin
        }
    },

})