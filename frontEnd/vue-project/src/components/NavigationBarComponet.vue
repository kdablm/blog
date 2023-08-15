<template>
    <div class="navBg">
        <nav class="nav">

            <div class="brand">
                <div class="menu">
                    <el-icon>
                        <Menu />
                    </el-icon>
                </div>
                ByteWizard的博客
            </div>
            <ul>

            </ul>
        </nav>
    </div>
</template>
<script setup>

</script>
<style scoped>
.nav {
    height: 5vh;
    display: flex;
    width: 90%;
    padding: 0 10px;
    margin: 0 auto;
    align-items: center;
}

.navBg {
    width: 100%;
    background-color: #fff;
}

.menu {
    padding-top: 5px;
    margin-right: 5px;
}

.menu:hover {
    color: aqua;
}
.brand{
    display: flex;
    align-items: center;
}
</style>