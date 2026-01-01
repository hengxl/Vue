import { ref } from "vue";

export default function () {
    // Dog狗对象
    let dog = ref ({
        name: 'Buddy',
        age: 5,
    });

    // 狗叫的方法
    function bark() {
        console.log(`${dog.value.name} says Woof!`);
    }

    // 暴露dog对象和狗叫方法
    return {
        dog,
        bark,
    };
}