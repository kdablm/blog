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
            <span :class="{ in: inIndex == 1, out: outIndex == 1 }"></span>
            <span>{{ language.navigationBar.links.home }}</span>
          </li>
          <li class="nav_item" @mouseleave="mouserOut(2, $event)" @mouseenter="mouserIn(2, $event)">
            <span :class="{ in: inIndex == 2, out: outIndex == 2 }"></span>
            <span>{{ language.navigationBar.links.post }}</span>
          </li>
          <li class="nav_item" @mouseleave="mouserOut(3, $event)" @mouseenter="mouserIn(3, $event)">
            <span :class="{ in: inIndex == 3, out: outIndex == 3 }"></span>
            <span>{{ language.navigationBar.links.more }}</span>
          </li>
          <li class="nav_item" @mouseleave="mouserOut(4, $event)" @mouseenter="mouserIn(4, $event)">
            <span :class="{ in: inIndex == 4, out: outIndex == 4 }"></span>
            <span>{{ language.navigationBar.links.about }}</span>
          </li>
        </ul>
      </el-col>
      <el-col :span="6">
        <ul class="toolBox">
          <!-- 主题切换按钮 -->
          <li class="tool_item">
            <el-switch v-model="themeStore.isDark" :active-action-icon="MoonNight" :inactive-action-icon="Sunny" style="
                --el-switch-on-color: #79bbff;
                --el-switch-off-color: #eebe77;
              " />
          </li>
          <!-- 搜素按钮 -->
          <li class="tool_item search">
            <el-button :icon="Search" @click="showSearchDialong()" circle size="small" type="success" />
          </li>
          <!-- 设置按钮 -->
          <li class="tool_item setting">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-button circle size="small" :icon="Setting" type="primary"></el-button>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="languageStore.chagneLanguage(0)">中文</el-dropdown-item>
                  <el-dropdown-item @click="languageStore.chagneLanguage(1)">English</el-dropdown-item>
                  <el-dropdown-item disabled>更多设置</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
        </ul>
      </el-col>
    </el-row>
    <!-- 搜索框 -->
    <el-dialog v-model="isSearch" :title="language.navigationBar.search.title" class="searchTheme" center>
      <el-input v-model="searchText" type="search" @search="fn_search()" class="w-50 m-2"
        :placeholder="language.navigationBar.search.input" clearable>
        <template #prefix>
          <el-icon class="el-input__icon">
            <search />
          </el-icon>
        </template>
      </el-input>
      <el-radio-group v-model="searchType" style="margin-top: 5px">
        <el-text style="color: var(--text-color)" size="large">
          {{ language.navigationBar.search.model.title }}：
        </el-text>
        <el-radio :label="0">{{
          language.navigationBar.search.model.list.all
        }}</el-radio>
        <el-radio :label="1">{{
          language.navigationBar.search.model.list.post
        }}</el-radio>
        <el-radio :label="2">{{
          language.navigationBar.search.model.list.label
        }}</el-radio>
      </el-radio-group>
      <div class="searcBtnGrop">
        <el-button type="primary" @click="fn_search()">搜索</el-button>
        <el-button type="warning" @click="cancelBtn()">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script setup >
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useThemeStore } from "../stores/theme"; //主题库
import { useLanguageStore } from "../stores/language"; //语言库

// 图标
import { Search, Sunny, MoonNight, Setting } from "@element-plus/icons-vue";
import axios, { Axios } from "axios";
const themeStore = useThemeStore();
const languageStore = useLanguageStore();
// 获取窗口滚距离
let windowScollTop = ref(0);
let backgroundColor = ref("transparent");
let textColor = ref("#ffffff");
onMounted(() => {
  window.addEventListener("scroll", () => {
    windowScollTop.value = window.scrollY || document.documentElement.scrollTo || document.body.scrollTop;
    if (windowScollTop.value > 100) {
      backgroundColor.value = "var(--background-color)";
      textColor.value = "var(--text-color)";
    } else {
      backgroundColor.value = ref("transparent");
      textColor.value = ref("#ffffff");
    }
  });
})
// 语言
let language = reactive(languageStore.language);
watch(
  () => languageStore.getLanguageIndex,
  () => {
    languageStore.getLanguage.then((res) => {
      language.navigationBar = { ...res.navigationBar };
    });
  }
);
// 鼠标移入效果
let inIndex = ref(0);
let outIndex = ref(0);
let inX = ref(0);
let inY = ref(0);
let outX = ref(0),
  outY = ref(0);
let t = null;
//鼠标移入效果
function mouserIn(index, e) {
  if (t != null) {
    clearTimeout(t);
  }
  inIndex.value = index;
  inX.value = e.offsetX + "px";
  inY.value = e.offsetY + "px";
}
// 鼠标移出效果
function mouserOut(index, e) {
  if (t != null) {
    clearTimeout(t);
  }
  t = setTimeout(() => {
    inIndex.value = 0;
    outIndex.value = 0;
  }, 600);
  outIndex.value = index;
  outX.value = e.offsetX + "px";
  outY.value = e.offsetY + "px";
}
// 搜索对话框
let isSearch = ref(false);
let searchText = ref(0);
let searchType = ref("");
function showSearchDialong() {
  searchType.value = 0;
  searchText.value = "";
  isSearch.value = true;
}
// 搜索函数
function fn_search() {
  console.log(searchText.value);
  /* 搜索函数处理 */
  isSearch.value = false; //隐藏对话框
}
// 搜索框取消按钮函数
function cancelBtn() {
  isSearch.value = false; //隐藏对话框
}
</script>


<style scoped>
* {
  user-select: none;
}

.navBg {
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 10;
  color: v-bind(textColor);
  background-color: v-bind(backgroundColor);
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
  color: v-bind(textColor);
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
  /* line-height: 4vh; */
  overflow: hidden;
  border-radius: 15px;
  position: relative;
}

.theme_light {
  color: #eebe77;
}

.theme_dark {
  color: #79bbff;
}

.searcBtnGrop {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>