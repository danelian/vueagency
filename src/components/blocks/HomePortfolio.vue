<script>
import { useStore } from '../../store';

export default {
  setup() {
    const store = useStore();

    return {
      cases: store.cases,
    };
  },
};
</script>

<template>
  <section class="home-portfolio">
    <div class="container">
      <div class="heading">
        <h2 class="title-h2">View our projects</h2>
      </div>
      <RouterLink to="/portfolio" class="link-witharrow">View More<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1587 1.21301L24.787 5.84135C25.071 6.12537 25.071 6.58585 24.787 6.86987L20.1587 11.4982C19.8746 11.7822 19.4141 11.7822 19.1301 11.4982C18.8461 11.2142 18.8461 10.7537 19.1301 10.4697L22.5169 7.08288H1V5.62834H22.5169L19.1301 2.24153C18.8461 1.95751 18.8461 1.49703 19.1301 1.21301C19.4141 0.928996 19.8746 0.928996 20.1587 1.21301Z" fill="currentColor"/></svg></RouterLink>
      <div class="home-portfolio__grid">
          <RouterLink v-for="item in cases.slice(0, 3)" :key="item.id" :to="`/portfolio/${item.id}`" class="home-portfolio-item" :style="{ backgroundImage: `url('${item.image}')` }">
            <div class="home-portfolio-item__content">
              <h3 class="title-h6">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="link-witharrow">View project<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1587 1.21301L24.787 5.84135C25.071 6.12537 25.071 6.58585 24.787 6.86987L20.1587 11.4982C19.8746 11.7822 19.4141 11.7822 19.1301 11.4982C18.8461 11.2142 18.8461 10.7537 19.1301 10.4697L22.5169 7.08288H1V5.62834H22.5169L19.1301 2.24153C18.8461 1.95751 18.8461 1.49703 19.1301 1.21301C19.4141 0.928996 19.8746 0.928996 20.1587 1.21301Z" fill="currentColor"/></svg></div>
            </div>
          </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-portfolio {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
  &__grid {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 32px;
    margin-top: 60px;
    width: 100%;
    min-height: 600px;
    grid-template-areas: 
      "one one two"
      "one one three";
    .home-portfolio-item {
      &:nth-child(1) { grid-area: one; }
      &:nth-child(2) { grid-area: two; }
      &:nth-child(3) { grid-area: three; }
    }
  }
  &-item {
    position: relative;
    text-decoration: none;
    background-size: cover;
    background-repeat: no-repeat;
    &:hover {
      .link-witharrow {
        color: var(--white-color);
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
      padding: 40px;
      color: var(--white-color);
      background: rgb(28,30,83);
      background: linear-gradient(130deg, rgba(28,30,83,0.4) 0%, rgba(28,30,83,1) 100%);
    }
    .link-witharrow {
      margin-top: 16px;
      color: var(--yellow-color);
    }
    .title-h6 {
      color: var(--white-color);
    }
    &:nth-child(1) {
      .home-portfolio-item__content {
        width: 50%;
        .link-witharrow {
          margin-top: 36px;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .home-portfolio {
    .container {
      &>.link-witharrow {
        margin: 28px auto 0 auto;
        order: 1;
      }
    }
    &__grid {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 40px;
      grid-template-areas: 
        "one one"
        "two three";
    }
    &-item {
      &__content {
        padding: 24px 24px 28px 24px;
      }
      &:nth-child(1) {
        .home-portfolio-item__content {
          width: 100%;
          .link-witharrow {
            margin-top: 16px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .home-portfolio {
    &__grid {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
      margin-top: 28px;
      grid-template-areas: none;
      .home-portfolio-item {
        &:nth-child(1) { grid-area: auto; }
        &:nth-child(2) { grid-area: auto; }
        &:nth-child(3) { grid-area: auto; }
      }
    }
    &-item {
      min-height: 220px;
      &__content {
        padding: 16px 16px 20px 20px;
      }
    }
  }
}
</style>