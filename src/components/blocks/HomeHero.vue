<script></script>

<template>
  <section class="home-hero">
    <div class="container">
      <div class="home-hero__container">
        <div class="home-hero__content">
          <h1 class="title-h1">Building stellar websites for early startups</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div class="row-buttons">
            <RouterLink to="/" class="button-primary">View our work</RouterLink>
            <RouterLink to="/pricing" class="link-witharrow">View Pricing<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1587 1.21301L24.787 5.84135C25.071 6.12537 25.071 6.58585 24.787 6.86987L20.1587 11.4982C19.8746 11.7822 19.4141 11.7822 19.1301 11.4982C18.8461 11.2142 18.8461 10.7537 19.1301 10.4697L22.5169 7.08288H1V5.62834H22.5169L19.1301 2.24153C18.8461 1.95751 18.8461 1.49703 19.1301 1.21301C19.4141 0.928996 19.8746 0.928996 20.1587 1.21301Z" fill="currentColor"/></svg></RouterLink>
          </div>
        </div>
        <div class="home-hero__image">
          <img src="/public/illustrations/home-hero-illustration.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-hero {
  padding: 128px 0;
  min-height: 670px;
  color: var(--white-color);
  background-color: var(--tint-blue-color);
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  &__content {
    width: calc(47% - 30px);
    .title-h1 {
      color: var(--white-color);
    }
    .link-witharrow {
      color: var(--white-color);
      &:hover {
        color: var(--yellow-color);
      }
    }
    p {
      max-width: 420px;
    }
  }
  &__image {
    width: calc(53% - 30px);
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .home-hero {
    padding: 100px 0;
    min-height: 500px;
    &__content {
      width: calc(50% - 12px);
    }
    &__image {
      width: calc(50% - 12px);
    }
  }
}

@media screen and (max-width: 768px) {
  .home-hero {
    padding: 48px 0;
    min-height: auto;
    &__container {
      justify-content: flex-start;
      flex-direction: column;
    }
    &__content {
      width: 100%;
    }
    &__image {
      width: 80%;
      margin: 48px auto 0 auto;
    }
  }
}
</style>