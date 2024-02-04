<template>
   <div class="content">
    <el-row :gutter="10">
        <el-col :span="6">
            <postItemComponent></postItemComponent>
        </el-col>
        <el-col :span="6">
            <postItemComponent></postItemComponent>
        </el-col>
        <el-col :span="6">
            <postItemComponent></postItemComponent>
        </el-col>
        <el-col :span="6">
            <postItemComponent></postItemComponent>
        </el-col>
    </el-row>
   </div>
</template>
<script setup>
import PostItemComponent from "../components/PostItemComponent.vue"
</script>
<style scoped>
.content{
 padding:10px 0;
}
</style>