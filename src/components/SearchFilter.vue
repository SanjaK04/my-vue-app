<template>
  <div class="search-filter">
    <form @submit.prevent>

      
      <div class="filter-group">
        <label>Color</label>
        <select v-model="selectedColor">
          <option value="">All</option>
          <option v-for="c in availableColors" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>

      
      <div class="filter-group">
        <label>Material</label>
        <select v-model="selectedMaterial">
          <option value="">All</option>
          <option v-for="m in availableMaterials" :key="m" :value="m">{{ m }}</option>
        </select>
      </div>

      
      <button type="button" @click="resetFilters">Reset</button>
    </form>
  </div>
</template>

<script setup>


import { ref, computed, watch } from "vue"

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(["update:filtered"])

const query = ref("")
const selectedColor = ref("")
const selectedMaterial = ref("")


const availableColors = computed(() => {
  const items = props.items || []
  const s = new Set(items.map(i => i.color).filter(Boolean))
  return Array.from(s).sort()
})

const availableMaterials = computed(() => {
  const items = props.items || []
  const s = new Set(items.map(i => i.material).filter(Boolean))
  return Array.from(s).sort()
})


const filteredItems = computed(() => {
  const itemsList = props.items || []
  const q = query.value.trim().toLowerCase()
  return itemsList.filter(item => {
    const matchesQuery =
      !q || (item.name && item.name.toLowerCase().includes(q))
    const matchesColor =
      !selectedColor.value || item.color === selectedColor.value
    const matchesMaterial =
      !selectedMaterial.value || item.material === selectedMaterial.value
    return matchesQuery && matchesColor && matchesMaterial
  })
})


watch(filteredItems, (val) => {
  emit("update:filtered", val)
}, { immediate: true })

function resetFilters() {
  query.value = ""
  selectedColor.value = ""
  selectedMaterial.value = ""
}
</script>
