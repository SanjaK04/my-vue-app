<template>
  <div>
    <Navbar />

     <Hero :hero="hero"></Hero>

    <div class="product-display">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
      />
    </div>

    <Cart :products="products"></Cart>/>
    <Footer :footer="footer"></Footer>/>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Cart from '../components/Cart.vue'
import ProductCard from '../components/ProductCard.vue'
import Footer from '../components/Footer.vue'


import greenSocks from '../assets/images/green_socks.jpg'
import blueSocks from '../assets/images/blue_socks.jpg'
import niceSocks from '../assets/images/nice_socks.jpg'

const products = ref([
  { id: 1, name: 'Green socks', image: greenSocks, inventory: 100, details: ['50% cotton','30% wool','20% polyester'], variants: [{id:1,color:'Blue'}], cart:0 },
  { id: 2, name: 'Blue socks', image: blueSocks, inventory: 0, details: ['50% cotton','30% wool','20% polyester'], variants: [{id:2,color:'Green'}], cart:0 },
  { id: 3, name: 'Nice socks', image: niceSocks, inventory: 10, details: ['80% cotton','20% polyester'], variants: [{id:3,color:'Colorful'}], cart:0 },
])

const addToCart = (product) => {
  if(product.inventory > product.cart){
    product.cart++
  } else {
    alert('Not enough stock!')
  }
}
</script>

<style scoped>

</style>

