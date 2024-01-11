import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [],
  }),
  actions: {
    async fetchData() {
      // const response = await fetch('your-api-endpoint');
      // this.projects = await response.json();

      this.projects = [p, f, p, p, p, p];
    },
  },
});

var p = {
  title: 'voo.fm',
  brief: 'A friendly place in Mastodon universe',
  url: 'voo.fm',
  repo: 'https://github.com/bacv/voo-fm',
  logo: '',
  screens: [''],
  desc: 'More ......',
  tags: ['ci', 'devops', 'mastodon'],
  featureProject: false,
}

var f = {
  title: 'voo.fm',
  brief: 'A friendly place in Mastodon universe',
  url: 'voo.fm',
  repo: 'https://github.com/bacv/voo-fm',
  logo: '',
  screens: [''],
  desc: 'More ......',
  tags: ['ci', 'devops', 'mastodon'],
  featureProject: true,
}
