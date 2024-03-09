<script>
import { useStore } from '@/store';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

export default {
  props: ['id'],
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      post: {},
      breadcrumbs: [],
    };
  },
  mounted() {
    this.loadPostDetails(this.$route.params.id);
  },
  methods: {
    loadPostDetails(postId) {
      const store = useStore();
      const post = store.$state.blog.find((item) => item.id === Number(postId));
      this.post = post || {};

      // Обновите массив хлебных крошек в вашем компоненте
      this.breadcrumbs = [
        { text: 'Home', to: '/' },
        { text: 'Blog', to: '/blog' },
        { text: this.post.title, to: null },
      ];
    },
  },
};
</script>

<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <section class="single">
      <div class="container">
        <div class="single-top">
          <h2 class="title-h2">{{ post.title }}</h2>
          <div class="single-top__info">
            <p class="">{{ post.author }}</p>
            <p class="">{{ post.date }}</p>
          </div>
          <img :src="post.image" alt="Post Image">
        </div>
        <div class="single-container">
          <h2 class="title-h3">{{ post.heading2 }}</h2>
          <p>{{ post.paragraph2 }}</p>
          <h3 class="title-h5">{{ post.heading3 }}</h3>
          <p>{{ post.paragraph3 }}</p>
          <ul>
            <li v-for="item in post.lists" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.single {
  padding-top: 80px;
  &-top {
    text-align: center;
    .title-h2 {
      max-width: 950px;
      margin-right: auto;
      margin-left: auto;
    }
    p {
      font-weight: 500;
    }
    img {
      width: 100%;
      margin-top: 48px;
      aspect-ratio: 128 / 48;
      object-fit: cover;
    }
    &__info {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      p {
        &:not(:last-child) {
          margin-right: 12px;
        }
      }
    }
  }
  &-container {
    max-width: 840px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 96px;
    p {
      margin-bottom: 24px;
    }
    ul, ol {
      li {
        &:not(:last-child) {
          margin-bottom: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .single {
    &-top {
      img {
        margin-top: 32px;
      }
    }
    &-container {
      margin-top: 40px;
    }
  }
}
</style>