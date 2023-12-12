<template>
    <div class="login-panel flex-center">
        <h1 class="title">后台管理系统</h1>
        <el-tabs
            stretch
            type="border-card"
            class="login-tabs"
            v-model="activeName"
        >
            <el-tab-pane name="account">
                <template #label>
                    <el-icon><User /></el-icon>
                    <span style="padding-left: 10px">账号登录</span>
                </template>
                <pane-account ref="accountRef" />
            </el-tab-pane>
            <el-tab-pane name="phone">
                <template #label>
                    <el-icon><Iphone /></el-icon>
                    <span style="padding-left: 10px">手机登录</span>
                </template>
                手机登录
            </el-tab-pane>
        </el-tabs>
        <div class="control flex-align-center">
            <el-checkbox v-model="isPersistent" label="记住密码" size="large" />
            <el-link :underline="false">忘记密码</el-link>
        </div>
        <div class="login-btn">
            <el-button type="primary" round @click="handleLogin">
                立即登录
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Iphone, User } from '@element-plus/icons-vue';

import paneAccount from '../paneAccount/index.vue';

const isPersistent = ref(false);
const activeName = ref('account');
// 获取子组件类型，需要通过 typeof 获取其类型，然后使用 InstanceType 工具来获取其实例类型
const accountRef = ref<InstanceType<typeof paneAccount> | null>(null);

const handleLogin = () => {
    if (activeName.value === 'account') {
        // 获取子组件实例,并调用子组件暴露出的方法
        accountRef.value?.loginAction();
    }

    if (activeName.value === 'phone') {
        console.log('phone 登录');
    }
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
