<template>
  <div class="p-4">
    <header>
      <img class="weird-img" src="@/assets/graphics/c2.png">
    </header>
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

<style scoped>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66vh;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
      height: auto;
    }
  }
</style>
