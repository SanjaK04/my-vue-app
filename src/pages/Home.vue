<template>
  <div class="home-wrapper">
    <Navbar />

    <section class="hero-section">
      <div class="hero-content">
        <h1>Step Into Elegance & Comfort</h1>
        <p>Premium socks designed for men who value style, confidence, and all-day comfort.</p>
        <button class="cta-btn">Shop Collection</button>
      </div>
      <div class="hero-media">
        
        <img src="@/assets/images/black-socks.jpg" alt="Elegant socks hero" />
       
      </div>
    </section>


    <section class="search-section">
      <SearchFilter :items="products" @update:filtered="filteredProducts = $event" />
    </section>
   
    <section class="categories">
      <div class="category-card">
        <h3>Business</h3>
        <p>Elegant socks made for sharp looks and professional settings.</p>
      </div>
      <div class="category-card">
        <h3>Casual</h3>
        <p>Comfortable styles for weekends, leisure, and everyday wear.</p>
      </div>
      <div class="category-card">
        <h3>Winter Essentials</h3>
        <p>Keep your feet warm and stylish during cold seasons.</p>
      </div>
    </section>

    
    <section class="best-sellers">
      <h2>Best Sellers</h2>
      <section class="product-section">
  <div
    v-for="(product, index) in filteredProducts"
    :key="product.id"
    class="home-product-row"
    :class="{ reverse: index % 2 !== 0 }"
  >
    
    <div class="home-product-image">
      <img :src="product.image" :alt="product.name" />
    </div>

  
    <div class="home-product-info">
      <h2>{{ product.name }}</h2>
      <p>
        {{ product.description }} <br />
        These premium socks are crafted for comfort, style, and durability.
      </p>
      <p class="price">{{ product.price }} SEK</p>
      <button class="button" @click="addToCarta(product)">Add to Cart</button>
    </div>
  </div>
</section>

</section>

    
    <section class="promo-banner">
      <h2>Special Offer</h2>
      <p>Get 20% off your first order. Limited time only.</p>
      <button class="promo-btn">Claim Offer</button>
    </section>

   
    <section class="blog-section">
      <h2>From Our Journal</h2>
      <div class="blog-grid">
        <div class="blog-card">
          <h3>Why Premium Socks Matter</h3>
          <p>Discover how quality socks can upgrade your wardrobe and confidence.</p>
        </div>
        <div class="blog-card">
          <h3>Style Guide</h3>
          <p>Learn how to pair elegant socks with suits, shoes, and casual outfits.</p>
        </div>
      </div>
    </section>

    
    <section class="newsletter">
      <h2>Join Our Inner Circle</h2>
      <p>Exclusive offers, early access, and style tips—straight to your inbox.</p>
      <div class="newsletter-form">
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </section>

    <Cart :cart="products" />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Cart from '../components/Cart.vue'
import Footer from '../components/Footer.vue'

import { products, addToCart } from '../store/products.js'
import { ref } from 'vue'
import SearchFilter from '@/components/SearchFilter.vue'

const filteredProducts = ref([...products.value])
</script>

<style scoped>

.hero-section {
  display: grid;
  grid-template-columns: 1fr 480px;
  gap: 40px;
  align-items: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #172433 0%, #1b263b 100%); 
  color: #fff;
  border-radius: 12px;
  margin: 20px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 30px;
  max-width: 600px;
  color: #dfe9ef;
}

.cta-btn {
  padding: 14px 32px;
  background: #d4af37;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;

}
.cta-btn:hover {
  background: #b8912f;
}

.hero-media img {
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  padding: 0px;
}

.home-product-section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: grid;
  gap: 40px;
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

.home-product-image { 
  grid-area: image; 
}

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

.home-product-info .lead {
  color: #444;
  margin-bottom: 12px;
  font-size: 1.05rem;
}

.home-product-info .more {
  color: #666; 
  margin-bottom: 18px; 
  line-height: 1.5; 
}

.home-product-info .price {
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 16px;
  color: #1b263b;
}

.home-product-info .button {
  width: fit-content;
  max-width: 200px;
  padding: 12px 24px;
  color: #fff;
  border-radius: 26px;
  background: #d4af37;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}



.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  padding: 60px 20px;
  background: #f5f5f5;
}
.category-card {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}


.best-sellers {
  padding: 80px 20px;
  text-align: center;
}
.best-sellers h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #1b263b;
}


.promo-banner {
  background: linear-gradient(135deg, #1b263b, #2c3e50);
  color: #fff;
  text-align: center;
  padding: 60px 20px;
  margin: 60px 0;
  border-radius: 16px;
}
.promo-btn {
  margin-top: 20px;
  padding: 12px 28px;
  background: #d4af37;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
}


.blog-section {
  padding: 80px 20px;
  background: #f5f5f5;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
}
.blog-card {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}


.newsletter {
  text-align: center;
  padding: 80px 20px;
}
.newsletter-form {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.newsletter-form input {
  padding: 12px;
  border-radius: 30px;
  border: 1px solid #ccc;
  width: 280px;
}
.newsletter-form button {
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  background: #d4af37;
  cursor: pointer;
}

.product-section {
  display: grid;
  gap: 60px;
  margin: 80px 20px;
}

.product-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
}

.product-row.reverse {
  grid-template-areas: "text-image";
}

.product.row:not(.reverse) {
  grid-template-areas: "image text";
}

.product-image {
  grid-area: image;
}

.product-info {
  grid-area: text;
}

.product-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 6px 18px  rgba(0, 0, 0, 0.1);
}

.product-info p {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #1b263b;
}

.product-info .price {
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 20px;
}

.product-info button {
  padding: 12px 24px;
  border: none;
  background: #d4af37;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}


</style>

