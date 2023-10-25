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
                                <div class="banner_title">
                                    我的技术栈
                                </div>
                                <div class="icon_group">
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/bxl-spring-boot.png" alt="">
                                        </div>
                                        <div class="icon_item" style="background-color: #409EFF;">
                                            <img src="../assets/img/icon/docker.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item" style="background-color:#E6A23C;">
                                            <img src="../assets/img/icon/HTML5.png" alt="">
                                        </div>

                                        <div class="icon_item">
                                            <img src="../assets/img/icon/java.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/git.png" alt="">
                                        </div>
                                        <div class="icon_item" style="background-color: #79bbff;">
                                            <img src="../assets/img/icon/jquery.png" alt="">
                                        </div>

                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/JavaScript.png" alt="">
                                        </div>
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/linux.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/logo.png" alt="">
                                        </div>
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/mysql.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/Vue.png" alt="">
                                        </div>
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/Webpack.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="https://pinia.vuejs.org/logo.svg" alt="">
                                        </div>
                                        <div class="icon_item">
                                            <img src="https://cn.vitejs.dev/logo.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/bxl-spring-boot.png" alt="">
                                        </div>
                                        <div class="icon_item" style="background-color: #409EFF;">
                                            <img src="../assets/img/icon/docker.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item" style="background-color:#E6A23C;">
                                            <img src="../assets/img/icon/HTML5.png" alt="">
                                        </div>

                                        <div class="icon_item">
                                            <img src="../assets/img/icon/java.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/git.png" alt="">
                                        </div>
                                        <div class="icon_item" style="background-color: #79bbff;">
                                            <img src="../assets/img/icon/jquery.png" alt="">
                                        </div>

                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/JavaScript.png" alt="">
                                        </div>
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/linux.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/logo.png" alt="">
                                        </div>
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/mysql.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/Vue.png" alt="">
                                        </div>
                                        <div class="icon_item">
                                            <img src="../assets/img/icon/Webpack.png" alt="">
                                        </div>
                                    </div>
                                    <div class="icon_list">
                                        <div class="icon_item">
                                            <img src="https://pinia.vuejs.org/logo.svg" alt="">
                                        </div>
                                        <div class="icon_item">
                                            <img src="https://cn.vitejs.dev/logo.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                        </el-col>
                    </el-row>
                </div>
                <el-row>
                    <el-col :span="16">

                    </el-col>
                    <el-col :span="8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum iure enim saepe veritatis quis sed
                        vitae. Id libero, itaque ut eligendi corrupti repellendus laudantium et ipsa dolorum qui, laborum
                        ipsum!
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
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

/* 遮盖 */
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
    height: 40px;
    border-radius: 10px;
    background-color: #409EFF;
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

.banner_left_top {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-color: var(--background-color);
    position: relative;
    overflow: hidden;
    cursor: pointer;
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

.banner_left_top:hover .banner_title {
    display: none;
}

.banner_title {
    color: var(--text-color);
    font-size: 30px;
    font-weight: bold;
    padding: 20px 100px;
}

.icon_group {
    z-index: 0;
    display: flex;
    width: 1800px;
    justify-content: space-between;
    transform: rotateZ(-30deg) translateX(100px);
    position: absolute;
    bottom: 200px;
    animation: iconRoll 20s linear infinite;
}

@-webkit-keyframes iconRoll {
    0% {
        transform: rotateZ(-30deg) translateX(100px);
    }

    100% {
        transform: rotateZ(-30deg) translateX(-815px);
    }
}

.icon_list>.icon_item:nth-child(2) {
    transform: translateX(70px);
}

.icon_item {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0px 0px 3px 1px #eeeeee;
    margin: 10px 0;
}

.icon_item img {
    width: 70px;
    height: 70px;
}
</style>