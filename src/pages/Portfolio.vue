<script>
import { useStore } from '../store';
import PortfolioHero from '@/components/blocks/PortfolioHero.vue'
import PortfolioArchive from '@/components/blocks/PortfolioArchive.vue'

export default {
  components: {
    PortfolioHero,
    PortfolioArchive
  },
  setup() {
    const store = useStore();

    return {
      cases: store.cases,
    };
  },
};
</script>

<template>
  <PortfolioHero />
  <PortfolioArchive />
</template>