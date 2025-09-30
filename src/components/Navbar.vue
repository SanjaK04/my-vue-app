<template>
  <div class="navbar">
          
    <router-link to="/" class="navbutton">Home</router-link>
    <router-link to="/searchFilter">Search Filter</router-link>
    <router-link to="/elegant" class="navbutton">Elegant</router-link>
    <router-link to="/winter" class="navbutton">Winter</router-link>
    <router-link to="/sports" class="navbutton">Sports</router-link>

    <div class="search-container">
      <input v-model="searchQuery" @keyup.enter="doSearch" type="text" placeholder="Search for socks"/>
      <button @click="doSearch"></button>
    
    </div>
  </div>
</template>

<script setup>


import { ref, computed } from "vue"
import { useRouter } from "vue-router"

const searchQuery = ref("")


const products = [
  { id: 1, name: "black socks" },
  { id: 2, name: "white socks" },
  { id: 3, name: "cotton socks" }
]



const searchResults = computed(() => {                     // computed lista filtriranih proizvoda prema unosu
  if (!searchQuery.value) return []

  return products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

                                                         
const router = useRouter()                               // opcionalno: funkcija za redirect na search rutu
function doSearch() {

  if (searchQuery.value.trim() !== "") {
    router.push({ path: "/search", query: { q: searchQuery.value } })
  }
}


</script>

<style scoped>

</style>
