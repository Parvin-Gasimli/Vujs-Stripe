<template>
    <div :id="`ProductComponent${product.id}`" class="bg-white inline-block rounded-lg shadow-lg 
    hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
    cursor-pointer max-w-[400px] w-full
    ">
        <NuxtLink :to="`/item/${product.id}`">
            <img class="rounded-t w-full h-[200px]" :src="product.url" />
        </NuxtLink>
        <div id="ProductDetails">
            <span class="flex justify-between items-center  gap-3 px-1 pt-1">
                <span class="text-[#FF6674] font-semibold">${{ PriceComputed }}</span>
                <span class="text-gray-500 text-sm text-light line-through">${{ oldPriceComputed }}</span>
            </span>
            <span class="px-1 my-2  text-[#FF6674] text-xs font-semibold">
                extra 10% off
            </span>
            <div class="flex items-center gap-1 px-1 ">
                <span class="px-[10px] py-[4px] rounded-sm text-[9px]  my-2  text-white bg-[#FD374F] text-xs font-semibold">
                    Welcome Deal
                </span>
                <span
                    class="px-[10px] py-[4px] rounded-sm text-[10px]  my-2  text-[#FFF] bg-[#000] border-[#000] text-xs font-semibold">
                    Welcome Deal
                </span>
            </div>
            <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
                5.000+sold
                <Icon name="*" color="#757575" class="ml-1.5" />4.7
            </p>
            <p class="px-1 pt-0.5 text-xs text-[#252525]">
                {{ product.title.substring(0, 60) }} </p>
            <p class="px-1 pb-1">
                <span class="text-[#009A66] text-xs font-semibold">
                    Free Shipping
                </span>

            </p>
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