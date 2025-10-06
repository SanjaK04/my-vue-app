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
      <div class="sports-grid">
        <ProductCard
          v-for="(product, index) in filteredProducts"
          :key="product.id"
          :product="product"
          :index="index"
          mode= "sports"
        />
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

    <!-- CART COMPONENT -->
    <Cart :cart="store.cart" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/store/cart'
import ProductCard from '@/components/ProductCard.vue'
import SearchFilter from '@/pages/SearchFilter.vue'
import Cart from '@/components/Cart.vue'

const store = useCartStore()
const filteredProducts = ref(store.products.filter(p => p.category === 'sports'))
</script>

<style scoped>
/* HERO SECTION */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 20px;
  background: #e8f0f8;
  gap: 30px;
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
  transition: 0.3s;
}
.hero-btn:hover {
  transform: translateY(-2px);
}
.hero-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  object-fit: cover;
  height: 50vh;
}

/* PRODUCTS GRID */
.sports-products {
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
  background: #fff;
  margin: 60px 20px;
  padding: 40px 20px;
}

/* PRODUCT CARD */
.sports-product h2 {
text-align: center;
font-size: 2rem;
color: #1b263b;
margin-bottom: 40px;
}

.sports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}
.sports-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}
.sports-card:hover {
  transform: translateY(-5px);
}
.sports-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 15px;
}

.sports-info h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.sports-info p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 12px;
}

.sports-info .price {
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 15px;
}


.sports-info button {
  background: #2c3e50;
  color:#fff;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.sports-info button:hover {
  background: #4a90e2;
}




/* PROMO BANNER */
.sports-promo-banner {
  background: linear-gradient(135deg, #1b263b, #2c3e50);
  color: #fff;
  text-align: center;
  padding: 50px 20px;
  margin: 60px 20px;
  border-radius: 16px;
}

/* BLOG SECTION */
.sports-blog-section {
  padding: 60px 20px;
  background: #f5f5f5;
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
}
</style>
