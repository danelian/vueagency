<script>
import { useStore } from '../store';
import PortfolioHero from '@/components/blocks/PortfolioHero.vue'
import PortfolioArchive from '@/components/blocks/PortfolioArchive.vue'
import PortfolioLets from '@/components/blocks/PortfolioLets.vue'

export default {
  components: {
    PortfolioHero,
    PortfolioArchive,
    PortfolioLets
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
  <PortfolioLets />
</template>