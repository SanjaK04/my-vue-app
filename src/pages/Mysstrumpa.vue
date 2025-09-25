<template>
  <div class="mysstrumpa-wrapper">

  <Navbar />
  <Cart />

  <div class="mysstrumpa-page">
    <section class="hero">
      <h1>Welcome to the world of comfortable and colorful socks!</h1>
      <p>Discover our collection of socks that will brighten your day.</p>
    </section>

    <section class="product-gallery">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">{{ product.price }} SEK</p>
        <button @click="addToCart(product)">Add to cart</button>
      </div>
    </section>
  </div>

    <Footer />
    
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Cart from '../components/Cart.vue'
import { ref } from 'vue';
import pinkSocks from '../assets/images/pink-socks.jpg'
import textSocks from '../assets/images/text-socks.jpg'
import Footer from '@/components/Footer.vue';
import livelySocks from '../assets/images/lively-socks.jpg'


const products = ref([ 
  {
    id: 1,
    name: 'Pink socks',
    image: pinkSocks,
    description: 'Comfortable cotton socks in pink.',
    price: 49
  },
  {
    id: 2,
    name: 'Text socks',
    image: textSocks,
    description: 'Socks for everyday wear.',
    price: 59
  },

  {
    id: 3,
    name: 'Crazy socks',
    image: livelySocks,
    description: 'Brighten up your day.',
    price: 70
  },

 
                                 // Dodaj ostale proizvode prema potrebi
]);

const addToCart = (product) => {
  console.log(`${product.name} added to cart`);
};
</script>

<style scoped>

</style>
