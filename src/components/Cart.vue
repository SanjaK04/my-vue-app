<template>
  <div class="cart">
    Cart()
  
    </div>
  
    

</template>

<script setup>
import { computed } from 'vue'
import { products } from '../store/products.js'

const cartProducts = computed(() => products.value.filter(p => p.cart))

</script> 