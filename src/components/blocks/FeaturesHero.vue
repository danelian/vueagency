<script></script>

<template>
  <section class="features-hero">
    <div class="container">
      <div class="features-hero__container">
        <div class="features-hero__content">
          <h1 class="title-h1">All the features you need</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="row-buttons">
            <RouterLink to="/pricing" class="button-primary">View Pricing</RouterLink>
          </div>
        </div>
        <div class="features-hero__image">
          <img src="/public/illustrations/features-hero-illustration.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.features-hero {
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
      max-width: 460px;
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
  .features-hero {
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
  .features-hero {
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