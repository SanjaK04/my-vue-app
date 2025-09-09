<script setup>
import { ref } from 'vue'            
import socksGreenImage from './assets/images/green_socks.jpg'
import socksBlueImage from './assets/images/blue_socks.jpg'


const product = ref ('Socks') 
const image = ref(socksGreenImage)
const inventory = ref(100)

const details = ref(['50% cotton', '30% wool', '20% polyester'])

const variants = ref ([
  { id: 2234, color: 'green'},
  { id: 2235, color: 'blue'}

])

const cart = ref(0)
const addToCart = () => cart.value +=1

</script>     


<template>

<div class="nav-bar">
   <button class="nav-button">Ull</button>
   <button class="nav-button">Bomull</button>
   <button class="nav-button">Sport</button>
</div>

 <div class="product-dispaly">        
  <div class="product-container"> 
   <div class="product-image">
    <img v-bind:src="image"/>

   </div>
   <div class="cart">Cart({{ cart }})</div>
   <div class="product-info">
     <h1>{{ product }}</h1>
     <p v-if="inventory > 10">In stock</p>
     <p v-else-if="inventory <= 10 && inventory > 0">Almoust sold out</p>
     <p v-else>Out of stock</p>
     <ul>
      <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>
    <div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
    <button class="cart-button" @click="addToCart()">Add to cart</button>
   </div>
  </div>
 </div> 
</template>


