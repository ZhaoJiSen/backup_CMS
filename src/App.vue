<script setup lang="ts"></script>

<template>
    <header>
        <div class="wrapper">
            <router-link :to="{ name: 'home' }">回到首页</router-link>
            <router-link :to="{ name: 'about' }">回到关于页面</router-link>
        </div>
    </header>

    <RouterView />
</template>

<style scoped></style>
