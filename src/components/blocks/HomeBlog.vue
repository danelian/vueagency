<script>
import { useStore } from '../../store'

export default {
  setup() {
    const store = useStore();

    return {
      blog: store.blog
    }
  }
}
</script>

<template>
  <section class="home-blog">
    <div class="container">
      <div class="heading">
        <h2 class="title-h2">Our blog</h2>
      </div>
      <div class="home-blog__cards">
        <RouterLink v-for="item in blog.slice(0, 3)" :key="item.id" :to="`/blog/${item.id}`" class="blog-card">
          <img :src="`${item.image}`" class="blog-card__thumb" :alt="`${item.title}`">
          <div class="blog-card__date">{{ item.date }}</div>
          <h3 class="title-h6">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <div class="link-witharrow">Read More<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1587 1.21301L24.787 5.84135C25.071 6.12537 25.071 6.58585 24.787 6.86987L20.1587 11.4982C19.8746 11.7822 19.4141 11.7822 19.1301 11.4982C18.8461 11.2142 18.8461 10.7537 19.1301 10.4697L22.5169 7.08288H1V5.62834H22.5169L19.1301 2.24153C18.8461 1.95751 18.8461 1.49703 19.1301 1.21301C19.4141 0.928996 19.8746 0.928996 20.1587 1.21301Z" fill="currentColor"/></svg></div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-blog {
  .heading {
    margin-bottom: 48px;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  .home-blog {
    .heading {
      margin-bottom: 36px;
    }
    &__cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      .blog-card:nth-child(3) {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .home-blog {
    .heading {
      margin-bottom: 28px;
    }
    &__cards {
      grid-template-columns: repeat(1, 1fr);
      gap: 48px;
      .blog-card:nth-child(3) {
        display: flex;
      }
    }
  }
}
</style>