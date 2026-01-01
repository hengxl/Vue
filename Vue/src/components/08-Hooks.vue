<template>
    <div>
        <div>
            <h3>Cat Info:</h3>
            <p>Name: {{ cat.name }}</p>
            <p>Age: {{ cat.age }}</p>
            <button @click="feedCat">Feed Cat</button>
        </div>
        <div>
            <h3>Dog Info:</h3>
            <p>Name: {{ dog.name }}</p>
            <p>Age: {{ dog.age }}</p>
            <button @click="bark">Make Dog Bark</button>
        </div>
    </div>
</template>

<script lang="ts" setup name="Hooks-HXL">
    import useCat from "../hooks/Cat";
    import useDog from "../hooks/Dog";

    const { cat, feedCat } = useCat();
    const { dog, bark } = useDog();
</script>

<style scoped>
    div {
        margin: 10px;
        padding: 10px;
        border: 2px solid #42b983;
        border-radius: 5px;
        width: 300px;
    }
</style>