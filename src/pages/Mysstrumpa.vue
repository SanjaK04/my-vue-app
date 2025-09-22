<template>

  <Navbar />

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

    <Footer />
    
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
import pinkSocks from '../assets/images/pink-socks.jpg'
import textSocks from '../assets/images/text-socks.jpg'
import Footer from '@/components/Footer.vue';


const products = ref([ 
  {
    id: 1,
    name: 'Pink socks',
    image: pinkSocks,
    description: 'Comfortable cotton socks in green.',
    price: 49
  },
  {
    id: 2,
    name: 'Text socks',
    image: textSocks,
    description: 'Elegant blue socks for everyday wear.',
    price: 59
  },
                                 // Dodaj ostale proizvode prema potrebi
]);

const addToCart = (product) => {
  console.log(`${product.name} added to cart`);
};
</script>

<style scoped>
.mysstrumpa-page {
  font-family: 'Arial', sans-serif;
  margin: 20px;
}

.hero {
  text-align: center;
  background-color: #f0f0f0;
  padding: 50px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #333;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
}

.product-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 250px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
}

.product-card p {
  font-size: 1rem;
  color: #666;
}

.price {
  font-size: 1.2rem;
  color: #000;
  font-weight: bold;
  margin: 10px 0;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}
</style>
