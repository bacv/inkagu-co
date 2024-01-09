import { defineStore } from 'pinia';

export const useHomeViewStore = defineStore('homeView', {
  state: () => ({
    title: '',
  }),
  actions: {
    async fetchData() {
      const title = 'Turning ideas into awesome products, one LOC at a time';

      // const response = await fetch('your-api-endpoint');
      // this.projects = await response.json();

      this.title = title;
    },
  },
});
