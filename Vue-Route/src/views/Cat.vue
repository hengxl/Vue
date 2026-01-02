<template>
    <!-- 使用一个更具描述性的类名，并添加动画 -->
    <div class="animal-card" :style="{ animation: 'fadeIn 0.5s ease' }">
        <h1>🐱 {{ cat.name }}</h1>
        <p>名字：{{ cat.name }}</p>
        <p>年龄：{{ cat.age }}岁</p>
    </div>
</template>

<script lang="ts" setup name="Cat">
    import { ref } from "vue";

    let cat = ref({
        name: '猫',
        age: 4
    })
</script>

<style scoped>
    /* 卡片容器样式，与项目风格统一 */
    .animal-card {
        /* 布局与间距 */
        width: 90%;
        max-width: 300px; /* 限制最大宽度 */
        margin: 0 auto;   /* 水平居中 */
        padding: 40px;
        
        /* 视觉样式 */
        background: #f8fdfa; /* 统一的淡绿色背景 */
        border: 1px solid rgba(66, 185, 131, 0.2); /* 统一的绿色边框 */
        border-radius: 12px; /* 统一的圆角 */
        box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05); /* 统一的内阴影 */
        
        /* 文本对齐 */
        text-align: center;
    }

    /* 标题样式 */
    h1 {
        color: #2c3e50; /* 使用项目中主标题的颜色 */
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 20px;
    }

    /* 段落文本样式 */
    p {
        color: #34495e; /* 使用一个更易读的深灰色 */
        font-size: 1.1rem;
        line-height: 1.6;
    }

    /* 
     * 注意：动画 `fadeIn` 是在父组件的样式中定义的。
     * 由于 scoped 样式的限制，子组件无法直接使用父组件的动画。
     * 解决方案是：
     * 1. 将动画定义在一个全局 CSS 文件中。
     * 2. 或者，像上面一样，通过内联样式绑定。
     * 3. 或者，使用 :global 伪类（不推荐，会污染全局）。
     * 这里我选择了方案2，因为它最简单直接。
    */
</style>