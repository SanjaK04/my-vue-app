
<template>
  <div class="sports-page">

    <section class="hero-section">
      <div class="hero-content">
        <h1>Gear Up for Your Active Lifestyle</h1>
        <p>Premium sports socks for running, training, and outdoor adventures.</p>
        <button class="hero-btn" @click="scrollToSports">Shop Sports Collection</button>
      </div>
      <div class="hero-image">
        <img src="../assets/images/sports-socks2.jpg" alt="Sports Collection" />
      </div>
    </section>

   <section class="sports-slider">
  <div class="slider-container" :class="{ animate: isAnimating }">
    <div class="slide" v-if="currentSlide === 0">
      <h2>Special Sports Offer</h2>
      <p>Get 15% off your first sports order. Limited time only!</p>
      <button class="sports-promo-btn">Claim Offer</button>
    </div>

    <div class="slide" v-else>
      <h2>Latest from the Blog</h2>
      <p>Discover running and training insights to boost your performance.</p>
      <button class="sports-promo-btn" @click="scrollToBlog">Read Tips</button>
    </div>
  </div>
</section>


<section class="sports-story-section">
  <div class="sports-story-content">
    <h2>Performance Meets Elegance</h2>
    <p>
      Every stride tells a story — of focus, power, and confidence.  
      Our sports socks are crafted for athletes who refuse to choose between performance and sophistication.  
      From high-intensity workouts to city runs at dawn, every thread is designed to keep up with your rhythm.  
      We combine advanced moisture-control technology with elegant design, ensuring you stay cool, dry, and unstoppable.  
      Because true strength isn’t just how you move — it’s how you present yourself while doing it.
    </p>
    <div class="sports-story-quote">
      <p>“Elevate your game — from the ground up.”</p>
    </div>
  </div>
</section>


    <section class="search-section">
      <SearchFilter
        :items="store.products.filter(p => p.category === 'sports')"
        @update:filtered="filteredProducts = $event"
      />
    </section>

    
  
    <section class="sports-products" ref="sportsSection">
      <h2>Sports Collection</h2>
      <div class="sports-list">
        <div
          v-for="(product, index) in filteredProducts"
          :key="product.id"
          class="sports-card"
        >
          <img :src="product.image" :alt="product.name" class="sports-image" @click="openImage(product.image)"/>
          <div class="sports-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="price">{{ product.price ? product.price + ' SEK' : '' }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>

    
<section v-if="showBlogPopup" class="sports-blog-popup-overlay" @click.self="closeBlogPopup">
  <div class="sports-blog-popup">
    <button class="close-btn" @click="closeBlogPopup">✕</button>
    <h2>Sports Tips & Guides</h2>
    <div class="sports-blog-grid">
      <div class="sports-blog-card">
        <h3>Best Socks for Running</h3>
        <p>
          Choosing the right socks can make all the difference when it comes to performance and comfort.
          High-quality running socks reduce friction, prevent blisters, and keep your feet dry even during intense runs.
          Targeted cushioning supports impact zones, while breathable materials ensure cool comfort.
          Seamless designs prevent irritation and promote a natural running stride.
          Premium running socks elevate your performance — your feet will thank you after every mile.
        </p>
      </div>
      <div class="sports-blog-card">
        <h3>Training Essentials</h3>
        <p>
          The right training socks are the foundation of every effective workout.
          Designed for stability and comfort, they support your feet through every lift, sprint, or stretch.
          Advanced materials manage moisture and temperature, while reinforced heels add durability.
          Breathable panels enhance ventilation, and compression zones aid recovery.
          Train harder, move better, and stay comfortable from warm-up to cool-down.
        </p>
      </div>
    </div>
  </div>
</section>

    
    <section class="sports-newsletter">
      <h2>Stay Active & Updated</h2>
      <p>Sign up for exclusive sports offers and training tips.</p>
      <div class="sports-newsletter-form">
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </section>

   
    <Cart :cart="store.cart" />

    <div v-if="fullscreenImage" class="fullscreen-overlay" @click="closeImage">
  <img :src="fullscreenImage" alt="Fullscreen" class="fullscreen-img" />
</div>

  </div>
</template>

<script setup>


import { ref } from 'vue'
import { useCartStore } from '@/store/cart'
import SearchFilter from '@/pages/SearchFilter.vue'
import Cart from '@/components/Cart.vue'

const sportsSection = ref(null)
const scrollToSports = () => {
  if (sportsSection.value) {
    sportsSection.value.scrollIntoView({behavior:'smooth', block:'start'})
  }
}


const store = useCartStore()
const filteredProducts = ref(store.products.filter(p => p.category === 'sports'))

const addToCart = (product) => store.addToCart(product)

const fullscreenImage = ref(null)
const openImage = (src) => { fullscreenImage.value = src }
const closeImage = () => { fullscreenImage.value = null }

const currentSlide = ref(0)
const isAnimating = ref(false)

setInterval(() => {
  isAnimating.value = true, setTimeout(() => {
    currentSlide.value = currentSlide.value === 0 ? 1 : 0, isAnimating.value = false },
    400)
  }, 5000)

  const showBlogPopup = ref(false)

  const scrollToBlog = () => {
  showBlogPopup.value = true
}

const closeBlogPopup = () => {
  showBlogPopup.value = false
}

 


</script>


<style scoped>

.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: linear-gradient(120deg, #e8f0f8, #d4f0ff);
  gap: 80px;
  border-radius: 20px;
  height: 50vh;
  margin-top: 5%;
}

.hero-content {
 max-width: 900px;
 text-align: left;
}

.hero-content h1 {
  font-size: 3.2rem;
  color: #1b263b;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.6rem;
  margin-bottom: 25px;
  line-height: 1.6;
}

.hero-btn {
  background: linear-gradient(135deg, #4a90e2, #50e3c2);
  color: #fff;
  border: none;
  padding: 14px 32px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.hero-btn:hover {
  transform: translateY(-3px) scale(1.05);
}

.hero-image img {
  width: 130%;
  max-width: 680px;
  border-radius: 20px;
  object-fit: cover;
  height: 45vh;
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  margin-left: -10px;
  display: block;
}


.sports-story-section {
  background: linear-gradient(120deg, #f5f9ff, #eaf4ff);
  padding: 100px 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  margin: 60px 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.sports-story-section::before {
  content: "";
  position: absolute;
  top: -60px;
  left: -60px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(80, 227, 194, 0.3), transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.sports-story-section::after {
  content: "";
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(74, 144, 226, 0.2), transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.sports-story-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
}

.sports-story-content h2 {
  font-size: 2.5rem;
  color: #1b263b;
  margin-bottom: 25px;
  font-weight: 700;
}

.sports-story-content p {
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 35px;
}

.sports-story-quote p {
  font-size: 1.4rem;
  font-style: italic;
  color: #2c3e50;
  font-weight: 600;
  background: linear-gradient(90deg, #50e3c2, #4a90e2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sports-slider {
  position: sticky;
  top: 80px;
  z-index: 10;
  background: linear-gradient(135deg, #1b263b, #2c3e50);
  color: #fff;
  text-align: center;
  padding: 40px 20px;
  border-radius: 20px;
  margin: 40px 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  overflow: hidden;
}

.slider-container {
  transition: opacity 0.4s ease;
}

.slider-container.animate {
  opacity: 0;
}

.slide h2 {
  font-size: 2rem;
}


.slide p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.sports-promo-btn {
  background: #d4af37;
  color: #1b263b;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sports-promo-btn:hover {
  background: #b8912f;
  transform: scale(1.05);
}

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
  width: 400px;
  height: 400px;
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


.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
}

.fullscreen-img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  object-fit: contain;
  transition: transform 0.3s ease;
}

.fullscreen-img:hover {
  transform: scale(1.02);
}



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


.sports-blog-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.4s ease forwards;
}

.sports-blog-popup {
  background: #ffffff;
  padding: 40px 50px;
  border-radius: 24px;
  max-width: 1000px;
  width: 90%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: slideUp 0.4s ease forwards;
}

.close-btn {
  position: absolute;
  top: 18px;
  right: 22px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: #333;
  cursor: pointer;
  transition: 0.2s ease;
}

.close-btn:hover {
  color: #4a90e2;
  transform: scale(1.2);
}

.sports-blog-popup h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #1b263b;
  font-weight: 700;
}

.sports-blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.sports-blog-card {
  background: #f9f9f9;
  border-radius: 18px;
  padding: 25px 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sports-blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.sports-blog-card h3 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 12px;
}

.sports-blog-card p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}


@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

</style>

