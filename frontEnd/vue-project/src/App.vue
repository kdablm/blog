<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBarComponetVue from './components/NavigationBarComponet.vue'
import { ref } from 'vue'

// 主题样式
let isDrak = ref(true)
// 状态库
import { useThemeStore } from './stores/theme.js';
const themeStore = useThemeStore();

</script>

<template>
    <div class="bg" :class="{ dark: themeStore.isDark }">
        <div class="navbar">
            <NavigationBarComponetVue></NavigationBarComponetVue>
        </div>

        <routerView style="z-index: 1;"></routerView>
    </div>
</template>

<style scoped>
.navbar {
    position: sticky;
    top: 0px;
    z-index: 10;
}

.bg {
    background-image: url("./assets/img/bg.jpg");
    position: absolute;
    background-position: center;
    background-attachment: fixed;
    top: 0;
    left: 0;
    /* bottom: 0; */
    right: 0;
    background-size: cover;
    padding: 0;
    margin: 0;
    z-index: -1;
}

.bg .el-container {
    height: 100%;
}
</style>
