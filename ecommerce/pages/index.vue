<template>
    <MainLayout>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                <h1>
                    dbsjdj
                </h1>
                <div v-if="Products" v-for="product in Products" :key="product">
                    <h1>
                        {{ product.title }}
                    </h1>
                    <!-- <ProductComponent :product="product" /> -->
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
const Products = [
    {
        id: 1,
        title: "Product 1",
        price: 100,
        url: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        title: "Product 2",
        price: 200,
        url: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        title: "Product 3",
        price: 300,
        url: "https://picsum.photos/200/300"
    }
]

</script>