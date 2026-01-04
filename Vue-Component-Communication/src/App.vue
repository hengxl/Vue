<template>
    <div class="consainer">
        <h1 class="title"> Vue3 组件通信 </h1>
        <hr>
        <div class="content-wrapper">
            <!-- 导航区 -->
            <div class="nav-list">
                <router-link active-class="active" class="nav-item" to="/props">1.props</router-link>
                <router-link active-class="active" class="nav-item" to="/event">2.自定义事件</router-link>
                <router-link active-class="active" class="nav-item" to="/bus">3.mitt</router-link>
                <router-link active-class="active" class="nav-item" to="/model">4.v-model</router-link>
                <router-link active-class="active" class="nav-item" to="/attrs-listeners">5.attrs</router-link>
                <router-link active-class="active" class="nav-item" to="/ref-parent">6.ref-parent</router-link>
                <router-link active-class="active" class="nav-item" to="/provide-inject">7.provide-inject</router-link>
                <router-link active-class="active" class="nav-item" to="/pinia">8.pinia</router-link>
                <router-link active-class="active" class="nav-item" to="/slot">9.slot</router-link>
            </div>
            <!-- 路由展示区 -->
            <div class="view-area">
                <router-view></router-view>
            </div>
        </div>
    </div>    
</template>

<script lang="ts" setup>


</script>

<style scoped>
/* 容器样式 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* 标题样式 */
.title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
}

/* 内容容器：左侧导航 + 右侧内容 */
.content-wrapper {
    display: flex;
    gap: 20px;
}

/* 左侧导航列表 */
.nav-list {
    width: 200px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
}

/* 导航项样式 */
.nav-item {
    display: block;
    padding: 12px 16px;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #e0e0e0;
}
/* 最后一个导航项去掉下边框 */
.nav-item:last-child {
    border-bottom: none;
}
/* 激活状态样式（和图片里的蓝色一致） */
.nav-item.active {
    background-color: #165dff;
    color: white;
}

/* 右侧路由展示区 */
.view-area {
    flex: 1;
    min-height: 500px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    background-color: #f9f9f9;
}
</style>