<template>
    <div>
        <div>
            <div style="position: relative;height: 95vh;z-index: 1;">
                <div class="topBox">
                    <div>
                        <div class="imageBox">
                            <img src="../assets/img/userImage.jpg" class="userImage" alt="userImage" />
                        </div>
                        <div class="userNameBox">
                            <h2 class="userName">ByteWizard</h2>
                        </div>
                        <div class="userMottoBox">
                            <h2 class="userMotto">{{ motto }}</h2>
                        </div>
                    </div>
                </div>
                <div class="iconDown">
                    <el-icon>
                        <ArrowDown />
                    </el-icon>
                </div>
            </div>
            <div class="container">
                <div class="descript">
                    <el-icon>
                        <BellFilled />
                    </el-icon>
                    <div class="title">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, non.
                    </div>
                    <el-icon>
                        <CaretRight />
                    </el-icon>
                </div>
                <!-- banner -->
                <div class="banner">
                    <el-row :gutter="10">
                        <el-col :span="12">
                            <div class="banner_left_top">
                                <div class="banner_left_top_eclipse_box">
                                    <h1>看一看</h1>
                                </div>
                                <div class="icon_group">
                                    <div v-for="item in iconButtlets" :key="item" :style="{ top: `${item.top}px` }"
                                        :class="['icon_bullet_' + item.status]" class="icon_item">
                                        <img :src="item.src" alt="icon">
                                    </div>

                                </div>
                            </div>
                            <el-row :gutter="10">
                                <el-col class="banner_post_item" :span=bannerPost[0] @mouseenter="bannerPostEnter(0)"
                                    @mouseleave="bannerPostOut">
                                    <div class="banner_post_item hot">
                                        <p>热门精选</p>
                                    </div>
                                </el-col>
                                <el-col class="banner_post_item" :span=bannerPost[1] @mouseenter="bannerPostEnter(1)"
                                    @mouseleave="bannerPostOut">
                                    <div class="banner_post_item upgrader">
                                        <p>最近更新</p>
                                    </div>
                                </el-col>
                                <el-col class="banner_post_item" :span=bannerPost[2] @mouseenter="bannerPostEnter(2)"
                                    @mouseleave="bannerPostOut">
                                    <div class="banner_post_item mojang">
                                        <p>技术专栏</p>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="12">
                            <div class="banner_right_top">
                                <el-text class="banner_right_top_title">公告</el-text>
                                <el-table :data="noteTable" :row-style="cellStyle"
                                    :header-cell-style="{ 'background': themeStore.isDark ? '#141414' : '#ffffff', 'color': themeStore.isDark ? '#ffffff' : '#000000' }"
                                    height="315"
                                    style="width: 100%;background-color: var(--background-color);color: var(--text-color);">
                                    <el-table-column prop="date" width="120" label="日期" />
                                    <el-table-column prop="name" width="100" label="发布者" />
                                    <el-table-column prop="descript" label="描述" />
                                </el-table>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <section>

                </section>
                <el-row>
                    <!-- 文章列表 -->
                    <el-col :span="16">
                        <ClassificationComponent></ClassificationComponent>
                        <PostListComponent />
                    </el-col>
                    <el-col :span="8">

                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { useThemeStore } from "../stores/theme"; //主题库
import ClassificationComponent from "../components/ClassificationComponent.vue"
// import PostItemComponent from "../components/PostItemComponent.vue"
import PostListComponent from "../components/PostListComponent.vue";
import IconBullet from "@/pojo/IconBullent.js"
const themeStore = useThemeStore();
let str = "It's not how much time you have,it's how you use it.";
let motto = ref("");
let strIndex = 0;
onMounted(() => {
    setTimeout(() => {
        let addMotto = setInterval(() => {
            if (strIndex < str.length) {
                motto.value += str[strIndex];
                strIndex++;
            } else {
                clearInterval(addMotto);
            }
        }, 200);
    }, 1000);
});
//鼠标移入效果
let bannerPost = reactive([8, 8, 8]);
function bannerPostEnter(index) {
    bannerPost[0] = 6;
    bannerPost[1] = 6;
    bannerPost[2] = 6;
    bannerPost[index] = 12;
}
function bannerPostOut() {
    bannerPost[0] = 8;
    bannerPost[1] = 8;
    bannerPost[2] = 8;
}
// 公告表格
let noteTable = reactive([
    {
        date: "2021-01-01",
        name: "张三",
        descript: "lorem Ips incorrectly lorem ipsum dolor sit amet, consectetur"
    },
    {
        date: "2021-01-01",
        name: "张三",
        descript: "lorem Ips incorrectly lorem ipsum dolor sit amet, consectetur"
    }
])
// 表格样式
function cellStyle(row) {
    if (themeStore.isDark) {
        return {
            'background': '#141414',
            'color': '#ffffff'
        }
    } else {
        return {
            'background': '#ffffff',
            'color': '#000000'
        }
    }
}
// 图标弹幕
let iconButtlets = reactive([]);
function generateIcon() {
    let icon = new IconBullet();
    icon.src = new URL(`../assets/img/icon/${icon.name}.png`, import.meta.url).href;
    iconButtlets.push(icon);
}
function bulletRunning(time) {
    iconButtlets.forEach((e, i) => {
        if (e.status == "waiting") {
            setTimeout(() => {
                e.status = "running";
            }, time)
        } else if (e.status == "done") {
            iconButtlets.splice(i, 1);
        }
    })
}
generateIcon();
bulletRunning();
setInterval(() => {
    generateIcon();
    bulletRunning(Math.floor(Math.random() * 400));
}, 300)
</script>
<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&family=Tilt+Prism&display=swap");

/* 主要内容盒子 */
.container {
    padding: 50px 5%;
    background-color: #EBEDF0;
}

/* 头部头像盒子 */
.topBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
}

/* 头像 */
.imageBox {
    display: flex;
    justify-content: center;
    align-items: center;
}

.userImage {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin: 0 auto;
    animation: rotateImage 10s linear infinite;
}

@-webkit-keyframes rotateImage {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

/* 用户名与座右铭 */
.userName,
.userMotto {
    text-align: center;
    color: #ffffff;
}

.userName {
    font-family: "Tilt Prism", cursive;
    width: 0px;
    height: 50px;
    overflow: hidden;
    font-size: 40px;
    position: relative;
    animation: changeUserName 1s linear;
    animation-fill-mode: forwards;
    border-radius: 15px;
    transform: translateY(-20%);
}

@-webkit-keyframes changeUserName {
    form {
        width: 0px;
    }

    to {
        width: 250px;
    }
}

.userNameBox,
.userMottoBox {
    display: flex;
    justify-content: center;
}

.userMotto {
    font-family: "Dancing Script", cursive;
    font-size: 36px;
    width: 0px;
    height: 40px;
    overflow: hidden;
    position: relative;
    display: block;
    border-radius: 10px;
    animation: changeUserMotto 1s linear;
    animation-fill-mode: forwards;
    transform: translateY(-100%);
}

@-webkit-keyframes changeUserMotto {
    form {
        width: 0px;
    }

    to {
        width: 100%;
    }
}

/* 座右铭遮盖效果 */
.userMotto::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    opacity: 1;
    width: 0%;
    border-radius: 10px;
    height: 50px;
    transform: translate(-50%, -50%);
    animation: eclipse_motto 2s;
    /* 保留最后一帧效果 */
    animation-fill-mode: forwards;
}

@-webkit-keyframes eclipse_motto {
    0% {
        width: 0px;
        opacity: 1;
    }

    50% {
        width: 60%;
        opacity: 0.5;
    }

    100% {
        width: 0px;
        opacity: 0;
    }
}

.userName::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    opacity: 1;
    width: 0px;
    height: 50px;
    border-radius: 15px;
    transform: translate(-50%, -50%);
    animation: eclipse_image 2s;
}

@-webkit-keyframes eclipse_image {
    0% {
        width: 0px;
        opacity: 1;
    }

    50% {
        width: 250px;
        opacity: 0.5;
    }

    100% {
        width: 0px;
        opacity: 0;
    }
}

.iconDown {
    position: absolute;
    color: #fff;
    font-size: 32px;
    bottom: 0px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    animation: dowm 1.5s infinite;
}

@-webkit-keyframes dowm {
    0% {
        bottom: 20px;
        font-size: 26px;
        opacity: 1;
    }

    100% {
        bottom: 0px;
        font-size: 32px;
        opacity: 0;
    }

}

.descript {
    width: calc(100% - 20px);
    height: 5vh;
    border-radius: 10px;
    background-color: var(--classificationBox-background-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    color: #ffffff;
    cursor: pointer;
}

.banner {
    margin-top: 20px;
}

.banner_left_top,
.banner_right_top {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-color: var(--background-color);
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.banner_right_top .banner_right_top_title {
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: var(--text-color);
    padding: 10px;
    border-bottom: 1px solid var(--text-color);
}

.banner_right_top {
    height: 315px;
}

.banner_right_top .weather {
    flex: 1;
}

.banner_left_top_eclipse_box {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #4259efc9;
    z-index: 2;
    opacity: 0;
    transition: all .5s;
}

.banner_left_top_eclipse_box h1 {
    color: rgba(255, 255, 255, 1);
    padding: 5px;
    margin-left: 10px;
    font-size: 46px;
    transition: margin-left .5s;
}

.banner_left_top:hover .banner_left_top_eclipse_box {
    opacity: .99;
}

.banner_left_top:hover .banner_left_top_eclipse_box h1 {
    margin-left: 50px;
}

/* 技术栈图标 */
.icon_group {
    z-index: 0;
    width: 100%;
    z-index: 0;
}

.icon_item {
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0px 0px 3px 1px #eeeeee;
    margin: 10px 0;
}

.icon_item img {
    width: 40px;
    height: 40px;
}

/* 图标的弹幕效果 */
.icon_bullet_waiting {
    left: 100%;
    transform: translate(100%, 0);
}

.icon_bullet_done {
    left: 0%;
    transform: translate(-100%, 0);
}

.icon_bullet_running {
    animation: bulletRunning 5s linear forwards;
}

@-webkit-keyframes bulletRunning {
    from {
        left: 100%;
        transform: translate(100%, 0);
    }

    to {
        left: 0%;
        transform: translate(-100%, 0);
    }
}

.banner_post_item {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    color: #ffffff;
    transition: all .5s;
}

.hot {
    background-color: #f89898;
}

.upgrader {
    background-color: #a0cfff;
}

.mojang {
    background-color: #67C23A;
}

.el-table {
    --el-table-row-hover-bg-color: #a0cfff;
}
</style>