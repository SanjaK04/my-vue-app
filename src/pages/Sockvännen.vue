<template>
  <div class="sockvännen-wrapper">

  <Navbar />

  <div class="sockvännen-page">
    <section class="hero">
      <h1>Keep Your Feet Warm This Winter!</h1>
      <p>Discover our cozy socks collection and enjoy comfort all season long.</p>
      <button class="shop-now">Shop Now</button>
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
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';
import cozySocks from '../assets/images/cozy-socks.jpg'
import warmHugSocks  from '../assets/images/warm-hug-socks.jpg'
import chillChasersSocks from '../assets/images/chill-chasers-socks.jpg'
import joyfulJumpsSocks from '../assets/images/joyful-jumps-socks.jpg'
import goldenStitchesSocks from '../assets/images/golden-stitches-socks.jpg'

const products = ref([
 
{
    id: 1,
    name: 'Cozy socks',
    image: cozySocks,
    description: 'Perfect for keeping your feet comfortable all day long.',
    price: 150
},

{
    id: 2,
    name: 'Warm hug',
    image: warmHugSocks,
    description: 'Cozy pairs that wrap your feet in gentle warmth and comfort.',
    price: 300
},
   

{
   id: 3,
   name: 'Chill chasers',
   image: chillChasersSocks,
   description: 'Soft and cozy socks perfect for relaxing and unwinding.',
   price:230
},

{
    id: 4,
    name: 'Joyful jumps',
    image: joyfulJumpsSocks,
    description: 'Keep your feet warm while adding a playful bounce to every step.',
    price: 320

},

{
    id: 5,
    name: 'Golden stitches',
    image: goldenStitchesSocks,
    description: 'Elegant warm socks with golden stitching, made for romantic evenings and chilly winter nights. ',
    price: 310

}

])

const addToCart = (product) => {
  console.log(`${product.name} added to cart`);
};


</script>