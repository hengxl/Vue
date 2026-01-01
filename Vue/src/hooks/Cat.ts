import { ref } from "vue";

export default function () {
    // Cat猫对象
    let cat = ref({
        name: 'Whiskers',
        age: 3,
    });

    // 喂猫的方法
    function feedCat() {
        console.log(`${cat.value.name} is being fed.`);
    }
    
    // 暴露cat对象和喂猫方法
    return {
        cat,
        feedCat,
    };
}