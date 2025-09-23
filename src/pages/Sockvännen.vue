<template>
  <div class="sockvännen-wrapper">

  <Navbar />

  <div class="sockvännen-page">
    <section class="carousel-container">

    <Carousel :autoplay="3000" :wrap-around="true">
      <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel-slide" :style="{ backgroundImage: `url(${slide.image})`}">
          <div class="carousel-content">
                  <h1>Keep Your Feet Warm This Winter!</h1>
                  <p>Discover our cozy socks collection and enjoy comfort all season long.</p>
                  <button class="shop-now">Shop Now</button>
             </div> 
          </div>
       </Slide>
      <template #addons>
          <Navigation />
          <Pagination />
        </template>
    </Carousel>
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
import winterSocks1 from '../assets/images/winter-socks1.jpg'


import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const slides = [

  {
    image: winterSocks1,
    title: 'Keep Your Feet Warm',
    text: 'Discover our cozy winter socks!'
  },

  {
    image: warmHugSocks,
    title: 'New Collection',
    text: 'Fresh designs just arrived'
  },

  {
    image: goldenStitchesSocks,
    title: 'Elegant Warmth',
    text: 'Golden details for winter nights'
  }
]

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

<style scoped>

.carousel-container {
  background: url('@/assets/images/winter-background2.jpg') no-repeat center center;
  background-size: cover;
  padding: 40px 0;
}


.carousel-slide {
  height: 50vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.carousel-slide::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);             /* tamni overlay za kontrast teksta */
}

.carousel-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  max-width: 600px;
  padding: 20px;
}

.carousel-content h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.carousel-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.shop-now {
  padding: 12px 28px;
  background: linear-gradient(135deg, #d6336c, #f59f00);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.shop-now:hover {
  background: linear-gradient(135deg, #f76707, #e03131);
}

</style>
