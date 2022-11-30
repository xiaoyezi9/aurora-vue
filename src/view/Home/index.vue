<!--
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-27 17:10:54
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-11-30 20:06:49
 * @FilePath: \Aurora\src\view\Home\index.vue
 * @Description: 主页
-->
<template>
    <div class="flex">
        <div class="container">
            <div class="info">
                <div class="avatar">
                    <img src="@/assets/img/avatar.png" alt="">
                    <span class="username">爱吃香菜的猹</span>
                </div>
                <n-space class="func">
                    <n-button strong secondary circle size="large" color="#ffffff" style="background-color: #702123;">
                        <template #icon>
                            <n-icon>
                                <Grid />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle size="large" color="#ffffff" style="background-color: #702123;">
                        <template #icon>
                            <n-icon>
                                <Person />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle size="large" color="#ffffff" style="background-color: #702123;">
                        <template #icon>
                            <n-icon>
                                <Search />
                            </n-icon>
                        </template>
                    </n-button>
                </n-space>
            </div>
            <div class="msglist">
                <!-- 标签页 -->
                <n-tabs class="card-tabs" default-value="match" size="large" animated style="margin: 0 40px"
                    pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box; " tab-style="font-size:22px; color:black; font-family:'Montserrat-Black';
                    font-weight: 900;">
                    <n-tab-pane name="match" tab="配对">
                        <div class="defaultmsg">
                            <svg width="157" height="230">
                                <linearGradient id="my-cool-gradient" x2="1" y2="1">`
                                    <stop offset="0%" stop-color="#fd316c" />
                                    <stop offset="100%" stop-color="#ff5c3b" />
                                </linearGradient>
                                <rect x="0" y="0" width="147" height="210" rx="10" fill="url(#my-cool-gradient)"></rect>
                            </svg>
                            <div class="about2">
                                <h2>开始配对</h2>
                                <div class="title">当你给别人点赞后，成功配对的对象就会在这里出现。
                                </div>
                                
                            </div>

                        </div>
                    </n-tab-pane>
                    <n-tab-pane name="msg" tab="消息">
                        <div class="defaultmsg">
                            <svg width="187" height="186" class="svg1" viewBox=" 0 0  160 150">
                                <path
                                    d="M136.502 59.666c7.274 0 14.2 1.284 20.498 3.585C156.08 28.194 121.312 0 78.52 0 35.156 0 0 28.952 0 64.67c0 23.096 14.714 43.355 36.833 54.793v23.427c0 2.71 2.05 3.873 4.557 2.584l31.714-16.304c1.135.062 2.282.079 3.425.106.17.064.17.064 1.992.064.974 0 1.948-.03 2.909-.069 3.71-.116 7.325-.5 10.887-1.017-5.121-6.913-8.128-15.08-8.128-23.85 0-24.669 23.469-44.738 52.313-44.738z"
                                    fill="#ebedef">
                                </path>
                            </svg>
                            <svg class="svg2" focusable="false" aria-hidden="true" role="presentation"
                                viewBox="0 0 79 72" width="139px" height="100px">
                                <path
                                    d="M137.5 72C115.685 72 98 86.459 98 104.292c0 17.835 17.685 32.291 39.5 32.291h.918c.013 0 .028-.024.041-.03.59-.014 1.183-.021 1.765-.056l4.573 2.334h.003l9.098 4.645c2.516 1.284 4.575.126 4.575-2.574v-9.251C169.6 125.94 177 115.825 177 104.29 177 86.46 159.315 72 137.5 72"
                                    transform="translate(-98 -72)" fill="#fd316c"></path>
                            </svg>
                            <div class="about">
                                <h2>打招呼</h2>
                                <div class="title">想要开始一段对话？当你与他人配对时，你可以在“配对对象”下向他们发送信息</div>
                            </div>

                        </div>
                    </n-tab-pane>
                </n-tabs>
            </div>

        </div>

        <div class="show"></div>
    </div>

</template>

<script setup >
import { Grid, Person, Search } from "@vicons/ionicons5";
</script>

<script>
export default {
    name: 'Home'
}
</script>
<style lang='less' scoped>
* {
    padding: 0;
    // border: 1px solid black;

}

h2 {
    font-family: 'Montserrat-Black';
    font-weight: 900;
    color: #21262E;
}


.flex {
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #f0f2f4;

    .container {
        width: 500px;
        background: linear-gradient(to right, #fd316c, #ff5c3b);
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
            rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

        .info {
            position: relative;
            width: 220px;
            height: 61px;
            background-color: pink;
            border-radius: 780px;
            margin: 31px 10px 31px 0px;

            .avatar {
                width: 100%;
                // height: 20px;
                padding: 5px 0 0 0px;
                vertical-align: middle;

                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    vertical-align: middle;
                }

                .username {
                    font-family: 'Montserrat-Black';
                    font-weight: 900;
                    font-size: 22px;
                    color: #fff;
                    padding-left: 10px;
                    vertical-align: middle;
                }
            }

            .func {
                position: absolute;
                top: 10px;
                right: -200px;

                .n-button {
                    margin-left: 15px;
                }

            }

        }

        .msglist {
            width: 100%;
            height: 100%;
            background-color: white;

            .card-tabs {
                --n-bar-color: #fd316c !important;

                .defaultmsg {
                    margin-top: 130px;
                    width: 92%;
                    height: 375px;
                    position: relative;

                    // background-color: pink;
                    .svg1 {
                        position: absolute;
                        left: 100px;
                    }

                    .svg2 {
                        position: absolute;
                        left: 200px;
                        top: 85px;
                    }

                    .about {
                        position: absolute;
                        width: 270px;
                        height: 63px;
                        top: 190px;
                        left: 70px;

                        .title {
                            padding-left: 25px;
                            padding-right: 25px;
                            color: #505965;
                            font-weight: 700;
                            font-size: 22px;
                        }

                    }

                    .about2 {
                        position: absolute;
                        width: 290px;
                        height: 103px;
                        top: 230px;
                        left: 70px;

                        .title {
                            padding-left: 20px;
                            padding-right: 15px;
                            color: #505965;
                            font-weight: 700;
                            font-size: 22px;
                        }

                    }
                }

            }

        }
    }

    .show {

        flex: 1;
    }
}
</style>