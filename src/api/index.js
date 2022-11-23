/*
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-22 23:58:55
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-23 00:05:39
 * @FilePath: \Aurora\src\api\index.js
 * @Description: 
 */
import request from "./request";
//注册接口
export const reqRegister=(data) => {
    return  request({
     url:'/users',
     method:'post',
     data
    })
 }
 