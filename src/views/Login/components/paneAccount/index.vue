<template>
    <div class="pane-account">
        <el-form
            status-icon
            size="large"
            ref="ruleFormRef"
            label-width="60px"
            class="account-form"
            :model="accountForm"
            :rules="accountRules"
        >
            <el-form-item label="账号" prop="account">
                <el-input
                    clearable
                    autocomplete="off"
                    v-model="accountForm.account"
                />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input
                    clearable
                    show-password
                    type="password"
                    autocomplete="off"
                    v-model="accountForm.password"
                />
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';

const ruleFormRef = ref<FormInstance>();
const accountForm = reactive({
    account: '',
    password: ''
});

// 定义表单规则
const accountRules: FormRules = {
    account: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        {
            pattern: /^[a-z0-9]{3,}$/,
            message: '必须是 3 位以上的数字或字母',
            trigger: 'blur'
        }
    ]
};

// 执行账号登录逻辑
const loginAction = () => {
    ruleFormRef.value?.validate(isValid => {
        if (isValid) {
            const name = accountForm.account;
            const password = accountForm.password;
        } else {
            ElMessage.error('请输入正确格式后再进行登录！');
        }
    });
    console.log('loginAction');
};

defineExpose({
    loginAction
});
</script>

<style scoped lang="sass">
@import "./index.scss"
</style>
