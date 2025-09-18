<template>
    <div>
        <h1>Search result</h1>

        <ul v-if="results.length > 0">
            <li v-for="p in results" :key="p.id">{{ p.name }}</li>
        </ul>

        <p v-else>
            No results for "{{ route.query.q }}"
        </p>
    </div>
    </template>

    <script setup>
      import { useRoute } from "vue-router"
      import { computed } from "vue"


      const products= [
        { id: 1, name: "black socks"},
        { id: 2, name: "white socks"},
        { id: 3, name: "cotton socks"},
    ]

    
const route = useRoute()


const queryQ = route.query.q ? route.query.q.toLowerCase() : ""   // computed varijabla za query, koja automatski racuna svoju vrijednost, kad se vrijednosti od kojih ovisi promijene, ona se automatski azurira



const results = computed(() => {                    //filtriramo proizvode
  return products.filter(p =>
    p.name.toLowerCase().includes(queryQ.value)
  )
})


</script>

