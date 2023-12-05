<script setup lang="ts">
import { adaptation } from '@/utils';
import { onMounted } from 'vue';

onMounted(() => {
    window.addEventListener('resize', adaptation, false);
});
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
