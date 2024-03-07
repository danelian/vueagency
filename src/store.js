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
    blog: [
      {
        id: 1,
        date: '27 Jan 2021',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-1.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
      {
        id: 2,
        date: '28 Jan 2021',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-2.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
      {
        id: 3,
        date: '29 Jan 2021',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-3.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
      {
        id: 4,
        date: '3 Feb 2022',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-4.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
      {
        id: 5,
        date: '6 Feb 2021',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-5.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
      {
        id: 6,
        date: '11 Feb 2021',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-6.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
      {
        id: 7,
        date: '14 Feb 2021',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-7.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
      {
        id: 8,
        date: '17 Feb 2021',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-8.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
      {
        id: 9,
        date: '21 Feb 2021',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-9.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
      {
        id: 10,
        date: '23 Feb 2021',
        title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        image: '/public/single-blog/single-10.jpg',
        description: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      },
    ],
    teamMembers: [
      {
        id: 1,
        name: 'John Smith',
        position: 'CEO',
        photo: 'john-smith.jpg',
      },
      {
        id: 2,
        name: 'Simon Adams',
        position: 'CTO',
        photo: 'simon-adams.jpg',
      },
      {
        id: 3,
        name: 'Paul Jones',
        position: 'Design Lead',
        photo: 'paul-jones.jpg',
      },
      {
        id: 4,
        name: 'Sara Hardin',
        position: 'Project Manager',
        photo: 'sara-hardin.jpg',
      },
    ],
  }),
});