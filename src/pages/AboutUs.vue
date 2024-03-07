<script>
import { useStore } from '@/store';
import AboutHero from '@/components/blocks/AboutHero.vue'
import WhoWeAre from '@/components/blocks/WhoWeAre.vue'
import AboutProcess from '@/components/blocks/AboutProcess.vue'
import AboutInfo from '@/components/blocks/AboutInfo.vue'
import Team from '@/components/blocks/Team.vue';

export default {
  components: {
    AboutHero,
    WhoWeAre,
    AboutProcess,
    AboutInfo,
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
  <AboutProcess />
  <AboutInfo />
  <Team :teamMembers="teamMembers" />
</template>