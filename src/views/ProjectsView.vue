<template>
  <div class="p-4">
    <h1 class="text-center text-2xl font-bold mb-6">Projects</h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in projectsStore.projects" :key="project.url" :project="project" />
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { ProjectCard } from '@/components';
  import { useProjectsStore } from '@/stores/projects'; // adjust the path as necessary

  const projectsStore = useProjectsStore();

  onMounted(async () => {
    await projectsStore.fetchData();
  });
</script>


