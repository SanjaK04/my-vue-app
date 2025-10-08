<template>
  <div class="home-wrapper">

    
    <section class="hero-section">
      <video autoplay muted loop class="hero-video">
        <source src="../assets/videos/shoes1.mp4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="hero-content">
        <h1>Elevate Your Style with Elegant Socks</h1>
        <p>Discover our exclusive collection of premium socks designed for the modern gentleman.</p>
        
        <button class="hero-btn" @click="goToCollection('Elegant')">Shop Collection</button>
      </div>
    </section>


    <section class="categories">
      <div class="category-card">
        <h3>Business</h3>
        <p>Elegant socks made for sharp looks and professional settings. Elevate your professional wardrobe with our premium business socks.
        Designed for comfort and style, they keep you looking sharp all day.
        Subtle patterns and classic colors complement any suit or blazer.
        Perfect for meetings, presentations, or networking events.
        Experience the confidence that comes from dressing with elegance from head to toe.</p>
      </div>
      <div class="category-card">
        <h3>Casual</h3>
        <p>Comfortable styles for weekends, leisure, and everyday wear. Enjoy effortless comfort with socks made for everyday adventures.
        Soft, breathable fabrics keep your feet happy all day long.
        Perfect for weekends, walks, or just relaxing at home.
        Casual designs that match your laid-back style.
        Step into comfort without sacrificing style, wherever life takes you.</p>
      </div>
      <div class="category-card">
        <h3>Winter Essentials</h3>
        <p>Keep your feet warm and stylish during cold seasons. Cozy up with socks designed to keep you warm all winter.
        Thick, insulated fabrics protect your feet from chilly weather.
        Stylish patterns make cold days feel a little brighter.
        Perfect for layering or wearing on their own at home.
        Stay comfortable and fashionable, no matter how low the temperature drops.</p>
      </div>
    </section>


    
    <section class="search-section">
      <SearchFilter
        :items="store.products.filter(p => p.featured && p.showOnHome !== false)"
        @update:filtered="filteredProducts = $event"
      />
    </section>

    
    <section class="best-sellers">
      <h2>Best Sellers</h2>
      <section class="home-product-section">
        <ProductCard
          v-for="(product, index) in filteredProducts"
          :key="product.id"
          :product="product"
          :index="index"
          mode="home"
        />
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

    
    <Cart :cart="store.cart" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/store/cart'

import ProductCard from '@/components/ProductCard.vue'
import SearchFilter from '@/pages/SearchFilter.vue'
import Cart from '@/components/Cart.vue'

const store = useCartStore()
const router = useRouter()

const filteredProducts = ref(store.products.filter(p => p.featured))


const goToCollection = (collectionName) => {
  router.push({ name: collectionName }) // npr. 'sports' ili 'elegant'
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  overflow: hidden;
  
}


.hero-video {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 80%;
  object-fit: cover;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  padding: 20px;
}


.hero-content h1 {
  color:#f5f5f5;
  font-size: 3.5rem;
  margin-bottom: 60px;
}
.hero-content p {
  color: #f5f5f5;
  font-size: 1.6rem;
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

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  padding: 60px 20px;
  background: #f5f5f5;
  margin-bottom: 100px;
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
</style>
