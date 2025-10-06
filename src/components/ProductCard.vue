<template>
  <div :class="['home-product-row', { reverse: index % 2 !== 0}]">
    <div class="home-product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="home-product-info">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>

     

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

      <button v-if="addToCart" class="button" @click="addToCart(product)">Add To Cart</button>

     <button v-else class="button" @click="exploreCollection(product)">Explore Collection</button>
     
    </div>
  </div>
</template>

<script setup>

import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/store/cart'


const props = defineProps({
  product: Object,
  index: Number,
  mode: {
    type: String,
    default: 'default' 
  }
})

const router = useRouter()

const store = useCartStore()

const addToCart = (product) => {
  store.addToCart(product)
} 

const exploreCollection = (product) => {
  if (product.collectionRoute) {
    router.push({ name: product.collectionRoute })
  }
}

const getVariantColor = (color) => {
  switch(color?.toLowerCase()) {
    case 'blue': return '#2196F3';
    case 'green': return '#4CAF50';
    case 'colorful': return 'linear-gradient(90deg, #ff6ec4, #7873f5)';
    default: return '#ccc';
  }
}
</script>

<style scoop>
 .home-product-section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: grid;
  gap: 60px;
}
.home-product-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image info";
  gap: 32px;
  align-items: center;
  background: #fff;
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(23, 34, 45, 0.06);
}
.home-product-row.reverse {
  grid-template-areas: "info image";
}
.home-product-image { grid-area: image; }
.home-product-info {
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-product-image img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
}
.home-product-info h2 {
  margin: 0 0 12px;
  color: #1b263b;
  font-size: 1.6rem;
}
.home-product-info p {
  color: #444;
}
.home-product-info .button {
  align-self: center;
  width: fit-content;
  max-width: 200px;
  padding: 12px 24px;
  color: #fff;
  border-radius: 26px;
  background: #d4af37;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 25px;
}
.home-product-info .button:hover {
  transform: translateY(-3px);
}




</style>