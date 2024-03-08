<script>
import { useStore } from '../store';
import PortfolioHero from '@/components/blocks/PortfolioHero.vue'

export default {
  components: {
    PortfolioHero,
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
</template>