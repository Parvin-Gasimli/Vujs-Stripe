<template>
    <div :id="`ProductComponent${product.id}`" class="bg-white inline-block rounded-lg shadow-lg 
    hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
    cursor-pointer max-w-[400px] w-full
    ">
        <NuxtLink :to="`/item/${product.id}`">
            <img class="rounded-t" :src="product.url" />
        </NuxtLink>
        <div id="ProductDetails">
            <span class="flex justify-between items-center  gap-3 px-1 pt-1">
                <span class="text-[#FF6674] font-semibold">${{ PriceComputed }}</span>
                <span class="text-gray-500 text-sm text-light line-through">${{ oldPriceComputed }}</span>

            </span>
        </div>

    </div>
</template>

<script setup>
const props = defineProps(['product'])
const { product } = toRefs(props)
const PriceComputed = computed(() => {
    const price = parseFloat(product.value.price / 100);

    if (!isNaN(price)) {
        return price.toFixed(2);
    } else {
        return "Invalid Price";
    }
})
const oldPriceComputed = computed(() => {
    const oldPrice = parseFloat(product.value.oldprice / 100);

    if (!isNaN(oldPrice)) {
        return oldPrice.toFixed(2);
    } else {
        return "Invalid Price";
    }
});
</script>

<style lang="sass" scoped>

</style>