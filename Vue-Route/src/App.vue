<template>
    <div class="all">
        <h1>下面展示各种动物</h1>
        <div class="show">
            <RouterLink to="/cat" active-class="active">猫</RouterLink>
            <RouterLink to="/dog" active-class="active">狗</RouterLink>
            <RouterLink to="/mouse" active-class="active">老鼠</RouterLink>
            <RouterView class="router-view"></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { RouterView, RouterLink } from 'vue-router';

</script>

<style scoped>
    .all {
        text-align: center;
        margin-top: 20px;
        border: 2px solid #42b983;
        padding: 20px;
    }

    .show {
        margin-top: 20px;
        font-size: 20px;
        border: 2px solid #42b983;
    }

    a {
        border: 1px solid #42b983;
        padding: 5px 10px;
        margin: 0 30px;
        text-decoration: none;
        color: #35495e;
        border-radius: 5px;
    }

    h1 {
        color: #42b983;
    }

    .router-view {
        display: block;
        border: 2px solid #42b983;
        margin: 0 auto;
        padding: 30px;
    }
    a.active {
        font-weight: bold;
        color: #35495e;
    }
</style>
