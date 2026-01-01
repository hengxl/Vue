
<template>
    <div>
        <h1>狗</h1>
        <p>名字：{{ dog.name }}</p>
        <p>年龄：{{ dog.age }}岁</p>
    </div>
</template>

<script lang="ts" setup name="Dog">

    import { ref } from "vue";

    let dog = ref({
        name: '狗',
        age: 3
    })
</script>

<style scoped>
    h1 {
        color: #4266b8;
    }
    div {
        border: 2px solid #4266b8;
        padding: 10px;
        border-radius: 5px;
        width: 200px;
    }
</style>