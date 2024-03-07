<script>
import { useStore } from '@/store';
import AboutHero from '@/components/blocks/AboutHero.vue'
import WhoWeAre from '@/components/blocks/WhoWeAre.vue'
import Team from '@/components/blocks/Team.vue';

export default {
  components: {
    AboutHero,
    WhoWeAre,
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
  <WhoWeAre />
  <Team :teamMembers="teamMembers" />
</template>