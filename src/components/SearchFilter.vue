<template>
  <div class="search-filter">
    <form @submit.prevent>
      <!-- Pretraga po tekstu -->
      <input v-model="query" placeholder="Traži (naziv/opis)..." />

      <!-- Boje: multiple select -->
      <label>Boje</label>
      <select v-model="selectedColors" multiple>
        <option v-for="c in availableColors" :key="c" :value="c">{{ c }}</option>
      </select>

      <!-- Materijali: checkbox lista -->
      <label>Materijali</label>
      <div class="materials">
        <label v-for="m in availableMaterials" :key="m">
          <input type="checkbox" :value="m" v-model="selectedMaterials" /> {{ m }}
        </label>
      </div>

      <!-- opcionalno: reset -->
      <button type="button" @click="resetFilters">Reset</button>
    </form>

    <!-- Rezultati -->
    <div class="results">
      <p v-if="filteredItems.length === 0">Nema rezultata</p>
      <ul>
        <li v-for="item in filteredItems" :key="item.id">
          <strong>{{ item.name }}</strong> — {{ item.color }} / {{ item.material }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  name: "SearchFilter",
  props: {
                   // lista stavki koja dolazi iz roditelja
    items: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const query = ref("");
    const selectedColors = ref([]);      // array of colors
    const selectedMaterials = ref([]);   // array of materials

    // Dinamički izdvoji dostupne boje i materijale iz items
    const availableColors = computed(() => {
      const s = new Set(props.items.map(i => i.color).filter(Boolean));
      return Array.from(s).sort();
    });
    const availableMaterials = computed(() => {
      const s = new Set(props.items.map(i => i.material).filter(Boolean));
      return Array.from(s).sort();
    });

    // Glavno filtriranje — logika: ako nema izabranih filtera, ne filtriraj po tom kriteriju
    const filteredItems = computed(() => {
      const q = query.value.trim().toLowerCase();
      return props.items.filter(item => {
        // tekstualni filter (naziv/description)
        const matchesQuery =
          !q ||
          (item.name && item.name.toLowerCase().includes(q)) ||
          (item.description && item.description.toLowerCase().includes(q));

        // boja: ako su izabrane boje, onda treba biti jedna od njih
        const matchesColor =
          selectedColors.value.length === 0 ||
          selectedColors.value.includes(item.color);

        // materijal: ako su izabrani materijali, onda treba biti jedan od njih
        const matchesMaterial =
          selectedMaterials.value.length === 0 ||
          selectedMaterials.value.includes(item.material);

        return matchesQuery && matchesColor && matchesMaterial;
      });
    });

    function resetFilters() {
      query.value = "";
      selectedColors.value = [];
      selectedMaterials.value = [];
    }

    return {
      query,
      selectedColors,
      selectedMaterials,
      availableColors,
      availableMaterials,
      filteredItems,
      resetFilters
    };
  }
};
</script>

<style scoped>
.search-filter {
  max-width: 640px;
  margin: 0 auto;
  padding: 12px;
}
.search-filter form > * { display:block; margin:8px 0; }
.materials label { margin-right: 8px; }
.results ul { list-style: none; padding:0; }
</style>
