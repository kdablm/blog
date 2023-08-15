<template>
    <div>
        <div class="topBox">
            <div>
                <div class="imageBox">
                    <img src="../assets/img/userImage.jpg" class="userImage" alt="userImage">
                </div>
                <div class="userNameBox">
                    <h2 class="userName">ByteWizard</h2>
                </div>
                <div class="userMottoBox">
                    <h2 class="userMotto">{{ motto }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
let str = "It's not how much time you have,it's how you use it."
let motto = ref("")
let strIndex = 0;
onMounted(() => {
    setTimeout(() => {
        let addMotto = setInterval(() => {
            if (strIndex < str.length) {
                motto.value += str[strIndex]
                strIndex++
            } else {
                clearInterval(addMotto)
            }
        }, 200)
    },1000)
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Tilt+Prism&display=swap');

/* 头部头像盒子 */
.topBox {
    transform: translateY(40%);
}

/* 头像 */
.imageBox {
    display: flex;
    justify-content: center;
    align-items: center;
}

.userImage {
    width: 150px;
    height: 150px;
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
    font-family: 'Tilt Prism', cursive;
    width: 0px;
    height: 50px;
    overflow: hidden;
    font-size: 40px;
    position: relative;
    animation: changeUserName 1s linear;
    animation-fill-mode: forwards;
    border-radius: 15px;
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
    font-family: 'Dancing Script', cursive;
    font-size: 36px;
    width: 0px;
    height: 40px;
    overflow: hidden;
    position: relative;
    display: block;
    border-radius: 10px;
    animation: changeUserMotto 1s linear;
    animation-fill-mode: forwards;
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
</style>