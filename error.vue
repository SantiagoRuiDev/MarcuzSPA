<template>
    
    <div class="errorback w-full">
        <div class="container min-h-screen w-2/4 mx-auto grid grid-cols-1 justify-items-center items-center">

            <div class="container w-full mx-auto grid self-center gap-3">
                <h2 class="font-extrabold text-center text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{{ error.statusCode }}</h2>
                <h2 class="font-extrabold text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Un error ha ocurrido</h2>
                <p class="text-center text-gray-600 py-2">{{ error.message }}</p>
            </div>

        </div>


    </div>


</template>


<style scoped>
    .errorback{
        background: url("/assets/images/errorback.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0px;
    }


</style>

<script setup>

const { error } = defineProps({
    error: Object
})

console.log(error)


</script>