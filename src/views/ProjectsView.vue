<template>
  <div class="p-4">
    <h1 class="text-center text-2xl font-bold mb-6">Projects</h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="project in projectsStore.projects" :key="project.url">
        <FeatureProjectCard v-if="project.featureProject" :project="project" />
        <ProjectCard v-else :project="project" />
      </template>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { ProjectCard, FeatureProjectCard } from '@/components';
  import { useProjectsStore } from '@/stores/projects'; // adjust the path as necessary

  const projectsStore = useProjectsStore();

  onMounted(async () => {
    await projectsStore.fetchData();
  });
</script>


