<script>

</script>

<template>
  <section class="about-process">
    <div class="container">
      <div class="heading">
        <h2 class="title-h2">The process we follow</h2>
      </div>
      <div class="process__cards">
        <div class="process-item">
          <h3 class="title-h6">Planning</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
        <div class="process-item">
          <h3 class="title-h6">Conception</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
        <div class="process-item">
          <h3 class="title-h6">Design</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
        <div class="process-item">
          <h3 class="title-h6">Development</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-process {
  .heading {
    text-align: center;
    margin-bottom: 48px;
  }
}
.process {
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 48px 32px;
    width: 100%;
  }
  &-item {
    position: relative;
    padding-top: 56px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: var(--royal-blue-color);
    }
    &::after {
      content: '';
      position: absolute;
      top: 11px;
      left: 48px;
      width: calc(100% - 48px);
      height: 2px;
      border: 1px dashed var(--royal-blue-color);
      border-radius: 5px;
    }
    .title-h6 {
      font-weight: 500;
    }
  }
}

@media screen and (max-width: 1024px) {
  .about-process {
    .heading {
      margin-bottom: 40px;
    }
  }
  .process {
    &__cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 36px 20px;
    }
    &-item {
      padding-top: 40px;
    }
  }
}

@media screen and (max-width: 576px) {
  .about-process {
    .heading {
      margin-bottom: 32px;
    }
  }
  .process {
    &-item {
      &::before {
        width: 16px;
        height: 16px;
      }
      &::after {
        top: 8px;
        left: 28px;
        width: calc(100% - 28px);
        height: 1px;
      }
      .title-h6 {
        font-size: 16px;
      }
      p {
        font-size: 14px;
        line-height: 1.3;
      }
    }
  }
}
</style>