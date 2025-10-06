<template>
 
  <div class="cart-container">
    
    <div class="cart" @click="togglePopup">
      Cart({{ totalQuantity }})
    </div>

    <div v-if="showPopup" class="cart-popup">
      <ul>
        <li v-for="product in cartProducts" :key="product.id">
          {{ product.name }} x {{ product.cart }}
        </li>
      </ul>
      <p v-if="cartProducts.length === 0">Your cart is empty</p>
    </div>
  </div>
</template>




<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/store/cart.js'

const store = useCartStore()
const showPopup = ref(false)

const togglePopup = () => {
  showPopup.value = !showPopup.value
}

const totalQuantity = computed(() => {
  return store.products.reduce((sum, product) => sum + product.cart, 0)
})

const cartProducts = computed(() => {
 return store.products.filter(p => p.cart > 0)
})
</script> 