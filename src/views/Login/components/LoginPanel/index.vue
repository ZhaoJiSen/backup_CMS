<template>
    <div class="login-panel flex-center">
        <h1 class="title">后台管理系统</h1>
        <el-tabs
            stretch
            type="border-card"
            class="login-tabs"
            v-model="activeName"
            @tab-click="handleClick"
        >
            <el-tab-pane name="account">
                <template #label>
                    <el-icon><User /></el-icon>
                    <span style="padding-left: 10px">账号登录</span>
                </template>
                <el-form
                    ref="ruleFormRef"
                    class="account-form"
                    status-icon
                    :rules="rules"
                    :model="ruleForm"
                >
                    <el-form-item label="账号" prop="account">
                        <el-input
                            clearable
                            autocomplete="off"
                            v-model="ruleForm.account"
                        />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input
                            clearable
                            type="password"
                            autocomplete="off"
                            v-model="ruleForm.password"
                        />
                    </el-form-item>
                </el-form>
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
import { reactive, ref } from 'vue';
import { TabsPaneContext } from 'element-plus';
import { Iphone, User } from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus';

const ruleFormRef = ref<FormInstance>();

const activeName = ref('account');
const isPersistent = ref(false);
const ruleForm = reactive({
    account: '',
    password: ''
});
const rules = reactive<FormRules<typeof ruleForm>>({
    account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});

const handleClick = (tab: TabsPaneContext) => {
    if (tab.paneName === 'account') {
        console.log('account 登录');
    }

    if (tab.paneName === 'phone') {
        console.log('phone 登录');
    }
};

const handleLogin = () => {};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
