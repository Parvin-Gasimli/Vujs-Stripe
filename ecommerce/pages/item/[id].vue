<template>
    <div>
        <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-center items-center mr-auto w-full">
                <div class="md:w-[100%] mr-auto">
                    <img class="rounded-lg object-fit detailimg" v-if="currentImage" :src="currentImage" />

                    <div v-if="images[0] !== ''" class="flex items-center gap-[10px] justify-center mt-2">
                        <div v-for="image in images">
                            <img @mouseover="currentImage = image" @click="currentImage = image" height="300" width="300"
                                class="rounded-lg object-fit w-full -full" :src="image"
                                :class="currentImage === image ? 'border-2 border-blue-500' : ''" />

                        </div>

                    </div>
                </div>


            </div>

        </div>

    </div>
</template>

<script setup>
let currentImage = ref(null)

onMounted(() => {
    watchEffect(() => {
        currentImage.value = "https://picsum.photos/id/77/200/300"
        images.value[0] = "https://picsum.photos/id/77/200/300"
    })
})
const images = ref([
    "",
    "https://picsum.photos/id/2/200/300",
    "https://picsum.photos/id/12/200/300",
    "https://picsum.photos/id/33/200/300",
    "https://picsum.photos/id/44/200/300",
    "https://picsum.photos/id/56/200/300",
])

</script>

<style lang="scss" scoped>
.detailimg {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
</style>