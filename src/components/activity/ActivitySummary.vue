<template>
  <div class="space-y-4">
    <div v-for="record in dataRecords" :key="record.id" class="data-record border border-gray-300 p-5">
      <h3 class="font-bold text-lg">{{ record.title }}</h3>
      <p>{{ record.description }}</p>
      <div class="tags mt-2">
        <span v-for="tag in record.tags" :key="tag" class="inline-block bg-blue-100 text-blue-800 text-xs px-2 rounded-full mr-2">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    dataRecords: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped>
  .data-record {
    transition: transform 0.2s;
  }

  .data-record:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>

