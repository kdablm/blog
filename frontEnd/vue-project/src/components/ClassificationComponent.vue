<template>
    <div class="classificationBox">
        <el-row style="height: 100%;">
            <el-col style="height: 100%;" :span="2">
                <el-text class="title">
                    分类
                </el-text>
            </el-col>
            <el-col class="classification_content" :span="22">
                <div class="classification_item" v-for="(item, index) in classificationList" :key="index">
                    <el-text class="classification_item_title">
                        {{ item }}
                    </el-text>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
import { reactive } from "vue";

let classificationList = reactive(["全部", "前端", "后端", "Linux"])
</script>
<style scoped>
.classificationBox {
    height: 5vh;
    border-radius: 10px;
    margin-top: 10px;
    background-color: var(--classificationBox-background-color);
}

.title {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-right: 1px solid #ffffff;
}

.classification_item {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.classification_content {
    height: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

}

.classification_item_title {
    color: #ffffff;
    height: 4vh;
    width: 100%;
    text-align: center;
    line-height: 4vh;
    padding: 0 20px;
    cursor: pointer;
    border: 1px solid transparent;
}

.classification_item_title:hover {
    color: #141414;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: #ffffff;
}
</style>