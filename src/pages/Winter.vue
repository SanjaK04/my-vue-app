<template>
  <div class="winter-wrapper">

  <section class="winter-hero">
     <h1>Keep Your Feet Warm This Winter!</h1>
                  <p>Discover our cozy socks collection and enjoy comfort all season long.</p>
                  <button class="shop-now">Shop Now</button>
  </section>

  <div class="winter-page">
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

    <section class="highlight-section">
      <div class="highlight-content">
        <h2>Best seller</h2>
        <p>Check out our most popular cozy socks and winter essentials! Each pair is carefully designed to keep your feet warm and comfortable, no matter how cold it gets outside. From soft wool blends to stylish patterns, we have something for every taste and occasion. Our winter essentials also include scarves, mittens, and slippers, making sure you’re covered from head to toe. By subscribing to our newsletter, you’ll receive exclusive offers that aren’t available anywhere else. 
           Don’t miss out—subscribe today and make every winter day warm, stylish, and comfortable!</p>
        <button class="highlight-cta" @click="showModal = true">Subscribe now</button>
      </div>
 

    
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content">
        <h3>Subscribe to our newsletter</h3>
        <p>Enter your email address to receive our top sellers, exclusive deals, and cozy tips straight to your inbox.</p>
        <input type="email" placeholder="Your email" v-model="email" />
        <button @click="subscribe">Subscribe</button> 
        <button class="modal-close" @click="showModal = false">&times;</button>
      
      </div>
    </div>
</section>


<section class="blog-section">
  <h2>From Our Blog</h2>
  <div class="blog-cards">
    <div class="blog-card" v-for="(post, index) in blogPosts" :key="index">
      <img :src="post.image" :alt="post.title" />
      <div class="blog-content">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <button class="blog-cta">Read More</button>
      </div>
    </div>
  </div>
</section>


    <section class="winter-products">
      <h2>Winter Socks</h2>
      <div class="product-grid">
        <div v-for="product in winterProducts"
        :key="product.id"
        class="shop-card">

        <img :src="product.photo" :alt="product.name" class="product-photo" @click="openImage(product.photo)" />

          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">{{ product.price }} SEK</p>
          <button class="add-btn" @click="addToCart(product)">Add To Cart</button>
        </div>
      </div>


    </section>

    <section class="product-gallery">
      <div v-for="product in products" :key="product.id" class="shop-card">
        <img :src="product.photo" :alt="product.name" class="product-photo" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">{{ product.price }} SEK</p>
        <button class="add-btn" @click="addToCart(product)">Add to cart</button>
      </div>
    </section>
  </div>


    <div v-if="showPromo" class="promo-overlay" @click.self="closePromo">
      <div class="promo-popup">
        <button class="promo-close" @click="closePromo">&times;</button>
        <h2>Special Offer</h2>
        <p>For a limited time only:
          Make your first order now and enjoy **30% OFF**!</p>
          <button class="promo-btn">Shop Now</button>
      </div>
    </div>
    
  </div>

</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import { useCartStore } from '@/store/cart';

import cozySocks from '../assets/images/cozy-socks.jpg'
import warmHugSocks  from '../assets/images/warm-hug-socks.jpg'
import chillChasersSocks from '../assets/images/chill-chasers-socks.jpg'
import joyfulJumpsSocks from '../assets/images/joyful-jumps-socks.jpg'
import goldenStitchesSocks from '../assets/images/golden-stitches-socks.jpg'
import winterSocks1 from '../assets/images/winter-socks1.jpg'
import winterSocks2 from '../assets/images/winter-socks2.jpg'
import winterShoes1 from '../assets/images/winter-shoes1.jpg'
import winterShoes2 from '../assets/images/winter-shoes2.jpg'
import winterBlog4 from '../assets/images/winter-blog4.jpg'
import winterBlog2 from '../assets/images/winter-blog2.jpg'

import blogSki from '../assets/images/blog-ski.jpg'
import winterBlog3 from '../assets/images/winter-blog3.jpg'
import blogChristmas from '../assets/images/blog-christmas.jpg'

import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const store = useCartStore() 
const winterProducts = computed(() =>store.products.filter(product => product.category === 'winter'))



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

const showModal = ref(false);
const email = ref('');

const subscribe = () => {
  if(email.value) {
    alert(`Thanks' ${email.value} is now subscribed`);
    email.value = '';
    showModal.value = false;

  } else {
    alert(`Please enter a valid email adress`);
  }
  
}

const showPromo = ref(false);

const closePromo = () => {
  showPromo.value = false;
}


onMounted(() => {
  setTimeout (() => {
    showPromo.value = true;
  }, 3000);
});

const blogPosts = [
  {
  title: "5 Tips to Keep Your Feet Warm This Winter",
  excerpt: "Discover simple tricks to stay cozy during cold days - from layering techniques to choosing the right materials.",
  image: winterBlog4
  },

  {
    title: "How to Style Cozy Socks with Any Outfit",
    excerpt: "Learn how to combine comfort and fashion. Cozy socks aren’t just for home – wear them with boots or sneakers in style.",
    image: winterBlog2
  },

  {
    title: "Top Winter Essentials You Can’t Miss",
    excerpt: "From socks to scarves, here’s what you need in your wardrobe to stay warm, stylish, and ready for the season.",
    image: winterBlog3
  },

  {
    title: "Perfect Gift Ideas for the Holidays",
    excerpt: "Looking for thoughtful presents? Cozy socks make the perfect gift for family and friends – practical and heartwarming.",
    image: blogChristmas
  },

  {
    title:  "Why Warm Feet Mean Better Health",
    excerpt:  "Keeping your feet warm isn’t just about comfort – it also helps circulation and boosts overall winter wellbeing.",
    image: blogSki
  },


];


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



.winter-hero {
  position: relative;
  text-align: center;
  color: #fff;
  padding: 80px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3a506b, #5bc0be);      /* hladni zimski gradient */
  overflow: hidden;
  margin-top: 5%;
}

.winter-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/snowflakes.png');      /* lagane pahulje preko heroja */
  background-repeat: repeat;
  opacity: 0.15;
  pointer-events: none;
}

.hero-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;

}

.winter-hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.3);
}

.winter-hero p {
  font-size: 1.25rem;
  margin-bottom: 30px;
  line-height: 1.5;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.2);
}

.winter-hero .shop-now {
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  background-color: #ff6b6b;              /* kontrastna toplija boja */
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.winter-hero .shop-now:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

.winter-page {
  font-family: 'Arial', sans-serif;
  margin: 20px;
}

.winter-page .hero {
  text-align: center;
  background-color: #f0f0f0;
  padding: 50px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.winter-page .hero h1 {
  font-size: 2.5rem;
  color: #333;
}

.winter-page .hero p {
  font-size: 1.2rem;
  color: #666;
}



.carousel-container {
 padding: 20px 0;
 border-radius: 0;
 overflow: hidden;
 background: #f5f8f6;
 margin: 0 20px;
 
}


.carousel-slide {
  height: 70ch;
  width: 100%;
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

.carousel-content h2 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 0 2px 6px rgba(0,0,0,0.4);
}

.carousel-content p {
  font-size: 1.4rem;
  line-height: 1.6;
  text-shadow: 0 1px 4px rgba(0,0,0,0.3);
  max-width: 600px;
  margin: 0 auto;
}



:deep(.carousel__pagination-button) {
  background-color: #5bc0be;
}

:deep(.carousel__pagination-button--active) {
  background-color: #3a506b;                 /* aktivni indikator */
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


.highlight-section {
  background-color: #edf6f9;
  padding: 50px 20px;
  border-radius: 16px;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.highlight-content {
  max-width: 900px;
  text-align: center;
}

.highlight-content h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #3a506b;
  font-weight: 700;
}

.highlight-content p {
  font-size: 1.1rem;
  margin-bottom: 25px;
  color: #1e3d34;
  line-height: 1.6;
}

.highlight-cta {
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 28px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.highlight-cta:hover {
  background-color: #e65555;
  transform: translateY(-2px);
}

.blog-section {
  padding: 60px 20px;
  background-color: #f5f8f6;
  border-radius: 16px;
  margin: 40px 0;
  text-align: center;
}

.blog-section h2 {
  font-size: 2.2rem;
  color: #2c6e49;
  margin-bottom: 40px;
  font-weight: 700;
}

.blog-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  
}

.blog-card {
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}



.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.blog-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-content {
  padding: 20px;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.blog-content h3 {
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #2c6e49;
}

.blog-content p {
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  margin-bottom: 15px;
}

.blog-cta {
  align-self: flex-start;
  background-color: #ff6b6b;
  color: white;
  border:  none;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.blog-cta:hover {
  background-color: #e65555;
  transform: translateY(-2px);
}

.winter-products {
  padding: 50px 20px;
  text-align: center;
}

.winter-products h2 {
  font-size: 2rem;
  color: #2c6e49;
  margin-bottom: 40px;
  font-weight: 700;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.shop-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.shop-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.product-photo {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
  cursor: pointer;
}

.shop-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3d34;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.shop-card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.5;
}

.price {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c6e49;
}

.add-btn {
  margin-top: 10px;
  padding: 10px 22px;
  background-color: #2c6e49;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-btn:hover {
  background-color: #23563b;
  transform: scale(1.04);
}


.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
}


.modal-content {
  background-color: white;
  padding: 30px 40px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
}

.modal-content h3 {
  margin-bottom: 15px;
  color: #2c6e49;
}


.modal-content p {
  margin-bottom: 20px;
  color: #333;
  line-height: 1.5;
}

.modal-content input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.modal-content button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}

.modal-content button:hover {
  background-color: #e65555;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
}



.product-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);    
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
  grid-column: span 1;                               /* zauzimaju dva stupca */
}

.product-gallery .shop-card:nth-child(n+4) img {
  height: 300px;                                    /* veća visina za donji red */
}


.shop-card {
  background-color: #fefefe;
  border-radius: 14px;
  padding: 20px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);

}

.shop-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 14px rgba(0,0,0,0.1);
}

.shop-card img.product-photo {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}
  
.shop-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3d34;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.shop-card p {
  font-size: 1.05rem;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.5;
}

.shop-card .price {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c6e49;
}

.add-btn {
  margin-top: 10px;
  padding: 10px 22px;
  background-color: #2c6e49;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-btn:hover {
  background-color: #23563b;
  transform: scale(1.04);
}

.promo-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.5s ease;
}

.promo-popup {
  background: #fff;
  padding: 40px 30px;
  border-radius: 20px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  animation: slideDown 0.6s ease;
}

.promo-popup h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #2c6e49;
}

.promo-popup p {
  font-size: 1.2rem;
  margin-bottom: 25px;
  line-height: 1.6;
  color: #444;
}

.promo-btn {
  background: linear-gradient(135deg, #d6336c, #f59f00);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 28px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.promo-btn:hover {
  background: linear-gradient(135deg, #f76707, #e03131);
  transform: translateY(-2px)
}

.promo-close {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  color: #666;
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes slideDown {
  from {transform: translateY(-50px); opacity: 0;}
  to {transform: translateY(0); opacity: 1;}
}


</style>
