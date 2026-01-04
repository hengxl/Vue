<template>
    <div class="father">
        <h3>父组件</h3>
        <Child/>
    </div>
</template>

<script lang="ts" setup name="father-props">
    import Child from './Child.vue';

</script>

<style scoped>
    .father{
        /* 居中 */
        /* 1. 设置一个宽度 */
        width: 900px;
        /* 2. 设置左右外边距为 auto，浏览器会自动平分剩余空间 */
        margin: 0 auto;

        
        background-color: rgb(165, 164, 164);
        padding: 20px;
        border-radius: 10px;
    }
</style>