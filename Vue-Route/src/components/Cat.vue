
<template>
    <div>
        <h1>猫</h1>
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
    h1 {
        color: #dddd;
    }
    div {
        border: 2px solid #dddd#4266b8;
        padding: 10px;
        border-radius: 5px;
        width: 200px;
    }
</style>