
<template>
    <div>
        <h1>老鼠</h1>
        <p>名字：{{ mouse.name }}</p>
        <p>年龄：{{ mouse.age }}岁</p>
    </div>
</template>

<script lang="ts" setup name="Mouse">

    import { ref } from "vue";

    let mouse = ref({
        name: '老鼠',
        age: 2
    })
</script>

<style scoped>
    h1 {
        color: #ff6600;
    }
    div {
        border: 2px solid #ff6600;
        padding: 10px;
        border-radius: 5px;
        width: 200px;
    }
</style>