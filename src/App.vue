<!--
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-14 19:40:33
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-16 10:35:15
 * @FilePath: \Aurora\src\App.vue
 * @Description: 
-->

<script setup>
</script>

<template>
    <div id="app">    
  <n-message-provider>
        <router-view></router-view>    
  </n-message-provider>
    </div>
</template>

<style scoped>
#app{
    height: 100%;
}
</style>
