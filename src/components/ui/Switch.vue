<template>
  <Switch
    v-model="enabled"
    :style="{ width: computedSwitchWidth, height: switchHeight, borderRadius: switchHeight }"
    class="relative inline-flex items-center shrink-0 cursor-pointer border-2 duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 switch-border switch-background"
  >
    <span
      aria-hidden="true"
      :class="enabled ? 'translate-x-full' : 'translate-x-0'"
      :style="{ width: toggleSize, height: toggleSize, borderRadius: toggleSize, transform: enabled ? computedTranslateX : 'translateX(0)' }"
      class="pointer-events-none inline-block transform bg-transparent ring-0 transition-all duration-200 ease-in-out flex items-center justify-center border-2 switch-border"
    >
      <!-- Slots for the icons -->
      <template v-if="enabled">
        <slot name="icon-enabled"></slot>
      </template>
      <template v-else>
        <slot name="icon-disabled"></slot>
      </template>
    </span>
  </Switch>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { Switch } from '@headlessui/vue';

const props = defineProps({
  switchHeight: {
    type: String,
    default: '40px',
  },
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const toggleSwitch = () => {
  emit('update:modelValue', !props.modelValue);
};

const enabled = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const computedSwitchWidth = computed(() => {
  const height = parseInt(props.switchHeight);
  return `${height * 1.5}px`;
});

const toggleSize = computed(() => {
  const height = parseInt(props.switchHeight);
  return `${height - 4}px`;
});

const computedTranslateX = computed(() => {
  const switchWidth = parseInt(computedSwitchWidth.value);
  const toggleDiameter = parseInt(toggleSize.value);
  return `translateX(${switchWidth - toggleDiameter - 4}px)`;
});

</script>

<style scoped>
.switch-border {
  border-color: var(--color-border, #ffffff);
}

.switch-border:hover {
  border-color: var(--color-border-hover, #ffffff);
}

.switch-background {
  background-color: var(--color-background-mute);
}
</style>
