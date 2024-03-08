<script>
import { useStore } from '@/store'
import PricingBlock from '@/components/blocks/PricingBlock.vue'
import Faq from '@/components/blocks/Faq.vue'

export default {
  components: {
    PricingBlock,
    Faq
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
  <Faq />
</template>