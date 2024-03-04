<script>
export default {
  data() {
    return {
      features: [
        { icon: '/public/home-features/feature-1.svg', title: 'Uses Client First', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
        { icon: '/public/home-features/feature-2.svg', title: 'Two Free Revision Round', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
        { icon: '/public/home-features/feature-3.svg', title: 'Template Customization', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
        { icon: '/public/home-features/feature-4.svg', title: '24/7 Support', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
        { icon: '/public/home-features/feature-5.svg', title: 'Quick Delivery', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
        { icon: '/public/home-features/feature-6.svg', title: 'Hands-on approach', text: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.' },
      ],
    };
  },
};
</script>

<template>
  <section class="home-features">
    <div class="container">
      <div class="heading">
        <div class="subtitle">Features</div>
        <h2 class="title-h2">Design that solves problems, one product at a time</h2>
      </div>
      <div class="home-features__cards">
        <div class="home-features__item" v-for="feature in features" :key="feature.title">
          <div class="home-features__item-icon" :style="{ backgroundImage: `url(${feature.icon})` }"></div>
          <h3 class="title-h6">{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-features {
  background-color: var(--grey-color);
  .heading {
    max-width: 640px;
    margin: 0 auto 40px auto;
    text-align: center;
    .subtitle {
      font-size: 16px;
      font-weight: 500;
      color: var(--dark-blue-color);
      margin-bottom: 12px;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px 32px;
    width: 100%;
  }
  &__item {
    padding: 48px;
    background-color: var(--white-color);
    &-icon {
      display: block;
      margin-bottom: 24px;
      width: 32px;
      height: 32px;
      background-size: contain;
    }
    .title-h6 {
      margin-bottom: 12px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .home-features {
    .heading {
      .subtitle {
        margin-bottom: 8px;
      }
    }
    &__cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    &__item {
      padding: 32px;
    }
  }
}

@media screen and (max-width: 576px) {
  .home-features {
    .heading {
      .subtitle {
        font-size: 14px;
      }
    }
    &__cards {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }
    &__item {
      padding: 20px;
      &-icon {
        width: 24px;
        height: 24px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>