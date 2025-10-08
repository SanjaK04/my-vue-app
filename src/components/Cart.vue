<template>
 
  <div class="cart-container" ref="cartRef">
    
    <div class="cart-button" @click="togglePopup">
      Cart 
      <span v-if="totalQuantity > 0" class="badge">{{ totalQuantity }}</span>
    </div>

    <div v-if="showPopup" class="cart-popup">
      <ul>
        <li v-for="product in cart" :key="product.id">
          {{ product.name }} x {{ product.quantity }}
        </li>
      </ul>
      <p v-if="cart.length === 0" >Your cart is empty</p>
    </div>
  </div>
</template>


<script setup>


import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useCartStore } from '@/store/cart.js'

const store = useCartStore()
const showPopup = ref(false)
const cartRef = ref(null)

const togglePopup = () => {
  showPopup.value = !showPopup.value
}

const handleClickOutside = (e) => {
  if (cartRef.value && !cartRef.value.contains(e.target)) {
    showPopup.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})


const cart = computed(() => store.cart)
const totalQuantity = computed(() => store.totalQuantity)
</script>




<style scoped>

.cart-container {
  position: relative;
  display: inline-block;
}

.cart-button {
  background-color: #1e293b; 
  color: white;
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.cart-button:hover {
  background-color: #334155;
  transform: scale(1.05);
}

.badge {
  background: #ef4444;
  color: white;
  border-radius: 9999px;
  font-size: 0.75rem;
  padding: 0 0.4rem;
  line-height: 1.2;
}

.cart-popup {
  position: absolute;
  right: 0;
  top: 110%;
  background-color: white;
  color: #0f172a;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  width: 240px;
  padding: 1rem;
  z-index: 9999;
  animation: fadeIn 0.2s ease;
}

.cart-popup ul {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
}

.cart-popup li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
}

.cart-popup p {
  text-align: center;
  color: #64748b;
  font-size: 0.85rem;
  margin: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@media (max-width: 640px) {
  .cart-popup {
    position: fixed;
    right: 1rem;
    top: auto;
    bottom: 4rem;
    width: calc(100% - 2rem);
    max-width: 360px;
  }
}
</style>


