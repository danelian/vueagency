<script>
export default {
  props: {
    tariffs: Array,
  }
}
</script>

<template>
  <section class="pricing-block">
    <div class="container">
      <div class="heading">
        <h2 class="title-h2">Our Pricing Plans</h2>
        <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
      </div>
      <div class="pricing-block__cards">
        <div v-for="(tariff, index) in tariffs" :key="index" class="price-card" :class="{ 'primary-price': index === 1 }">
          <div class="price-card__heading">
            <div class="title-h3">{{ tariff.price }}</div>
            <span>{{ tariff.per }}</span>
          </div>
          <h3 class="title-h6">{{ tariff.title }}</h3>
          <p>{{ tariff.description }}</p>
          <div class="points">
            <div v-for="(point, pointIndex) in tariff.points" :key="pointIndex" class="point" :class="{ 'point-true': point.included, 'point-false': !point.included }">{{ point.text }}</div>
          </div>
          <button type="button" :class="{ 'button-primary': index === 1, 'button-second': index !== 1 }">Get started</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pricing-block {
  .heading {
    margin: 0 auto 60px;
    max-width: 560px;
    text-align: center;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100%;
  }
}
.price-card {
  display: flex;
  flex-direction: column;
  padding: 52px 48px;
  width: 100%;
  border-radius: 12px;
  background-color: var(--grey-color);
  &__heading {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    .title-h3 {
      margin-bottom: 0;
    }
    span {
      display: block;
      margin-left: 8px;
      font-size: 16px;
      color: var(--royal-blue-color);
    }
  }
  .title-h6 {
    font-weight: 500;
  }
  &>p {
    font-weight: 500;
    margin-bottom: 40px;
  }
  .button-second,
  .button-primary {
    margin: auto auto 0 auto;
    width: 260px;
  }
  &.primary-price {
    position: relative;
    overflow: hidden;
    color: var(--white-color);
    background-color: var(--tint-blue-color);
    z-index: 0;
    &::before {
      content: '';
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      width: 1000px;
      height: 1000px;
      border-radius: 50%;
      background-color: rgba(255,255,255,.05);
      z-index: -1;
    }
    .price-card__heading {
      .title-h3 {
        color: var(--white-color);
      }
      span {
        color: var(--yellow-color);
      }
    }
    .title-h6 {
      color: var(--white-color);
    }
    &>p {
      color: rgba(255,255,255,.5);
    }
    .point {
      color: var(--white-color);
    }
  }
}
.point {
  &s {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 48px;
  }
  position: relative;
  padding-left: 36px;
  width: 100%;
  font-size: 16px;
  line-height: 1.3;
  color: var(--dark-blue-color);
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &-true {
    &::before {
      background-image: url('../../../public/icons/point-true.svg');
    }
  }
  &-false {
    color: var(--font-color);
    &::before {
      background-image: url('../../../public/icons/point-false.svg');
    }
  }
}

@media screen and (max-width: 1200px) {
  .pricing-block {
    .heading {
      margin-bottom: 48px;
    }
    &__cards {
      gap: 20px;
    }
  }
  .price-card {
    padding: 24px 20px;
  }
}

@media screen and (max-width: 1024px) {
  .pricing-block {
    .heading {
      margin-bottom: 40px;
    }
    &__cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .price-card {
    padding: 36px 28px;
    &>p {
      margin-bottom: 28px;
    }
    .button-second,
    .button-primary {
      width: 100%;
    }
  }
  .point {
    &s {
      margin-bottom: 36px;
    }
  }
}
</style>