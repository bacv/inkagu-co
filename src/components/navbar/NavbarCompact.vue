<template>
  <div class="flex justify-between items-center p-4 navbar-background">
    <SpinningLogo />
    <div class="flex items-center justify-center space-x-4">
      <a
          href="https://github.com/bacv"
          class="noop-link max-h-24"
          target="_blank"
          rel="noopener noreferrer"
          >
          <ThemeImg><img :src="githubSrc" class="max-h-5"/></ThemeImg>
      </a>
      <ThemeSwitch />

      <button @click="isOpen = !isOpen" class="p-2" @mouseover="menuHovered = true" @mouseleave="menuHovered = false">
        <MenuBtn :isHovered="menuHovered" :isOpen="menuOpened" />
      </button>

      <TransitionRoot appear :show="isOpen" as="template">
      <NavDialog @close-dialog="closeModal">
      <template v-slot>
        <MenuContent />
      </template>
      </NavDialog>
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  import {
    ThemeImg,
    MenuBtn,
    SpinningLogo,
    Dialog as NavDialog,
    MenuContent,
    ThemeSwitch
  } from '@/components';
  import githubSrc from '@/assets/github-mark.svg';

  const isOpen = ref(false)
  const menuHovered = ref(false);
  const menuOpened = ref(false);

  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }
</script>

<style scoped>
.noop-link {
  background-color: none;
}
  .noop-link:hover {
    background-color: transparent;
  }
  .navbar-background {
  }
</style>

