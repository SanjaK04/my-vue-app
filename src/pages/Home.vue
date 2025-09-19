<template>
  <div>
    <Navbar />
    
    <Hero :hero="hero"></Hero>

    <div class="product-display">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
     
    <Cart :cart="products"></Cart>
    <Footer />


  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Cart from '../components/Cart.vue'
import ProductCard from '../components/ProductCard.vue'
import Footer from '../components/Footer.vue'
import { products, addToCart } from '../store/products.js'



</script>

<style scoped>

</style>

