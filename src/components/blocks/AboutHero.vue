<script>

</script>

<template>
  <section class="about-hero">
    <div class="container">
      <div class="about-hero__container">
        <div class="about-hero__left">
          <div class="subtitle">About us</div>
          <h1 class="title-h1">Our designs solve problems</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div class="about-hero__right">
          <img src="/public/about-hero.jpg" alt="photo">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-hero {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  &__left {
    width: 50%;
    p {
      max-width: 490px;
    }
  }
  &__right {
    width: 40%;
    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 55 / 34;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 768px) {
  .about-hero {
    &__container {
      flex-direction: column;
      justify-content: center;
    }
    &__left {
      width: 100%;
      margin-bottom: 48px;
      text-align: center;
      p {
        margin-left: auto;
        margin-right: auto;
      }
    }
    &__right {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .about-hero {
    &__left {
      margin-bottom: 40px;
    }
  }
}
</style>