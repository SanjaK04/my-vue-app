

<template>
   <Navbar /> 

  <router-view />       <!-- ovdje će biti Home.vue -->
 
 <Footer />
</template>

<script setup>
        import Navbar from './components/Navbar.vue'  
        import Footer from './components/Footer.vue'      // ništa više nije potrebno
</script>

<style>

</style>