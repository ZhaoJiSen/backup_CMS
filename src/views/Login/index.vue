<template>
    <div class="login flex-center">
        <login-panel />
    </div>
</template>

<script setup lang="ts">
import LoginPanel from './components/LoginPanel/index.vue';
</script>

<style scoped lang="scss">
.login {
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/image/login-bg.svg');
}
</style>
