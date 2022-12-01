<!--
 * @Author: 爱吃香菜的猹
 * @Date: 2022-11-30 20:33:03
 * @LastEditors: 爱吃香菜的猹
 * @LastEditTime: 2022-12-01 14:10:01
 * @FilePath: \Aurora\src\view\Register\index.vue
 * @Description: 
-->
<template>
    <h3>创建账户</h3>
    <div class="flex">
        <div class="left">
            <div class="name">
                <span>名字</span>
                <n-input type="text" size="large" :style="{ width: '340px' }" placeholder="名字"
                    style="background-color: #f0f2f4">
                    <template #prefix>
                        <n-icon :component="Person" />
                    </template>
                </n-input>
            </div>
            <div class="pwd">
                <span>密码</span>
                <n-input type="password" size="large" show-password-on="mousedown" placeholder="密码"
                    :style="{ width: '300px' }" style="background-color: #f0f2f4">
                    <template #prefix>
                        <n-icon :component="LockClosed" />
                    </template>
                </n-input>
            </div>
            <div class="birth">
                <span>生日</span>
                <n-date-picker v-model:value="datetime" type="date" size="large" :style="{ width: '300px' }" />
            </div>
            <div class="sex">
                <span>性别</span>
                <button name="sex" class="bt" @click="getSexVal('male')">男</button>
                <button name="sex" class="bt" @click="getSexVal('female')">女</button>
            </div>
            <div class="hobby">
                <span>兴趣</span>
                <n-button strong @click="showHobbyModal = true"> + 添加兴趣 </n-button>
            </div>
        </div>
        <div class="right">
            <span>个人资料照片</span>
            <n-upload action="http:localhost:8000/upload" list-type="image-card" @preview="handlePreview" />
            <n-modal preset="card" style="width: 400px">
                <img style="width: 100%" />
            </n-modal>
        </div>
    </div>
    <!-- 兴趣的模态框 -->
    <n-modal v-model:show="showHobbyModal" :mask-closable="false"   positive-text="确认"
        @positive-click="confirm" ></n-modal>
</template>

<script setup>
import { Person, LockClosed } from "@vicons/ionicons5";
import { ref } from "vue";
const datetime = ref(null);
const showHobbyModal = ref(false);
const previewImageUrlRef = ref("");
function handlePreview(file) {
    const { url } = file;
    previewImageUrlRef.value = url;
    showModalRef.value = true;
}
const getSexVal = (type) => {
    console.log(type);
};
// 兴趣模态框相关操作
const confirm = () => {
    showHobbyModal.value = false;
}
</script>

<script>
export default {
    name: "",
};
</script>
<style lang="less" scoped>
h3 {
    margin-top: 60px;
}

h3,
span {
    font-family: "Montserrat-Black";
    font-weight: 800;
    font-style: italic;
}

span {
    font-weight: 700;
    font-style: normal;
}

.flex {
    width: 900px;
    margin: 0 auto;
    display: flex;

    .left {
        flex: 1;
        display: flex;
        flex-direction: column;

        .name,
        .pwd,
        .birth,
        .sex,
        .hobby {
            margin-top: 80px;
            position: relative;

            span {
                position: absolute;
                left: 54px;
                top: -28px;
                z-index: 999;
            }

            .n-input {
                margin-left: 40px;
            }
        }

        .pwd,
        .birth,
        .sex,
        .hobby {
            margin-top: 50px;
        }

        .pwd {
            .n-input {
                margin-left: 0;
            }
        }

        .birth {
            .n-date-picker {
                margin-left: 53px;
            }
        }

        .sex {
            display: flex;

            .bt {
                width: 68px;
                height: 40px;
                line-height: 36px;
                text-align: center;
                border: 1px solid #e0e0e6;
                background-color: #fff !important;
                border-radius: 4px;
                font-family: "Montserrat-Black";
                font-weight: 700;
                color: #505965;
                margin-left: 52px;
                outline: none;

                &:hover {
                    cursor: pointer;
                }

                &:focus {
                    color: #ff4458;
                    border-color: #ff4458;
                }
            }

            .bt+.bt {
                margin-left: 20px;
            }
        }

        .hobby .n-button {
            outline: none;
            margin-left: -206px;
        }
    }
}

.right {
    flex: 1;
    margin-left: 90px;
    margin-top: 50px;

    span {
        margin-left: -310px;
    }
}
</style>
