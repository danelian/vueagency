<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, A11y],
      };
    },
    data() {
      return {
        reviews: [
          { text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."', photo: '/review-person-photo-1.jpg', name: 'Jenny Wilson', post: 'Vice President'},
          { text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."', photo: '/review-person-photo-1.jpg', name: 'Jenny Wilson', post: 'Vice President'},
        ]
      }
    }
  };
</script>

<template>
  <section class="home-reviews">
    <div class="container">
      <div class="home-reviews__container">
        <div class="home-reviews__left">
          <div class="heading">
            <h2 class="title-h3">What our clients say about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
        </div>
        <div class="home-reviews__right">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="20"
            :navigation="true"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="home-reviews__slider"
          >
            <swiper-slide v-for="review in reviews" :key="review.name">
              <div class="home-reviews__item">
                <p class="home-reviews__item-quote">{{ review.text }}</p>
                <div class="home-reviews__item-person">
                  <img :src="review.photo" :alt="review.name">
                  <div class="home-reviews__item-person-info">
                    <h3 class="home-reviews__item-person-name">{{ review.name }}</h3>
                    <p class="home-reviews__item-person-post">{{ review.post }}</p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-reviews {
  background-color: rgba(244,246,252,.5);
  &__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
  &__left {
    width: calc(33% - 16px);
  }
  &__right {
    width: calc(67% - 16px);
  }
  .heading {
    max-width: 330px;
  }
  &__slider {
    width: 100%;
    .swiper-pagination {
      display: none;
    }
  }
  &__item {
    &-quote {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 32px;
      font-weight: 600;
      line-height: 1.3;
      color: var(--dark-blue-color);
    }
    &-person {
      margin-top: 48px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      >img {
        margin-right: 14px;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
      }
      &-name {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 18px;
        font-weight: 500;
        color: var(--dark-blue-color);
      }
      &-post {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 12px;
        color: var(--dark-blue-color);
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--white-color);
    transition: background-color .3s ease;
    &::after {
      content: '';
      width: 24px;
      height: 24px;
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M7.41412%2023L6%2019.7805L15.0305%2012.0894L6%204.21951L7.41412%201L19%2011.374V13.1626L7.41412%2023Z%22%20fill%3D%22%23282938%22/%3E%0A%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
      transition: all .3s ease;
    }
    &:hover {
      background-color: var(--royal-blue-color);
      &::after {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M7.41412%2023L6%2019.7805L15.0305%2012.0894L6%204.21951L7.41412%201L19%2011.374V13.1626L7.41412%2023Z%22%20fill%3D%22white%22/%3E%0A%3C/svg%3E");
      }
    }
    &.swiper-button-disabled {
      opacity: 1;
      &::after {
        opacity: .5;
      }
    }
  }
  .swiper-button-prev {
    left: auto;
    right: 58px;
    bottom: 0;
    top: auto;
    &::after {
      transform: rotate(-180deg);
    }
  }
  .swiper-button-next {
    right: 0;
    bottom: 0;
    top: auto;
  }
}

@media screen and (max-width: 1024px) {
  .home-reviews {
    &__container {
      justify-content: flex-start;
      flex-direction: column;
    }
    &__left {
      width: 100%;
      margin-bottom: 48px;
    }
    &__right {
      width: 100%;
    }
    .heading {
      max-width: 100%;
    }
    &__slider {
      padding-bottom: 60px;
      .swiper-pagination {
        display: block;
      }
    }
    &__item {
      &-quote {
        font-size: 24px;
        text-align: center;
      }
      &-person {
        margin-top: 32px;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        >img {
          margin-right: 0;
          margin-bottom: 16px;
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
}

@media screen and (max-width: 576px) {
  .home-reviews {
    &__left {
      margin-bottom: 36px;
    }
    &__slider {
      padding-bottom: 48px;
    }
    &__item {
      &-quote {
        font-size: 20px;
      }
      &-person {
        margin-top: 24px;
        >img {
          margin-bottom: 12px;
        }
        &-name {
          font-size: 16px;
        }
      }
    }
  }
}
</style>