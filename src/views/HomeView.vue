<template>
  <div class="home split-view lg:grid lg:grid-cols-2">
    <header class="lg:col-span-1 lg:h-auto flex flex-col justify-center items-center">
      <div class="wrapper">
        <HelloWorld :msg="homeViewStore.title" />
      </div>
    </header>
    <main class="lg:col-span-1">
      <img class="weird-img" src="@/assets/graphics/c1.png">
    </main>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import { useHomeViewStore } from '@/stores/homeView.js'
  import { HelloWorld } from '@/components'

  const homeViewStore = useHomeViewStore();

  onMounted(() => {
    homeViewStore.fetchData();
  });
</script>

<style scoped>
  header {
    line-height: 1.5;
    height: 66vh;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
      height: auto;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    .split-view {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
