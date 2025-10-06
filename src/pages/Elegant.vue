<template>
  <div class="elegant-socks-wrapper">

    <Cart />

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


    <section class="intro-banner" ref="introBanner">
  <div class="intro-content">
    <h2>Our Journey in Crafting Elegance</h2>
    <p>Since our founding, we have dedicated ourselves to creating socks that embody both
      sophistication and comfort. Every pair is crafted using the finest materials and
      time-honored techniques, ensuring that our socks not only look impeccable but also
      feel extraordinary throughout the day.</p>
      <p>
        Inspired by a legacy of elegant craftsmanship, we blend tradition with modern design
      to bring you premium socks that complement every occasion—from business meetings to
      casual moments of relaxation.
      </p>
      <p>
        Experience the perfect harmony of style, durability, and comfort—because true
      elegance is in the details.
      </p>
    
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
        <div v-for="product in bestSellers" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <h3>{{ product.name || 'Unnamed product' }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">{{ product.price ? product.price + ' SEK' : '' }}</p>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </section>

    <section class="elegant-products">
      <h2>Elegant Products</h2>
      <div class="elegant-layout">
      <div class="elegant-list">
        <div v-for="product in elegantProducts"
        :key="product.id"
        class="elegant-card">

        <img :src="product.image" :alt="product.name" class="elegant-image"
        @click="openImage(product.image)" />
        <div class="elegant-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">{{ product.price ? product.price + 'SEK' : '' }}</p>
          <button @click="addToCart(product)">Add To Cart</button>
        </div>
      </div>
      </div>

      <aside class="sticky-panel">
        <h3>Elegance is in Simplicity </h3>
        <p> Discover our premium collection crafted with timeless design, 
            luxurious fabrics, and unbeatable comfort.</p>
            <ul>
              <li>Finest Material</li>
              <li>Timeless Business Style</li>
              <li>Designed in Scandinavia</li>
              <li>Attention to Detail</li>
              <li>Sustainable Luxury</li>
              <li>Effortless Style</li>
              <li>Minimalist Lines</li>
            </ul>
      </aside>
      </div>
    </section>

    <div v-if="fullscreenImage" class="fullscreen-overlay" @click="closeImage">
      <img :src="fullscreenImage" alt="Fullscreen" />
    </div>

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

  </div>
</template>

<script setup>



import Cart from '../components/Cart.vue';
import { onMounted, computed, ref } from 'vue';
import { useCartStore } from '@/store/cart';



const introBanner = ref(null)

onMounted(() => {
  const banner = introBanner.value;
  const hero = document.querySelector('.hero-section');

 
  banner.style.transform = `translateY(-100%)`;
  banner.style.opacity = '0';

 const heroBottom = hero.offsetTop + hero.offsetHeight;
 const bannerTop = banner.offsetTop

 const stopOffset = -50;
 const stopPosition = heroBottom - bannerTop + stopOffset;

  setTimeout(() => {
    banner.style.transition = 'transform 3s cubic-bezier(0.25,0.1,0.25,1), opacity 3s ease-out';
    banner.style.transform = `translateY(${stopPosition}px)`;
    banner.style.opacity = '1';
  }, 100);
})


const store = useCartStore()

const featuredIds = [21, 22, 23]
const bestSellers = computed(() => store.products.filter(p => featuredIds.includes(p.id)))

const elegantProducts = computed(() => store.products.filter(p => p.category === 'elegant'))

const addToCart = (product) => store.addToCart(product)

const fullscreenImage = ref(null)
const openImage = (src) => { fullscreenImage.value = src }
const closeImage = () => { fullscreenImage.value = null }


</script>

<style scoped>

.hero-section {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  padding-bottom: 0;
}


.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  background-color: rgba(10, 25, 50, 0.85);
  padding: 25px 25px;
  border-radius: 12px;
  margin: 40px 20px 0 20px;
  color: #fff;
}

.hero-media img {
  width: 100%;
  height: 70%;
  object-fit: cover;
  position: absolute;
  top:0;
  left: 0;
  z-index: 1;
}



.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.cta-btn {
  padding: 12px 28px;
  background-color: #d4af37;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
}

.cta-btn:hover {
  background: #b8912f;
}

.intro-banner {
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 60px 50px;
  background: linear-gradient(135deg, #1b263b 0%, #2c3e50 100%);
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
  z-index: 3;
  text-align: center;
 
}

.intro-banner h2 {
  font-size: 2.8rem;
  line-height: 1.4;
  margin-bottom: 25px;
  color: #dfe9ef;
}

.intro-banner p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #dfe9ef;
}


.intro-content {
  max-width: 1200px;
}

.intro-content h2 {
  font-size: 2.5rem;
  margin-bottom: 25px;
  font-weight: 600;
}

.intro-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #dfe9ef;
}




.elegant-socks-wrapper {
  font-family: 'Helvetica Neue', sans-serif;
  color: #222;
  background: #f8f8f8;
}


.features-section {
  display: flex;
  justify-content: space-around;
  margin: 120px 20px;
  gap: 20xp;
  z-index: 2;
  position: relative;
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

.elegant-products {
  margin: 60px 20px;
  padding: 40px 20px;
  background: #ffff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

.elegant-products h2 {
  text-align: center;
  font-size: 2rem;
  color: #1b263b;
  margin-bottom: 40px;
}

.elegant-list {
 flex: 3;
 display: flex;
 flex-direction: column;
 gap: 25px;
}

.elegant-card {
  display: flex;
  gap: 20px;
  align-items: center;
  background: #f9f9f9;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.elegant-card:hover {
  transform: translateY(-5px);
}

.elegant-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}

.elegant-info {
  flex: 1;
}

.elegant-info h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.elegant-info .price {
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 15px;
}

.elegant-info button {
  background: #2c3e50;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.elegant-info button:hover {
  background: #4a90e2;
}

.elegant-layout {
  display: flex;
  gap: 40px;
}

.sticky-panel {
  flex: 1;
  position: sticky;
  top: 120px;
  height: fit-content;
  background: #1b263b;
  color: #fff;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  
}

.sticky-panel h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #d4af37
}

.sticky-panel ul {
  margin-top: 15px;
  padding-left: 20px;
  list-style: none;
}

.sticky-panel li {
  margin-bottom: 10px;
  font-size: 1rem;

}

.fullscreen-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  cursor: zoom-out;
}

.fullscreen-overlay img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
}


.promo-section {
  background: linear-gradient(135deg, #2c3e50, #4a90e2);
  color: #fff;
  padding: 60px 40px;
  margin: 60px 20px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.promo-content h2 {
  display: flex;
  justify-content: center;
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
