<template>
  <div class="product-container">
    <div class="product-image">
      <img :src="product.image" />
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p v-if="product.inventory > 10" class="in-stock">In stock</p>
      <p v-else-if="product.inventory <= 10 && product.inventory > 0" class="almost-sold-out">Almost sold out</p>
      <p v-else class="out-of-stock">Out of stock</p>
      <ul>
        <li v-for="detail in product.details" :key="detail">{{ detail }}</li>
      </ul>
      <div v-for="variant in product.variants" :key="variant.id">{{ variant.color }}</div>
      <button class="cart-button" @click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  product: Object,
  addToCart: Function
})
</script>

<style scoped>
.product-container {
  display: flex;
  gap: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}
.product-image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
.cart-button { margin-top: 10px; }
.in-stock { color: green; }
.almost-sold-out { color: orange; }
.out-of-stock { color: red; }
</style>
