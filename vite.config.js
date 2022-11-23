/*
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-14 19:40:33
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-15 10:44:52
 * @FilePath: \Aurora\vite.config.js
 * @Description: 
 */
import { defineConfig } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

//采用策略模式
const envResolver={
  "build":() =>({...viteBaseConfig,...viteProdConfig}),
  "serve":() =>({...viteBaseConfig,...viteDevConfig}),
    
}
export default defineConfig(({ command, mode, ssrBuild }) => {
  return envResolver[command]()
})