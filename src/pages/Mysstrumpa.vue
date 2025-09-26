<template>
  <div class="elegant-socks-wrapper">

    <Navbar />
    <Cart />

    
    <section class="hero-section">
  <video autoplay muted loop class="hero-video">
    <source src="../assets/videos/video-shoes1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="hero-content">
    <h1>Elevate Your Style with Elegant Socks</h1>
    <p>Discover our exclusive collection of premium socks designed for the modern gentleman.</p>
    <button class="hero-btn">Shop Collection</button>
  </div>
</section>


    
    <section class="features-section">
      <div class="feature-card">
        <h3>Premium Materials</h3>
        <p>Crafted from the finest cotton, merino wool and silk blends.</p>
      </div>
      <div class="feature-card">
        <h3>Modern Design</h3>
        <p>Timeless elegance with subtle patterns for every business occasion.</p>
      </div>
      <div class="feature-card">
        <h3>Perfect Fit</h3>
        <p>Comfortable and durable, designed to keep you on your toes all day.</p>
      </div>
    </section>

    
    <section class="product-gallery">
      <h2>Best Sellers</h2>
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">{{ product.price }} SEK</p>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </section>

    <!-- PROMO SEKCIJA / WOW EFEKT -->
    <section class="promo-section">
      <div class="promo-content">
        <h2>Limited Offer</h2>
        <p>Make your first purchase today and get <strong>20% OFF</strong> our premium collection!</p>
        <button class="promo-btn">Shop Now</button>
      </div>
      <!-- Ubaci sliku / ilustraciju za elegantni wow efekt -->
      <!-- Example: <img src="src/assets/images/promo-elegant.jpg" alt="Elegant promo"> -->
    </section>

    
    <section class="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div class="testimonial-card">
        <p>"These socks are a game-changer! Perfect for the office and formal events."</p>
        <span>- John D., CEO</span>
      </div>
      <div class="testimonial-card">
        <p>"Quality and comfort in one. I feel more confident in every meeting."</p>
        <span>- Mark T., Entrepreneur</span>
      </div>
    </section>

    <Footer />

  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Cart from '../components/Cart.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';



import stripedSocks from '../assets/images/striped-socks.jpg'
import classicSocks from '../assets/images/classic-socks.jpg'
import blackClassicSocks from '../assets/images/black-classic-socks.jpg'

const products = ref([
  {
    id: 1,
    name: 'Classic Black',
    image: blackClassicSocks,
    description: 'Elegant black socks, perfect for formal attire.',
    price: 79
  },
  {
    id: 2,
    name: 'Striped Elegance',
    image: stripedSocks,
    description: 'Subtle stripes for a touch of sophistication.',
    price: 89
  },
  {
    id: 3,
    name: 'Luxury Cotton',
    image: classicSocks,
    description: 'Soft cotton with a comfortable fit for all-day wear.',
    price: 99
  },
]);

const addToCart = (product) => {
  console.log(`${product.name} added to cart`);
};
</script>

<style scoped>
.elegant-socks-wrapper {
  font-family: 'Helvetica Neue', sans-serif;
  color: #222;
  background: #f8f8f8;
}


.hero-section {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-content h1 {
  color:#2c3e50;
  font-size: 3rem;
  margin-bottom: 20px;
}
.hero-content p {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 30px;
}
.hero-btn {
  background: linear-gradient(135deg, #4a90e2, #50e3c2);
  color: #fff;
  border: none;
  padding: 14px 28px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.hero-btn:hover {
  transform: translateY(-3px);
}
.hero-image img {
  border-radius: 20px;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
}


.features-section {
  display: flex;
  justify-content: space-around;
  margin: 60px 20px;
}
.feature-card {
  background: #fff;
  padding: 30px 20px;
  border-radius: 16px;
  width: 28%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: center;
}
.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #2c3e50;
}
.feature-card p {
  font-size: 1rem;
  color: #555;
}


.product-gallery {
  margin: 60px 20px;
  text-align: center;
}
.product-gallery h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #2c3e50;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}
.product-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}
.product-card:hover {
  transform: translateY(-5px);
}
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 15px;
}
.price {
  font-weight: bold;
  color: #4a90e2;
  margin: 10px 0;
}
.product-card button {
  background: #2c3e50;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.product-card button:hover {
  background: #4a90e2;
}


.promo-section {
  background: linear-gradient(135deg, #2c3e50, #4a90e2);
  color: #fff;
  padding: 60px 40px;
  margin: 60px 20px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.promo-content h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}
.promo-content p {
  font-size: 1.2rem;
  margin-bottom: 25px;
}
.promo-btn {
  background: #fff;
  color: #2c3e50;
  border: none;
  padding: 14px 28px;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
}
.promo-btn:hover {
  background: #50e3c2;
  color: #fff;
}


.testimonial-section {
  background: #f2f2f2;
  padding: 60px 20px;
  text-align: center;
  border-radius: 20px;
  margin: 60px 20px;
}
.testimonial-section h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #2c3e50;
}
.testimonial-card {
  max-width: 700px;
  margin: 0 auto 20px;
  background: #fff;
  padding: 30px 20px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}
.testimonial-card p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 10px;
}
.testimonial-card span {
  font-weight: bold;
  color: #2c3e50;
}

</style>
