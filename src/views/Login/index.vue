<template>
    <div class="login">This is Login Page</div>
</template>

<script setup lang="ts">
import MyRequest from '@/API/index';

console.log(import.meta.env);

MyRequest({
    method: 'GET',
    url: '/home/multidata'
}).then(res => {
    console.log(res);
});
</script>

<style scoped lang="scss">
.logo {
    margin: 250px auto;
}
</style>
