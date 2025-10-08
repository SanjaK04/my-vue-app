<template>
  <div class="navbar">

    <div class="nav-left">
          
    <router-link to="/" class="navbutton">Home</router-link>

    <router-link to="/elegant" class="navbutton">Elegant</router-link>
    <router-link to="/winter" class="navbutton">Winter</router-link>
    <router-link to="/sports" class="navbutton">Sports</router-link>
  </div>

    <div class="nav-right">
    <div class="search-container">
      <input v-model="searchQuery" @keyup.enter="doSearch" type="text" placeholder="Search for socks"/>
      <button @click="doSearch">Search</button>
    </div>

      <Cart :cart="store.cart"/>

    </div>

  </div>

</template>

<script setup>


import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import { useCartStore } from "@/store/cart"
import Cart from "@/components/Cart.vue"

const searchQuery = ref("")
const store = useCartStore()


                                                        
const router = useRouter()                        
function doSearch() {

  if (searchQuery.value.trim() !== "") {
    router.push({ path: "./searchFilter", query: { q: searchQuery.value } })
  }
}


</script>

<style scoped>


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 90px;
  background: #495b7c;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-left .navbutton {
  margin-right: 15px;
  padding: 8px 16px;
  background: #f0f7f4;
  border-radius: 8px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-left .navbutton:hover {
  background: #485874;
  color: white;
}

.nav-right {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 6px;
}

.search-container input {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.search-container button {
  padding: 6px 14px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-container button:hover {
  background: #357ABD;
}



</style>


