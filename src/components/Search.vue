<template>
    <div>
        <h1>Search result for "{{ queryQ }}"</h1>

        <ul v-if="results.length > 0">
            <li v-for="p in results" :key="p.id">{{ p.name }}</li>
        </ul>

        <p v-else>
            No results for "{{ queryQ }}"
        </p>
    </div>
    </template>

    <script setup>
   import { useRoute } from 'vue-router'
   import { computed } from 'vue'

const products = [
  { id: 1, name: "black socks" },
  { id: 2, name: "white socks" },
  { id: 3, name: "cotton socks" }
]

const route = useRoute()

const queryQ = computed(() => route.query.q ? route.query.q.toLowerCase() : '')

const results = computed(() =>
  products.filter(p => p.name.toLowerCase().includes(queryQ.value))
)


</script>

