<script>
import { useStore } from '@/store';
import Team from '@/components/blocks/Team.vue';

export default {
  components: {
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
  <Team :teamMembers="teamMembers" />
</template>