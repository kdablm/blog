<template>
    <div>
        <el-card :body-style="{
            padding: '5%'
        }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image" />
            <div>
                <span>Yummy hamburger</span>
                <div>
                    <el-text line-clamp="2">
                        The -webkit-line-clamp CSS property<br />
                        allows limiting of the contents of<br />
                        a block to the specified number of lines.
                    </el-text>
                </div>
                <el-row justify="space-between">
                    <el-col :span="12">
                        <el-text type="primary" :size="samll">{{ currentDate }}</el-text>
                    </el-col>
                    <el-col style="display: flex;justify-content: flex-end;" :span="12">
                        <el-text type="success" :size="samll">{{ user }}</el-text>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>
<script setup>
import { ref } from "vue";

let currentDate = ref("2022-01-01");
let user = ref("admin");
</script>
<style scoped>
.image {
    width: 100%;
}
</style>