<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBarComponetVue from './components/NavigationBarComponet.vue'
import {ref} from 'vue'

// 主题样式
let isLight=ref(true)
</script>

<template>
    <div class="bg" :class="{dark:isLight}">
        <NavigationBarComponetVue v-model:isLight="isLight"></NavigationBarComponetVue>
        <routerView></routerView>
    </div>
</template>

<style scoped>
.bg {
    height: 100vh;
    background-image: url("./assets/img/bg.jpg");
    position: absolute;
    background-attachment: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    padding: 0;
    margin: 0;
    z-index: -1;
}

.bg .el-container {
    height: 100%;
}
</style>
