<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import {useProductStore} from '@/stores/ProductStore'
import {useCartStore} from '@/stores/cartStore'

const cartStore = useCartStore()
const productStore = useProductStore()

// addProducts asynchronously from productStore
productStore.addProducts()
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @add-to-cart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
