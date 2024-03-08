<script>
import { computed } from 'vue';
import { useStore } from '@/store';

export default {
  computed: {
    shouldShowMoreButton() {
      const remainingCases = this.remainingCases || [];
      return this.visibleCount < this.displayedCases.length + remainingCases.length;
    },
    displayedCases() {
      const cases = useStore().cases || [];
      if (this.activeTab === 'all') {
        return this.paginatedCases;
      } else {
        const filteredCases = cases.filter(item => item.category === this.activeTab);
        return filteredCases.slice(0, 6);
      }
    },
    paginatedCases() {
      const cases = useStore().cases || [];
      return cases.slice(0, this.visibleCount);
    },
    remainingCases() {
      const cases = useStore().cases || [];
      return cases.slice(this.visibleCount);
    },
  },
  data() {
    return {
      activeTab: 'all',
      visibleCount: 6,
    };
  },
  methods: {
    changeTab(category) {
      this.activeTab = category;
      this.visibleCount = 6;
    },
    showMore() {
      const remainingCases = this.remainingCases || [];
      if (this.shouldShowMoreButton) {
        this.visibleCount += remainingCases.length;
      }
    },
  },
};
</script>

<template>
  <section class="portfolio-archive">
    <div class="container">
      <div class="tab-nav">
        <button 
          v-for="category in ['all', 'UI Design', 'Webflow Design', 'Figma Design']" 
          :key="category"
          @click="changeTab(category)"
          type="button"
          :class="{ 'active': activeTab === category }"
        >
          {{ category === 'all' ? 'All' : category }}
        </button>
      </div>
      <div class="tab-content">
        <RouterLink v-for="item in displayedCases" :key="item.id" :to="`/portfolio/${item.id}`" class="pcard">
          <img :src="`${item.image}`" :alt="`${item.title}`">
          <h3 class="title-h3">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <div class="link-witharrow">View project<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1587 1.21301L24.787 5.84135C25.071 6.12537 25.071 6.58585 24.787 6.86987L20.1587 11.4982C19.8746 11.7822 19.4141 11.7822 19.1301 11.4982C18.8461 11.2142 18.8461 10.7537 19.1301 10.4697L22.5169 7.08288H1V5.62834H22.5169L19.1301 2.24153C18.8461 1.95751 18.8461 1.49703 19.1301 1.21301C19.4141 0.928996 19.8746 0.928996 20.1587 1.21301Z" fill="currentColor"/></svg></div>
        </RouterLink>
      </div>
      <button v-if="shouldShowMoreButton" class="button-second" @click="showMore">Show more</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-archive {
  padding-top: 80px;
  padding-bottom: 96px;
  .button-second {
    margin: 60px auto 0 auto;
    display: flex;
    width: 230px;
  }
}
.tab {
  &-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 32px;
    width: 100%;
    button {
      margin: 16px;
      font-size: 18px;
      font-weight: 500;
      color: rgba(40,41,56,.7);
      padding: 0;
      border: 0;
      outline: none;
      background: none;
      cursor: pointer;
      &.active {
        color: var(--royal-blue-color);
      }
    }
  }
  &-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 64px 32px;
    width: 100%;
  }
}
.pcard {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
  img {
    width: 100%;
    aspect-ratio: 62 / 38;
    object-fit: cover;
    margin-bottom: 24px;
  }
  .title-h3 {
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 24px;
    color: rgba(40,41,56,.7);
  }
}

@media screen and (max-width: 1024px) {
  .portfolio-archive {
    padding-top: 60px;
    padding-bottom: 60px;
    .button-second {
      margin-top: 40px;
    }
  }
  .tab {
    &-content {
      gap: 48px 24px;
    }
  }
  .pcard {
    img {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 576px) {
  .portfolio-archive {
    padding-top: 40px;
    .button-second {
      width: 100%;
    }
  }
  .tab {
    &-nav {
      margin-bottom: 24px;
      button {
        margin: 12px;
        font-size: 16px;
      }
    }
    &-content {
      grid-template-columns: repeat(1, 1fr);
      gap: 44px;
    }
  }
  .pcard {
    .title-h3 {
      margin-bottom: 8px;
    }
    p {
      margin-bottom: 12px;
    }
  }
}
</style>