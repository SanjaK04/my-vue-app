<template>
  <div class="sockvännen-wrapper">

  <Navbar />

  <section class="sockvännen-hero">
     <h1>Keep Your Feet Warm This Winter!</h1>
                  <p>Discover our cozy socks collection and enjoy comfort all season long.</p>
                  <button class="shop-now">Shop Now</button>
  </section>

  <div class="sockvännen-page">
    <section class="carousel-container">

    <Carousel :autoplay="3000" :wrap-around="true">
      <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel-slide" :style="{ backgroundImage: `url(${slide.image})`}">
          <div class="carousel-content">
                 <h2>{{ slide.title }}</h2>
                 <p>{{ slide.text }}</p>
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
      <div v-for="product in products" :key="product.id" class="shop-card">
        <img :src="product.photo" :alt="product.name" class="product-photo" />
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
import winterSocks2 from '../assets/images/winter-socks2.jpg'
import winterShoes1 from '../assets/images/winter-shoes1.jpg'
import winterShoes2 from '../assets/images/winter-shoes2.jpg'

import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const slides = [

  {
    image: winterSocks1,
    title: 'Keep Your Feet Warm',
    text: 'Discover our cozy winter socks!'
  },

  {
    image:  winterShoes1,
    title: 'Elegant Warmth',
    text: 'Golden details for winter nights.'
  },

   {
    image: winterSocks2,
    title: 'New Collection',
    text: 'Fresh designs just arrived.'
  },

  {
    image: winterShoes2,
    title: 'Rainy Cold Days',
    text: 'Keeping your feet warm and dry on cold and rainy days.'

  }
]

const products = ref([
 
{
    id: 1,
    name: 'Cozy socks',
    photo: cozySocks,
    description: 'Perfect for keeping your feet comfortable all day long.',
    price: 150
},

{
    id: 2,
    name: 'Warm hug',
    photo: warmHugSocks,
    description: 'Cozy pairs that wrap your feet in gentle warmth and comfort.',
    price: 300
},
   

{
   id: 3,
   name: 'Chill chasers',
   photo: chillChasersSocks,
   description: 'Soft and cozy socks perfect for relaxing and unwinding.',
   price:230
},

{
    id: 4,
    name: 'Joyful jumps',
    photo: joyfulJumpsSocks,
    description: 'Keep your feet warm while adding a playful bounce to every step.',
    price: 320

},

{
    id: 5,
    name: 'Golden stitches',
    photo: goldenStitchesSocks,
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
  border-radius: 16px;
}


.carousel-slide {
  height: 50vh;
  width: 40%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

.product-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);                    /* 3 kartice u prvom redu */
  gap: 20px;
}

.product-gallery .shop-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 15px;
}

.product-gallery .shop-card img {
  width: 100%;
  height: 250px;                                        /* iste visine za prve tri kartice */
  object-fit: cover;
  border-radius: 12px;
}

                                                    /*donji red za vece kartice */
.product-gallery .shop-card:nth-child(n+4) {
  grid-column: span 2;                             /* zauzimaju dva stupca */
}

.product-gallery .shop-card:nth-child(n+4) img {
  height: 300px;                                   /* veća visina za donji red */
}


.shop-card {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  padding: 15px;
}

.product-photo {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
}
</style>
