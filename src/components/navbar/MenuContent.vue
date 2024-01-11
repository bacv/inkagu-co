<template>
  <div class="fixed inset-0 flex flex-col items-center justify-center h-screen w-screen text-3xl lg:text-4xl">
    <div class="flex flex-col items-center justify-center">
      <RouterLink to="/projects" class="h1-link" @click="handleLinkClick">
        <h1>Projects</h1>
      </RouterLink>
      <div to="/webring" class="h1-link inactive">
        <h1>Web Ring</h1>
      </div>
      <RouterLink to="/" class="noop-link" @click="handleLinkClick">
        <div class="flex items-center justify-center lg:justify-start p-10">
          <ThemeImg>
            <img :src="logoTxtSrc" class="h-10">
          </ThemeImg>
          <ThemeImg>
            <img :src="logoSrc" class="h-10 ps-5">
          </ThemeImg>
        </div>
      </RouterLink>
      <RouterLink to="/about" class="h1-link" @click="handleLinkClick">
        <h1>About</h1>
      </RouterLink>
      <div to="/logs" class="h1-link inactive">
        <h1>Logs</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import { ThemeImg } from '@/components/ui';
  import logoSrc from '@/assets/logo.svg';
  import logoTxtSrc from '@/assets/logo-txt.svg';

  const emit = defineEmits(['close']);

  function handleLinkClick() {
    emit('close');
  }
</script>

<style scoped>
  .noop-link {
    background-color: none;
  }
  .noop-link:hover {
    background-color: transparent;
  }
  
  .h1-link {
    padding: 5px;
  }
  
  .h1-link.inactive {
    text-decoration: line-through;
  }
</style>

