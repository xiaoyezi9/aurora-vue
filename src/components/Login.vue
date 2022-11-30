<!--
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-15 22:20:09
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-30 18:30:38
 * @FilePath: \Aurora\src\components\Login.vue
 * @Description: 
-->
<template>
    <div class="login-register">
        <div class="contain">
            <div class="big-box" :class="{ active: store.isLogin }">
                <div class="big-contain" key="bigContainLogin" v-if="store.isLogin">
                    <div class="btitle">账户登录</div>
                    <div class="bform">
                        <input type="text" placeholder="用户名" v-model="form.name">
                        <input type="password" placeholder="密码" v-model="form.password">
                    </div>
                    <button class="bbutton" @click="login">登录</button>
                </div>
                <div class="big-contain" key="bigContainRegister" v-else>
                    <div class="btitle">创建账户</div>
                    <div class="bform">
                        <input type="text" placeholder="用户名" v-model="form.name">
                        <span class="errTips" v-if="existed">* 用户名已经存在！ *</span>
                         <n-space>
                            <n-radio :checked="checkedValue === 'male'" value="male"
                                name="basic-demo" @change="handleChange" size="large" style="font-size: 20px; font-family:'Montserrat-Black';">
                               男生
                            </n-radio>
                            <n-radio :checked="checkedValue === 'female'" value="female" name="basic-demo" style="font-size: 20px;font-family:'Montserrat-Black';"
                                @change="handleChange" size="large">
                                女生
                            </n-radio>
                        </n-space>
                        <input type="password" placeholder="密码" v-model="form.password">
                    </div>
                    <button class="bbutton" @click="register">注册</button>
                </div>
            </div>
<!-- 切换登录注册 -->
            <div class="small-box" :class="{ active: store.isLogin }">
                <div class="small-contain" key="smallContainRegister" v-if="store.isLogin">
                    <div class="stitle">你好，朋友!</div>
                    <p class="scontent">开始注册，和我们一起旅行</p>
                    <button class="sbutton" @click="changeType">注册</button>
                </div>
                <div class="small-contain" key="smallContainLogin" v-else>
                    <div class="stitle">欢迎回来!</div>
                    <p class="scontent">与我们保持联系，请登录你的账户</p>
                    <button class="sbutton" @click="changeType">登录</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup >

import { reactive, ref } from 'vue';
import { reqRegister, reqLogin } from "../api/index"
import { useRouter } from 'vue-router'
import { useCommonStore } from '../store/common'
let existed = ref(false)
const router = useRouter()
const store = useCommonStore()
const form = reactive({
    name: '',
    password: ''
})
const checkedValue=ref(null)
const handleChange=(e)=> {
        checkedValue.value = e.target.value;
        // console.log(checkedValue.value);
      }
const changeType = () => {
    store.changeBtn()
    form.name = ''
    form.password = ''
}
const login = async () => {
    if (form.name != "" && form.password != "") {
        //发送请求
        await reqLogin(form).then(res => {
            if (res.code === 200) {
                sessionStorage.setItem("token", res.token)
                router.push('/home')
            }

        }).catch(err => {
            console.log(err);
        })
    } else {
        alert("填写不能为空！");
    }
}
//注册
async function register() {
    if (form.name != "" && form.password != "") {
        form.sex=checkedValue.value
        await reqRegister(form).then(res => {
            if (res.code == 200) {
                login()
            }
        }).catch(err => {
            console.log(err);
        })
    } else {
        alert("填写不能为空！");
    }
}


</script>

<script>
export default {
    name: 'Login'
}
</script>
<style lang='less' scoped>
.login-register {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    // background-color: rgb(251, 251, 251);
    background-image: url(@/assets/img/bg1.png);
    ;
    background-size: 100% 100%;
}

.contain {
    width: 60%;
    height: 60%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.4);
    // background-color: #fff;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    box-shadow: 0 0 3px #f0f0f0,
        0 0 6px #f0f0f0;
}

.big-box {
    width: 70%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 30%;
    transform: translateX(0%);
    transition: all 1s;
}

.big-contain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btitle {
    font-size: 2em;
    font-weight: bold;
    // color: (57, 167, 176);
    color: #FFFFFF;
}

.bform {
    width: 100%;
    height: 40%;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.bform .errTips {
    display: block;
    width: 50%;
    text-align: left;
    color: red;
    font-size: 1em;
    margin-left: 1em;
}

.bform input {
    width: 50%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding-left: 2em;
    background-color: #f0f0f0;
}

.bbutton {
    width: 17%;
    height: 50px;
    border-radius: 24px;
    border: none;
    outline: none;
    // background-color:#b76464 ;
    background: linear-gradient(135deg, rgb(255, 110, 132), rgb(255, 110, 205));
    color: #FFFFFF;
    font-size: 1.3em;
    cursor: pointer;
}

.small-box {
    width: 30%;
    height: 100%;
    background: linear-gradient(135deg, rgb(226, 142, 138), rgb(236, 236, 236));
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0%);
    transition: all 1s;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
}

.small-contain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.stitle {
    font-size: 2em;
    font-weight: bold;
    color: #FFFFFF;
}

.scontent {
    font-size: 1.4em;
    color: #ffffff;
    text-align: center;
    padding: 2em 4em;
    line-height: 1.7em;
}

.sbutton {
    width: 40%;
    height: 50px;
    border-radius: 24px;
    border: 1px solid #fff;
    outline: none;
    background-color: transparent;
    color: #ffffff;
    font-size: 1.5em;
    cursor: pointer;
}

.big-box.active {
    left: 0;
    transition: all 0.5s;
}

.small-box.active {
    left: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    transform: translateX(-100%);
    transition: all 1s;
}
</style>