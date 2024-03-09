<script>
import { useStore } from '../store';
import BlogArchive from '@/components/blocks/BlogArchive.vue'

export default {
  components: {
    BlogArchive
  },
  setup() {
    const store = useStore();

    return {
      blog: store.blog,
    };
  },
}
</script>

<template>
  <BlogArchive />
</template>