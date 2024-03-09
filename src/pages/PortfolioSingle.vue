<script>
import { useStore } from '@/store';
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import PortfolioLets from '@/components/blocks/PortfolioLets.vue'

export default {
  props: ['id'],
  components: {
    Breadcrumbs,
    PortfolioLets
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
      const post = store.$state.cases.find((item) => item.id === Number(postId));
      this.post = post || {};

      // Обновите массив хлебных крошек в вашем компоненте
      this.breadcrumbs = [
        { text: 'Home', to: '/' },
        { text: 'Portfolio', to: '/portfolio' },
        { text: this.post.title, to: null },
      ];
    },
  },
};
</script>

<template>
  <Breadcrumbs :breadcrumbs="breadcrumbs" />
  <section class="single">
    <div class="container">
      <div class="single-top">
        <h2 class="title-h2">{{ post.title }}</h2>
        <p>{{ post.singleDescription }}</p>
        <img :src="post.image" alt="Post Image">
        <div class="chars">
          <div v-if="post.client">
            <span>Client:</span>
            <p class="title-h6">{{ post.client }}</p>
          </div>
          <div v-if="post.service">
            <span>Service:</span>
            <p class="title-h6">{{ post.service }}</p>
          </div>
          <div v-if="post.deliverable">
            <span>Deliverable:</span>
            <p class="title-h6">{{ post.deliverable }}</p>
          </div>
        </div>
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
  <PortfolioLets />
</template>

<style lang="scss" scoped>
.single {
  padding-top: 80px;
  &-top {
    .title-h2 {
      max-width: 640px;
    }
    p {
      max-width: 840px;
    }
    img {
      width: 100%;
      margin-top: 48px;
      aspect-ratio: 62 / 38;
    }
  }
  .chars {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-top: 48px;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(40,41,56,.3);
    &>div {
      width: calc(33.33% - 16px);
      &:not(:last-child) {
        margin-right: 32px;
      }
      span {
        display: block;
        width: 100%;
        font-size: 16px;
        color: rgba(40,41,56,.8);
      }
      .title-h6 {
        margin-top: 4px;
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
    .chars {
      flex-direction: column;
      margin-top: 32px;
      padding-bottom: 24px;
      &>div {
        width: 100%;
        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 16px;
        }
      }
    }
    &-container {
      margin-top: 40px;
    }
  }
}
</style>