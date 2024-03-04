import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    cases: [
      {
        id: 1,
        title: 'Workhub office Webflow Webflow Design',
        image: '/public/home-portfolio-project-1.jpg',
        description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam',
      },
      {
        id: 2,
        title: 'Unisaas Website Design',
        image: '/public/home-portfolio-project-2.jpg',
        description: 'Euismod faucibus turpis eu pellentesque et velit.',
      },
      {
        id: 3,
        title: 'Worship Website Design',
        image: '/public/home-portfolio-project-3.jpg',
        description: 'Euismod faucibus turpis gravida.',
      },
      {
        id: 4,
        title: 'Workshop Website Design',
        image: '/public/home-portfolio-project-4.jpg',
        description: 'Euismod faucibus turpis gravida.',
      },
    ],
  }),
});