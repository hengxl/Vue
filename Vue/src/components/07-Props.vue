<template>
    <div class="props">
        <div v-for="stu in stuList" :key="stu.id">
            学生姓名：{{ stu.name }}，学生年龄：{{ stu.age }}
        </div>
    </div>
</template>

<script lang="ts" setup name="Props-HXL">
import { type StudentList } from '../types';

// 接受stuList + 限制类型（StudentList） + 限制必要性（?） + 指定默认值
withDefaults(defineProps<{ stuList?: StudentList }>(), {
    stuList: () => [{ id: 0, name: '默认名', age: 0 }]
});
</script>

<style scoped>
    .props {
        margin: center;
        padding: 10px;
        border: 2px solid #42b983;
        border-radius: 5px;
        width: 300px;
        text-align: center;

    }
</style>