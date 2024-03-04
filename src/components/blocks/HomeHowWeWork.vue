<script>
export default {
  data() {
    return {
      pointItems: [
        { icon: '01', title: 'Strategy', description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.' },
        { icon: '02', title: 'Wireframing', description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.' },
        { icon: '03', title: 'Design', description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.' },
        { icon: '04', title: 'Development', description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.' },
      ],
    };
  },
};
</script>

<template>
  <section class="home-howwework">
    <div class="container">
      <div class="home-howwework__container">
        <div class="home-howwework__left">
          <div class="heading">
            <h2 class="title-h2">How we work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <RouterLink to="/contact-us" class="link-witharrow">Get in touch with us<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1587 1.21301L24.787 5.84135C25.071 6.12537 25.071 6.58585 24.787 6.86987L20.1587 11.4982C19.8746 11.7822 19.4141 11.7822 19.1301 11.4982C18.8461 11.2142 18.8461 10.7537 19.1301 10.4697L22.5169 7.08288H1V5.62834H22.5169L19.1301 2.24153C18.8461 1.95751 18.8461 1.49703 19.1301 1.21301C19.4141 0.928996 19.8746 0.928996 20.1587 1.21301Z" fill="currentColor"/></svg></RouterLink>
          </div>
        </div>
        <div class="home-howwework__right">
          <div class="points__list">
            <div v-for="item in pointItems" :key="item.icon" class="point-item">
              <div class="point-item__icon">{{ item.icon }}</div>
              <h3 class="title-h5">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-howwework {
  background-color: var(--grey-color);
  &__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
  &__left {
    width: calc(41.5% - 16px);
    .heading {
      p {
        max-width: 400px;
      }
      .link-witharrow {
        margin-top: 20px;
        color: var(--royal-blue-color);
        &:hover {
          color: var(--tint-blue-color);
        }
      }
    }
  }
  &__right {
    width: calc(59.5% - 16px);
  }
}

.point {
  &s__list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    .point-item {
      margin-top: 44px;
      width: calc(50% - 12px);
      &:nth-child(odd) {
        margin-right: 24px;
      }
      &:nth-child(-n+2) {
        margin-top: 0;
      }
    }
  }
  &-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    &__icon {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
      width: 48px;
      height: 48px;
      font-size: 18px;
      font-weight: 500;
      color: var(--white-color);
      z-index: 0;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 48px;
        height: 48px;
        background-image: url('/public/icons/point.svg');
        background-size: contain;
        z-index: -1;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-howwework {
    &__container {
      justify-content: flex-start;
      flex-direction: column;
    }
    &__left {
      width: 100%;
      margin-bottom: 40px;
    }
    &__right {
      width: 100%;
    }
  }
}

@media screen and (max-width: 576px) {
  .point {
  &s__list {
    .point-item {
      margin-top: 0;
      width: 100%;
      &:nth-child(odd) {
        margin-right: 0;
      }
      &:nth-child(-n+2) {
        margin-top: 0;
      }
      &:not(:last-child) {
        margin-bottom: 28px;
      }
    }
  }
  &-item {
    &__icon {
      margin-bottom: 12px;
      width: 40px;
      height: 40px;
      font-size: 15px;
      &::after {
        width: 40px;
        height: 40px;
      }
    }
  }
}
}
</style>