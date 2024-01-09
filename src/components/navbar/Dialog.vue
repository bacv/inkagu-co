<template>
  <Dialog as="div" v-if="isOpen" @close="closeModal" class="relative z-10">
    <div class="fixed inset-0 h-screen">
      <div class="flex h-screen items-center justify-center">
        <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-97"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
          <DialogPanel class="w-full h-screen overflow-hidden dialog-background text-left align-middle shadow-xl transition-all rounded-none">
            <div class="h-full w-full">
              <div class="dialog-content">
                <button
                    class="absolute top-4 right-6 m-4 h-10 w-10 dialog-close z-10"
                    @click="closeModal"
                    >
                    <CloseBtn />
                </button>
                  <!-- Content Slot -->
                  <slot></slot>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    TransitionChild,
    Dialog,
    DialogPanel,
  } from '@headlessui/vue';
  import CloseBtn from '@/components/ui/CloseBtn.vue';
  import logoSrc from '@/assets/logo.svg';
  import logoTxtSrc from '@/assets/logo-txt.svg';

  const isOpen = ref(true);
  const emit = defineEmits(['close-dialog']);

  function closeModal() {
    isOpen.value = false;
    emit('close-dialog');
  }
</script>

<style scoped>
.dialog-background {
  background-color: var(--color-background);
}

  .dialog-content {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    font-weight: normal;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    .dialog-content {
      padding: 0 2rem;
    }
  }
</style>
