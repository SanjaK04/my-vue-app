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

      <div class="product-details">
        <span v-for="detail in product.details" :key="detail" class="detail-badge">
          {{ detail }}
        </span>
      </div>

      <div class="product-variants">
        <span v-for="variant in product.variants" :key="variant.id" class="variant-badge" :style="{backgroundColor: getVariantColor(variant.color)}">
          {{ variant.color }}
        </span>
      </div>

      <button class="cart-button" @click="exploreCollection(product)">Explore Collection</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  product: Object,
  exploreCollection: Function
})

const getVariantColor = (color) => {
  switch(color?.toLowerCase()) {
    case 'blue': return '#2196F3';
    case 'green': return '#4CAF50';
    case 'colorful': return 'linear-gradient(90deg, #ff6ec4, #7873f5)';
    default: return '#ccc';
  }
}
</script>

