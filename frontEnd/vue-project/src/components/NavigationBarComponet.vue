<template>
    <div class="navBg">
        <el-row :gutter="5" class="nav">
            <el-col :span="6">
                <div class="nav_brand">
                    <el-icon>
                        <Menu />
                    </el-icon>
                    ByteWizard
                </div>
            </el-col>
            <el-col :span="12">
                <ul class="navbar">
                    <li class="nav_item">首页</li>
                    <li class="nav_item">文章</li>
                    <li class="nav_item">发现</li>
                    <li class="nav_item">我的</li>
                </ul>
            </el-col>
            <el-col :span="6">
                <ul class="navbar toolBox">
                    <li class="nav_item theme" @click="changeLight()">
                        <svg v-if="isLight" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-sun-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        </svg>
                        <el-icon v-else>
                            <Moon />
                        </el-icon>
                    </li>
                    <li class="nav_item">搜索</li>
                    <li class="nav_item">设置</li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
import { ref } from "vue";
// 父组件传参
let props = defineProps({
    isLight: {
        default: true,
        type: Boolean
    }
})
// 
let emit=defineEmits(["update:isLight"])
// 日夜模式
let isLight = ref(props.isLight);
function changeLight() {
    console.log(isLight.value);
    emit("update:isLight",!isLight.value);
    isLight.value = !isLight.value;
}
</script>

<style scoped>
.navBg {
    width: 100%;
    color: var(--text-color);
    background-color: var(--background-color);
}

.nav {
    height: 5vh;
    width: 90%;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
}

.nav_brand {
    display: flex;
    align-items: center;
}

.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.nav_item {
    margin: 0 30px;
    font-size: 16px;
    cursor: pointer;
}

.toolBox {
    justify-content: end;
}

.toolBox>.nav_item {
    margin: 0 10px;
}

.theme {
    padding-top: 5px;
}

.theme_light {
    color: #eebe77;
}
</style>