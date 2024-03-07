<script>

</script>

<template>
  <section class="whoweare">
    <div class="container">
      <div class="whoweare__content">
        <h2 class="subtitle">Who we are</h2>
        <div class="whoweare__row">
          <div class="whoweare__col">
            <h3 class="title-h3">Goal focussed</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="whoweare__col">
            <h3 class="title-h3">Continuous improvement</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
      <img src="/public/whoweare-image.jpg" class="whoweare__image" alt="">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.whoweare {
  padding: 0;
  &__content {
    width: 100%;
    padding: 80px;
    background-color: #F4F5F5;
  }
  &__row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
  &__col {
    width: calc(50% - 16px);
  }
  &__image {
    width: 100%;
    height: 340px;
    object-fit: cover;
  }
}

@media screen and (max-width: 1024px) {
  .whoweare {
    &__content {
      padding: 40px;
    }
    &__row {
      justify-content: flex-start;
      flex-direction: column;
    }
    &__col {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
    &__image {
      height: 240px;
    }
  }
}

@media screen and (max-width: 576px) {
  .whoweare {
    &__content {
      padding: 28px 20px;
      .subtitle {
        margin-bottom: 16px;
      }
    }
    &__image {
      height: 180px;
    }
  }
}
</style>