<template>
  <div class="navbar">
    <button class="navbutton">Mysstrumpa</button>
    <button class="navbutton">Sockvännen</button>
    <button class="navbutton">Färgfesten</button>
  </div>
</template>

<script setup>
           // Ovdje možemo kasnije dodati navigaciju koristeći router-link
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  background-color: #4CAF50;
}
.navbutton {
  padding: 10px 20px;
  background-color: #eee;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
