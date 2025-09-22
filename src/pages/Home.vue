<template>
  <div>
    <Navbar />
    
    <Hero :hero="hero"></Hero>

    <div class="filters">
      <input v-model="query" type="text" placeholder="Search by"/>

      <label>Color</label>
      <select v-model="selectedColor">
        <option value="">All</option>
        <option v-for="color in availableColors" :key="color" :value="color">{{ color }}</option>
      </select>
    


  <label>Material</label>
  <select v-model="selectedMaterial">
    <option value="">All</option>
    <option v-for="material in availableMaterials" :key="material" :value="material"> {{ material }}</option>
  </select>
  </div>

    <div class="product-display">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
     
    <Cart :cart="products"></Cart>
    <Footer />


  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Cart from '../components/Cart.vue'
import ProductCard from '../components/ProductCard.vue'
import Footer from '../components/Footer.vue'
import { products, addToCart } from '../store/products.js'
import { searchFilter } from '../components/SearchFilter.vue'
import { ref, computed } from 'vue'


const query = ref('')
const selectedColor = ref('')
const selectedMaterial = ref('')

// dostupne opcije – uzimaju se direktno iz podataka
const availableColors = computed(() => {
  const set = new Set(products.map(p => p.color).filter(Boolean))
  return Array.from(set).sort()
})
const availableMaterials = computed(() => {
  const set = new Set(products.map(p => p.material).filter(Boolean))
  return Array.from(set).sort()
})

// filtrirani proizvodi
const filteredProducts = computed(() => {
  return products.filter(p => {
    const matchesQuery =
      !query.value ||
      p.name.toLowerCase().includes(query.value.toLowerCase())

    const matchesColor =
      !selectedColor.value || p.color === selectedColor.value

    const matchesMaterial =
      !selectedMaterial.value || p.material === selectedMaterial.value

    return matchesQuery && matchesColor && matchesMaterial
  })
})


</script>

<style scoped>

</style>

