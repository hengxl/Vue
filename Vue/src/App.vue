<!-- 写 HTML 代码 -->
<template>
    <div class="app">
        <h1> Vue </h1>
    </div>
    <!-- 使用 Basic1 组件 -->
    <!-- <Basic1/> -->
    <!-- 使用 Basic2 组件 -->
    <!-- <Basic2/> -->
    <!-- 使用 Compute 组件 -->
    <!-- <Compute/> -->
    <!-- 使用 Watch 组件 -->
    <!-- <Watch/> -->
    <!-- 使用 WatchEffect 组件 -->
    <!-- <WatchEffect/> -->
    <!-- 使用 Props 组件 -->
    <!-- stu-list="students" 和 :stu-list="students" 的区别是
      前者是将 students 作为字符串传递给 Props 组件的 stu-list 属性
      后者是将 students 作为变量传递给 Props 组件的 stu-list 属性 
    -->
    <!-- <Props a="哈哈" :stuList="students"/> -->
    <!-- <Props a="哈哈" :stuList111="students"/> --> <!-- 测试默认值 -->

    <!-- 使用 Hooks 组件 -->
     <Hooks/>
</template>

<!-- 写 TS 脚本 -->
<!-- <script lang="ts">

    // 引入 Person 组件
    import Basic1 from './components/01-Basics.vue'
    // 引入 Car 组件
    import Basic2 from './components/02-Basic.vue'
    // 引入 Compute 组件
    import Compute from './components/03-Compute.vue'
    // 引入 Watch 组件
    import Watch from './components/04-Watch.vue';
    // 引入 WatchEffect 组件
    import WatchEffect from './components/05-WatchEffect.vue';
    
    export default {
        name: "App", // 定义并导出 App 组件
        components: { // 注册 Person 组件
            Basic1,
            Basic2,
            Compute,
            Watch,
            WatchEffect
        }
    }
</script> -->
<script lang="ts" setup name="App">

    // 引入 Person 组件
    import { reactive } from 'vue';
    import Basic1 from './components/01-Basics.vue'
    // 引入 Car 组件
    import Basic2 from './components/02-Basic.vue'
    // 引入 Compute 组件
    import Compute from './components/03-Compute.vue'
    // 引入 Watch 组件
    import Watch from './components/04-Watch.vue';
    // 引入 WatchEffect 组件
    import WatchEffect from './components/05-WatchEffect.vue';
    // 引入 Prop 组件
    import Props from './components/07-Props.vue';
    // 引入 Hooks 组件
    import Hooks from './components/08-Hooks.vue';

    // import { type StudentList } from './types';

    // // 定义学生列表数据
    // let students = reactive<StudentList>([
    //     { id: 1, name: '张三', age: 18 },
    //     { id: 2, name: '李四', age: 19 },
    //     { id: 3, name: '王五', age: 20 }
    // ]);
</script>

<!-- 写 CSS 样式 -->
<style>
    .app {
        text-align: center;
        color: #42b983;
        background-color: #ddd;
    }
</style>