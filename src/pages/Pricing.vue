<script>
import { useStore } from '@/store'
import PricingBlock from '@/components/blocks/PricingBlock.vue'

export default {
  components: {
    PricingBlock,
  },
  setup() {
    const store = useStore();
    return {
      tariffs: store.tariffs,
    }
  }
}
</script>

<template>
  <PricingBlock :tariffs="tariffs" />
</template>