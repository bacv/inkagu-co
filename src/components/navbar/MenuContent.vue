<template>
  <div class="fixed inset-0 flex flex-col items-center justify-center h-screen w-screen text-3xl lg:text-4xl">
    <div class="flex flex-col items-center justify-center">
      <h1>Projects</h1>
      <h1>Web Ring</h1>
      <div class="flex items-center justify-center lg:justify-start p-10">
        <ThemeImg>
          <img :src="logoTxtSrc" class="h-10">
        </ThemeImg>
        <ThemeImg>
          <img :src="logoSrc" class="h-10 ps-5">
        </ThemeImg>
      </div>
      <h1>About</h1>
      <h1>Logs</h1>
    </div>
  </div>
</template>

<script setup>
  import { ThemeImg } from '@/components/ui';
  import logoSrc from '@/assets/logo.svg';
  import logoTxtSrc from '@/assets/logo-txt.svg';
</script>

<style scoped>
h1 {
  padding: 5px;
}
</style>

