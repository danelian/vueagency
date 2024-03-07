<script>
import { useStore } from '@/store';
import AboutHero from '@/components/blocks/AboutHero.vue'
import Team from '@/components/blocks/Team.vue';

export default {
  components: {
    AboutHero,
    Team,
  },
  setup() {
    const store = useStore();
    return {
      teamMembers: store.teamMembers,
    };
  },
};
</script>

<template>
  <AboutHero />
  <Team :teamMembers="teamMembers" />
</template>