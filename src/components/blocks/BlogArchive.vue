<script>
import { useStore } from '@/store';

export default {
  data() {
    return {
      currentPage: 1, // Текущая страница
      postsPerPage: 6, // Количество постов на странице
    };
  },
  computed: {
    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return useStore().$state.blog.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(useStore().$state.blog.length / this.postsPerPage);
    },
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<template>
  <section class="blog-archive">
    <div class="container">
      <div class="heading">
        <h1 class="title-h2">Our Blog</h1>
      </div>
      <div class="blog-archive__cards">
        <RouterLink v-for="post in paginatedPosts" :key="post.id" :to="`/blog/${post.id}`" class="blog-card">
          <img :src="`${post.image}`" class="blog-card__thumb" :alt="`${post.title}`">
          <div class="blog-card__date">{{ post.date }}</div>
          <h3 class="title-h6">{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <div class="link-witharrow">Read More<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1587 1.21301L24.787 5.84135C25.071 6.12537 25.071 6.58585 24.787 6.86987L20.1587 11.4982C19.8746 11.7822 19.4141 11.7822 19.1301 11.4982C18.8461 11.2142 18.8461 10.7537 19.1301 10.4697L22.5169 7.08288H1V5.62834H22.5169L19.1301 2.24153C18.8461 1.95751 18.8461 1.49703 19.1301 1.21301C19.4141 0.928996 19.8746 0.928996 20.1587 1.21301Z" fill="currentColor"/></svg></div>
        </RouterLink>
      </div>
      <div class="pagination">
        <!-- Постраничная навигация -->
        <button @click="prevPage" :disabled="currentPage === 1">
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5859 -1.23626e-07L13 3.21951L3.96947 10.9106L13 18.7805L11.5859 22L9.06922e-07 11.626L1.06329e-06 9.8374L11.5859 -1.23626e-07Z" fill="currentColor"/>
          </svg>
        </button>
        <span class="pagination-number">{{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41412 22L0 18.7805L9.03053 11.0894L0 3.21951L1.41412 0L13 10.374V12.1626L1.41412 22Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog-archive {
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px 32px;
    width: 100%;
  }
  .heading {
    text-align: center;
    margin-bottom: 48px;
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 60px;
  &-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    font-size: 20px;
    font-weight: 500;
    color: var(--royal-blue-color);
  }
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--dark-blue-color);
    width: 48px;
    height: 48px;
    border-radius: 50px;
    padding: 0;margin: 0;
    border: 0;
    outline: none;
    background-color: var(--grey-color);
    transition: color .3s ease, background-color .3s ease;
    svg {
      width: 10px;
    }
    &:first-child {
      margin-right: 12px;
    }
    &:last-child {
      margin-left: 12px;
    }
    &:hover {
      color: var(--white-color);
      background-color: var(--royal-blue-color);
    }
    &:disabled {
      color: rgba(40,41,56,.5) !important;
      background-color: var(--grey-color) !important;
    }
  }
}

@media screen and (max-width: 1024px) {
  .blog-archive {
    &__cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 64px 24px;
    }
    .heading {
      margin-bottom: 40px;
    }
  }
}

@media screen and (max-width: 576px) {
  .blog-archive {
    &__cards {
      grid-template-columns: repeat(1, 1fr);
      gap: 40px;
    }
    .heading {
      margin-bottom: 24px;
    }
  }
  .pagination {
    margin-top: 36px;
    &-number {
      width: 36px;
      height: 36px;
      font-size: 16px;
    }
    button {
      width: 36px;
      height: 36px;
      svg {
        width: 8px;
      }
    }
  }
}
</style>