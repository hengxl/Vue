<template>
    <div class="watch">
        <div class="simpleWatch">
            <h2>Watch 简单类型</h2>
            <p>当前数字：{{ number }}</p>
            <button @click="changeSum">增加数字</button>
        </div>
        <div class="complexWatch">
            <h2>Watch 复杂类型</h2>
            <p>姓名：{{ person.name }}</p>
            <p>年龄：{{ person.age }}</p>
            <button @click="changeName">修改姓名</button>
            <button @click="changeAge">修改年龄</button>
            <button @click="changePerson">整体修改对象</button>
        </div>
    </div>
    
</template>

<script lang="ts" setup name="Watch-HXL">

    import { ref, watch } from 'vue';

    //------ 简单类型 ------
    const number = ref(0);

    function changeSum() {
        number.value += 1;
    };

    const stopWatch = watch(number, (newVal, oldVal) => {
        console.log(`Number changed from ${oldVal} to ${newVal}`);
        if (newVal >= 5) {
        stopWatch(); // 停止监听
        }
    });

    //------ 复杂类型 ------
    const person = ref({
        name: '张三',
        age: 20
    });
    function changeName() {
        person.value.name += "~";
    };
    function changeAge() {
        person.value.age += 1;
    };
    function changePerson() {
        person.value = {
            name: '李四',
            age: 30
        };
    };

    // 监视复杂类型时，需加 deep 选项
    // 第一个参数是被监视的对象
    // 第二个参数是监视的毁掉
    // 第三个参数是配置对象（deep、immediate）
    watch(person, (newVal, oldVal) => {
        console.log('Person changed:', oldVal, '=>', newVal);
    }, { deep: true /** , immediate: true */});
</script>

<style>
    .watch {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px;
        text-align: center;
    }
    .simpleWatch {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px;
        text-align: center;
    }
    .complexWatch {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px;
        text-align: center;
    }
</style>