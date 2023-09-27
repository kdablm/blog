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
                    <li class="nav_item" @mouseleave="mouserOut(1, $event)" @mouseenter="mouserIn(1, $event)">
                        <span :class="{ 'in': inIndex == 1, 'out': outIndex == 1 }"></span>
                        <span>首页</span>
                    </li>
                    <li class="nav_item" @mouseleave="mouserOut(2, $event)" @mouseenter="mouserIn(2, $event)">
                        <span :class="{ 'in': inIndex == 2, 'out': outIndex == 2 }"></span>
                        <span>文章</span>
                    </li>
                    <li class="nav_item" @mouseleave="mouserOut(3, $event)" @mouseenter="mouserIn(3, $event)">
                        <span :class="{ 'in': inIndex == 3, 'out': outIndex == 3 }"></span>
                        <span>发现</span>
                    </li>
                    <li class="nav_item" @mouseleave="mouserOut(4, $event)" @mouseenter="mouserIn(4, $event)">
                        <span :class="{ 'in': inIndex == 4, 'out': outIndex == 4 }"></span>
                        <span>我的</span>
                    </li>
                </ul>
            </el-col>
            <el-col :span="6">
                <ul class=" toolBox">
                    <li class="tool_item">
                        <i v-if="counterStore.isDark" @click="counterStore.changeThem();"
                            class="bi theme_dark bi-moon-stars-fill"></i>
                        <i v-else @click="counterStore.changeThem();" class="bi theme_light bi-brightness-high-fill"></i>
                    </li>
                    <li class="tool_item search">
                        <i @click="showSearchDialong()" class="bi bi-search"></i>
                    </li>
                    <li class="tool_item setting">
                        <i class="bi bi-sliders"></i>
                    </li>
                </ul>
            </el-col>
        </el-row>
        <el-dialog v-model="isSearch" title="搜索" center>
            <el-input v-model="searchText" class="w-50 m-2" placeholder="Type something" clearable>
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <search />
                    </el-icon>
                </template>
            </el-input>
            <el-radio-group v-model="searchType">
                <el-radio :label="0">全部</el-radio>
                <el-radio :label="1">文章</el-radio>
                <el-radio :label="2">标签</el-radio>
            </el-radio-group>
        </el-dialog>
    </div>
</template>
<script setup >
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
// 鼠标移入效果
let inIndex = ref(0);
let outIndex = ref(0);
let inX = ref(0);
let inY = ref(0);
let outX = ref(0), outY = ref(0);
let t = null;
//鼠标移入效果
function mouserIn(index, e) {
    if (t != null) {
        clearTimeout(t)
    }
    inIndex.value = index
    inX.value = e.offsetX + "px"
    inY.value = e.offsetY + "px"
}
// 鼠标移出效果
function mouserOut(index, e) {
    if (t != null) {
        clearTimeout(t)
    }
    t = setTimeout(() => {
        inIndex.value = 0;
        outIndex.value = 0;
    }, 500)
    outIndex.value = index;
    outX.value = e.offsetX + "px"
    outY.value = e.offsetY + "px"
}
// 搜索对话框
let isSearch = ref(false);
let searchText = ref(0);
let searchType = ref("");
function showSearchDialong() {
    searchType.value = 0;
    searchText.value = '';
    isSearch.value = true;
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
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    line-height: 4vh;
    overflow: hidden;
    border-radius: 15px;
    position: relative;
    margin: 0 5px;
}

.nav_item span {
    color: var(--text-color);
}


.nav_item span {
    position: relative;
    z-index: 1;
}

.nav_item {
    position: relative;
}

.nav_item .in {
    position: absolute;
    left: v-bind(inX);
    top: v-bind(inY);
    display: block;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background-color: var(--navbar-hover-color);
    transform: translate(-50%, -50%);
    z-index: inherit;
    animation: in 0.5s ease-out forwards;
}

.nav_item .out {
    position: absolute;
    left: v-bind(outX);
    top: v-bind(outY);
    display: block;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background-color: var(--navbar-hover-color);
    transform: translate(-50%, -50%);
    z-index: inherit;
    animation: out 0.5s ease-out forwards;
}

/* 动画 兼容 */
@-moz-keyframes in {
    0% {
        width: 0px;
        height: 0px;
    }

    100% {
        width: 500px;
        height: 500px;
    }
}

@keyframes in {
    0% {
        width: 0px;
        height: 0px;
    }

    100% {
        width: 500px;
        height: 500px;
    }
}

@-webkit-keyframes in {
    0% {
        width: 0px;
        height: 0px;
    }

    100% {
        width: 500px;
        height: 500px;
    }
}

@-moz-keyframes out {
    0% {
        width: 500px;
        height: 500px;
    }

    100% {
        width: 0px;
        height: 0px;
    }
}

@keyframes out {
    0% {
        width: 500px;
        height: 500px;
    }

    100% {
        width: 0px;
        height: 0px;
    }
}

@-webkit-keyframes out {
    0% {
        width: 500px;
        height: 500px;
    }

    100% {
        width: 0px;
        height: 0px;
    }
}

.toolBox {
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 0;
}

.toolBox>.tool_item {
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    width: 50px;
    line-height: 4vh;
    overflow: hidden;
    border-radius: 15px;
    position: relative;
}

.theme_light {
    color: #eebe77;
}

.theme_dark {
    color: #79bbff;
}</style>