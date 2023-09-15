<template>
    <!-- <MainLayout> -->
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            <div v-if="products" v-for="product in products" :key="product">
                <ProductsComponent :product="product" />
            </div>
        </div>
    </div>
    <!-- </MainLayout> -->
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
const products = [
    {
        id: 1,
        title: "Product 1",
        price: 100,
        oldprice: 200,
        url: "https://picsum.photos/200/300"

    },
    {
        id: 2,
        title: "Product 2",
        price: 200,
        oldprice: 300,
        url: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        title: "Product 3",
        price: 300,
        oldprice: 400,
        url: "https://picsum.photos/200/300"
    },
    {
        id: 4,
        title: "Product 3",
        price: 300,
        oldprice: 400,
        url: "https://picsum.photos/200/300"
    },
    {
        id: 5,
        title: "Product 3",
        price: 300,
        oldprice: 400,
        url: "https://picsum.photos/200/300"
    },
    {
        id: 6,
        title: "Product 3",
        price: 300,
        oldprice: 400,
        url: "https://picsum.photos/200/300"
    }
    ,
    {
        id: 7,
        title: "Product 3",
        price: 300,
        oldprice: 400,
        url: "https://picsum.photos/200/300"
    },
    {
        id: 8,
        title: "Product 3",
        price: 300,
        oldprice: 400,
        url: "https://picsum.photos/200/300"
    }
]

</script>