<template>
    <div class="person">
        <h2>姓名是: {{ name }}</h2>
        <h2>年龄是: {{ age }}</h2>
        <button @click="changeAge">增加年龄</button>
        <button @click="getPhone">查看用户电话号码</button>
    </div>
</template>

<!-- 注意: 
    一: 钩子函数的生命周期
        setup 早于 VUE2 的data等钩子函数执行
        1. VUE2可以使用this，并且能获取setup里的数据
        2. VUE3的setup里，不能使用this，也不能获取 VUE2 的data等钩子函数里的数据

    二: 
-->

<!-- VUE3版本 -->
<!-- 语法糖写法 需要执行命令安装开发插件
    npm i vite-plugin-vue-setup-extend -D
-->
<script lang="ts" setup name="Person-HXL">
    // 非响应式数据
    let name: string = "张三";
    let age: number = 18;
    let phone: string = "13800138000";


    // 定义方法
    function changeAge() {
        age += 1;
    }
    function getPhone() {
        alert("用户的电话号码是: " + phone);
    }
</script>


<!-- 常规写法-->
<!-- <script lang="ts">
    export default {
        name: "Person",
        setup() {
            // setup 里的this 是 undefined

            // 非响应式数据
            let userName = "张三";
            let userAge = 18;
            let userPhone = "13800138000";

            // 响应式数据
            

            // 定义方法
            function changeAge() {
                userAge += 1;
            }

            function getPhone() {
                alert("用户的电话号码是: " + userPhone);
            }

            // 返回数据 和 方法 => 到模板中使用
            return {
                name:userName, age:userAge,
                changeAge, getPhone
                };
        }
    }
</script> -->

<!-- VUE2版本写法 -->
<!-- <script lang="ts">
    // 定义并导出 Person 组件
    export default {
        name: "Person",
        data() {
            return {
                name: "张三",
                age: 18,
                phone: "13800138000"
            }
        },
        methods: {
            changeAge() {
                this.age += 1;
            },
            getPhone() {
                alert("用户的电话号码是: " + this.phone);
            }
        }
    }
</script> -->

<style>
    .person {
        text-align: left;
        color: #ff6600;
        background-color: #f0f0f0;
    }
</style>