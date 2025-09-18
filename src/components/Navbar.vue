<template>
  <div class="navbar">
           <!--router-link zamjenjuje button za navigaciju bez reloada.-->
    <router-link to="/mysstrumpa" class="navbutton">Mysstrumpa</router-link>
    <router-link to="/sockvännen" class="navbutton">Sockvännen</router-link>
    <router-link to="/färgfesten" class="navbutton">Färgfesten</router-link>

    <div class="search-container">
      <input v-model="searchQuery" @keyup.enter="doSearch" type="text" placeholder="Search for socks"/>
      <button @click="doSearch"></button>
    </div>
  </div>
</template>

<script setup>
          import { ref } from "vue"
import { useRouter } from "vue-router"


const searchQuery = ref("")            // unos iz search bara, dva-way binding s v-model

                                 
const router = useRouter()             // koristimo router da prebacimo korisnika na search

function doSearch() {
  if (searchQuery.value.trim() !== "") {
    router.push({ path: "/search", query: { q: searchQuery.value } })
  }
}
</script>

<style scoped>

</style>
