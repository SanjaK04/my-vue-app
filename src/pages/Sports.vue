
<template>
  <div class="sports-page">

    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Gear Up for Your Active Lifestyle</h1>
        <p>Premium sports socks for running, training, and outdoor adventures.</p>
        <button class="hero-btn">Shop Sports Collection</button>
      </div>
      <div class="hero-image">
        <img src="../assets/images/home-socks2.jpg" alt="Sports Collection" />
      </div>
    </section>

    <!-- FILTERS -->
    <section class="search-section">
      <SearchFilter
        :items="store.products.filter(p => p.category === 'sports')"
        @update:filtered="filteredProducts = $event"
      />
    </section>

    <!-- SPORTS PRODUCTS -->
    <section class="sports-products">
      <h2>Sports Collection</h2>
      <div class="sports-list">
        <div
          v-for="(product, index) in filteredProducts"
          :key="product.id"
          class="sports-card"
        >
          <img :src="product.image" :alt="product.name" class="sports-image"/>
          <div class="sports-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="price">{{ product.price ? product.price + ' SEK' : '' }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>

    <!-- PROMO BANNER -->
    <section class="sports-promo-banner">
      <h2>Special Sports Offer</h2>
      <p>Get 15% off your first sports order. Limited time only!</p>
      <button class="sports-promo-btn">Claim Offer</button>
    </section>

    <!-- BLOG / TIPS -->
    <section class="sports-blog-section">
      <h2>Sports Tips & Guides</h2>
      <div class="sports-blog-grid">
        <div class="sports-blog-card">
          <h3>Best Socks for Running</h3>
          <p>Choose the right socks for performance and comfort.</p>
        </div>
        <div class="sports-blog-card">
          <h3>Training Essentials</h3>
          <p>Keep your feet supported and blister-free during workouts.</p>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="sports-newsletter">
      <h2>Stay Active & Updated</h2>
      <p>Sign up for exclusive sports offers and training tips.</p>
      <div class="sports-newsletter-form">
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </section>

    <Cart :cart="store.cart" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/store/cart'
import SearchFilter from '@/pages/SearchFilter.vue'
import Cart from '@/components/Cart.vue'

const store = useCartStore()
const filteredProducts = ref(store.products.filter(p => p.category === 'sports'))

const addToCart = (product) => store.addToCart(product)
</script>

<style scoped>
/* HERO SECTION */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 20px;
  background: linear-gradient(120deg, #e8f0f8, #d4f0ff);
  gap: 30px;
  border-radius: 20px;
  height: 60vh;
}
.hero-content {
  max-width: 500px;
}
.hero-content h1 {
  font-size: 2.5rem;
  color: #1b263b;
  margin-bottom: 15px;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.hero-btn {
  background: linear-gradient(135deg, #4a90e2, #50e3c2);
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}
.hero-btn:hover {
  transform: translateY(-3px) scale(1.05);
}
.hero-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  object-fit: cover;
  height: 50vh;
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

/* SPORTS PRODUCTS LIST */
.sports-products {
  margin: 60px 20px;
  padding: 40px 20px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.05);
}
.sports-products h2 {
  text-align: center;
  font-size: 2rem;
  color: #1b263b;
  margin-bottom: 40px;
}
.sports-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.sports-card {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sports-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0,0,0,0.15);
}
.sports-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
}
.sports-info {
  flex: 1;
}
.sports-info h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}
.sports-info p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
}
.sports-info .price {
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 15px;
}
.sports-info button {
  background: #2c3e50;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}
.sports-info button:hover {
  background: #4a90e2;
  transform: scale(1.05);
}

/* PROMO BANNER */
.sports-promo-banner {
  margin: 60px 20px;
  padding: 50px 20px;
  background: linear-gradient(135deg, #1b263b, #2c3e50);
  color: #fff;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}
.sports-promo-banner h2 {
  font-size: 2rem;
  margin-bottom: 15px;
}
.sports-promo-banner p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.sports-promo-btn {
  background: #d4af37;
  color: #1b263b;
  border: none;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.sports-promo-btn:hover {
  background: #b8912f;
  transform: scale(1.05);
}

/* BLOG SECTION */
.sports-blog-section {
  padding: 60px 20px;
  background: #f5f5f5;
  border-radius: 20px;
}
.sports-blog-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #1b263b;
}
.sports-blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

/* NEWSLETTER */
.sports-newsletter {
  text-align: center;
  padding: 60px 20px;
}
.sports-newsletter-form {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.sports-newsletter-form input {
  padding: 12px;
  border-radius: 30px;
  border: 1px solid #ccc;
  width: 280px;
}
.sports-newsletter-form button {
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  background: #d4af37;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
.sports-newsletter-form button:hover {
  background: #b8912f;
  transform: scale(1.05);
}
  </style>

