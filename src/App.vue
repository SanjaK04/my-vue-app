
<template>
  <div id="app">
    <Navbar />              <!-- uvijek na vrhu -->
    <router-view />         <!-- ovdje se prikazuje sadržaj svake stranice -->
    <Footer />              <!-- uvijek na dnu -->
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>


<style>

</style>