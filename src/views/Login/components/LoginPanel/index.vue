<template>
    <div class="login-panel flex-center">
        <h1 class="title">后台管理系统</h1>
        <el-tabs
            stretch
            class="login-tabs"
            type="border-card"
            v-model="activeName"
            @tab-click="handleClick"
        >
            <el-tab-pane name="account">
                <template #label>
                    <el-icon><User /></el-icon>
                    <span style="padding-left: 10px">账号登录</span>
                </template>
                账号登录
            </el-tab-pane>
            <el-tab-pane nam="phone">
                <template #label>
                    <el-icon><Iphone /></el-icon>
                    <span style="padding-left: 10px">手机登录</span>
                </template>
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
import { TabsPaneContext } from 'element-plus';
import { Iphone, User } from '@element-plus/icons-vue';

const activeName = ref('account');
const isPersistent = ref(false);

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
};

const handleLogin = () => {};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
