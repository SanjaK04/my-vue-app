<template>
  <div>
    <Navbar />
    <Hero :hero="hero" />

    
    <SearchFilter :items="products" @update:filtered="filteredProducts = $event" />

    
    <div class="product-display">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
      />
    </div>

    <Cart :cart="products" />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Cart from '../components/Cart.vue'
import ProductCard from '../components/ProductCard.vue'
import Footer from '../components/Footer.vue'
import SearchFilter from '../components/SearchFilter.vue'

import { products, addToCart } from '../store/products.js'
import { ref } from 'vue'


const filteredProducts = ref([...products.value])
</script>
