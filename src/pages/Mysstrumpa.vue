<template>
  <div class="mysstrumpa-page">
    <section class="hero">
      <h1>Dobrodošli u svijet udobnih i šarenih čarapa!</h1>
      <p>Otkrijte našu kolekciju čarapa koje će obogatiti vaš dan.</p>
    </section>

    <section class="product-gallery">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">{{ product.price }} SEK</p>
        <button @click="addToCart(product)">Dodaj u košaricu</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  {
    id: 1,
    name: 'Zelene čarape',
    image: 'https://pixabay.com/get/ea30b40d2cf11c22d2524518b7484f91fe76e6d004b014459cf0c1_640.png',
    description: 'Udobne pamuk čarape u zelenoj boji.',
    price: 49
  },
  {
    id: 2,
    name: 'Plave čarape',
    image: 'https://pixabay.com/get/ea30b40d2cf11c22d2524518b7484f91fe76e6d004b014459cf0c1_640.png',
    description: 'Elegantne plave čarape za svaki dan.',
    price: 59
  },
  // Dodaj ostale proizvode prema potrebi
]);

const addToCart = (product) => {
  console.log(`${product.name} dodano u košaricu.`);
};
</script>

<style scoped>
.mysstrumpa-page {
  font-family: 'Arial', sans-serif;
  margin: 20px;
}

.hero {
  text-align: center;
  background-color: #f0f0f0;
  padding: 50px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #333;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
}

.product-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 250px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
}

.product-card p {
  font-size: 1rem;
  color: #666;
}

.price {
  font-size: 1.2rem;
  color: #000;
  font-weight: bold;
  margin: 10px 0;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}
</style>
