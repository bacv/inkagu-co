<template>
  <svg
      width="6mm"
      height="6mm"
      viewBox="0 0 4.9014125 3.1659083"
      xmlns="http://www.w3.org/2000/svg">

    <rect
        :class="rect1Class"
        style="fill:#ff00e7;"
        id="rect1"
        width="4.5807376"
        height="0.97858555"
        x="0"
        y="0" />

    <rect
        :class="rect2Class"
        style="fill:#00cf7c;"
        id="rect2"
        height="0.92358116"
        width="4.6335449"
        x="1"
        y="2" />
  </svg>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    isHovered: Boolean,
    isOpen: Boolean,
  });

  const rect1Class = computed(() => ({
    aup: props.isHovered,
    'wiggle-left': !props.isHovered,
  }));

  const rect2Class = computed(() => ({
    adown: props.isHovered,
    'wiggle-right': !props.isHovered,
  }));
</script>

<style scoped>
@keyframes wiggle-left {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

    @keyframes wiggle-right {
      0%, 100% {
        transform: rotate(3deg);
      }
      50% {
        transform: rotate(-3deg);
      }
    }

    .aup, .adown {
      transition: transform 0.1s ease-in-out;
    }

    .aup {
      transform: rotate(-15deg);
    }
    .adown {
      transform: rotate(15deg);
    }

    .wiggle-left {
      animation: wiggle-left 1s ease-in-out infinite;
    }

    .wiggle-right {
      animation: wiggle-right 1s ease-in-out infinite;
    }
</style>
