<script setup>
import { ref } from 'vue'            
import socksGreenImage from './assets/images/green_socks.jpg'
import socksBlueImage from './assets/images/blue_socks.jpg'
import socksNiceImage from './assets/images/nice_socks.jpg'

const products = ref([
  {
    id: 1,
    name: 'Green socks',
    image: socksGreenImage,
    inventory: 100,
    details: ['50% cotton', '30% wool', '20% polyester'],
    variants: [{ id: 2234, color: 'blue' }],
    cart: 0
  },
  {
    id: 2,
    name: 'Blue socks',
    image: socksBlueImage,
    inventory: 100,
    details: ['50% cotton', '30% wool', '20% polyester'],
    variants: [{ id: 2235, color: 'green' }],
    cart: 0
  },
  {
    id: 3,
    name: 'Nice socks',
    image: socksNiceImage,
    inventory: 100,
    details: ['80% cotton', '20% polyester'],
    variants: [{ id:2236, color: 'colorful'}],
    cart:0
  }
])


const addToCart = (product) => product.cart += 1

</script>     


<template>

<div class="nav-bar">
   <button class="nav-button">Mysstrumporna</button>
   <button class="nav-button">Sockvännen</button>
   <button class="nav-button">Färgfesten</button>
</div>

 <div class="product-dispaly">        
  <div class="product-container" v-for="product in products" :key="product.id"> 
   <div class="product-image">
    <img :src="product.image"/>

   </div>
   <div class="cart">Cart({{ product.cart }})</div>
   <div class="product-info">
     <h1>{{ product.name }}</h1>
     <p v-if="product.inventory > 10">In stock</p>
     <p v-else-if="product.inventory <= 10 && product.inventory > 0">Almoust sold out</p>
     <p v-else>Out of stock</p>
     <ul>
      <li v-for="detail in product.details" :key="detail">{{ detail }}</li>
    </ul>
    <div v-for="variant in product.variants" :key="variant.id">{{ variant.color }}</div>
    <button class="cart-button" @click="addToCart(product)">Add to cart</button>
   </div>
  </div>
 </div> 
</template>


