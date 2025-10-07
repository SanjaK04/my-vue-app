<template>
 
  <div class="cart-container">
    
    <div class="cart" @click="togglePopup">
      Cart({{ totalQuantity }})
    </div>

    <div v-if="showPopup" class="cart-popup">
      <ul>
        <li v-for="product in cart" :key="product.id">
          {{ product.name }} x {{ product.quantity }}
        </li>
      </ul>
      <p v-if="cart.length === 0">Your cart is empty</p>
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


const cart = computed(() => store.cart)
const totalQuantity = computed(() => store.totalQuantity)
</script>




<style scoop>


</style>