<script>

</script>

<template>
  <section class="about-info">
    <div class="container">
      <div class="about-info__block">
        <div class="about-info__content">
          <div class="subtitle">Our Mission</div>
          <h2 class="title-h3">Inspire, Innovate, Share</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="about-info__image">
          <img src="/public/about-mission-image.jpg" alt="">
        </div>
      </div>
      <div class="about-info__block">
        <div class="about-info__content">
          <div class="subtitle">Our Vision</div>
          <h2 class="title-h3">Laser focus</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="about-info__image">
          <img src="/public/about-vision-image.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-info {
  background-color: var(--accent-color);
  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 96px;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
  &__content {
    width: 50%;
  }
  &__image {
    width: 40%;
    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 52 / 34;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 768px) {
  .about-info {
    &__block {
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      &:not(:last-child) {
        margin-bottom: 60px;
      }
      &:nth-child(even) {
        flex-direction: column;
      }
    }
    &__content {
      width: 100%;
      margin-bottom: 32px;
    }
    &__image {
      width: 100%;
    }
  }
}

@media screen and (max-width: 576px) {
  .about-info {
    &__block {
      &:not(:last-child) {
        margin-bottom: 48px;
      }
      &__content {
        margin-bottom: 24px;
      }
    }
  }
}
</style>