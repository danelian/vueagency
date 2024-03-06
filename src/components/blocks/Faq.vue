<script>
import Accordion from '../Accordion.vue';

export default {
  components: {
    Accordion,
  },
  data() {
    return {
      accordionItems: [
        { title: 'How much time does it take?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'What is your class naming convention?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'How do you communicate?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'I have a bigger project. Can you handle it?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'What is your class naming convention?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      ],
    };
  },
};
</script>

<template>
  <section class="faq">
    <div class="container">
      <div class="faq__container">
        <div class="faq__left">
          <div class="heading">
            <h2 class="title-h3">Frequently <br> asked questions</h2>
            <RouterLink to="/contact-us" class="link">Contact us for more info</RouterLink>
          </div>
        </div>
        <div class="faq__right">
          <Accordion :accordionItems="accordionItems" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.faq {
  &__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
  &__left {
    width: calc(33% - 16px);
    .heading {
      .link {
        font-size: 18px;
        text-decoration: none;
        color: var(--royal-blue-color);
        opacity: .85;
        &:hover {
          text-decoration: underline;
          opacity: 1;
        }
      }
    }
  }
  &__right {
    width: calc(67% - 16px);
  }
}

@media screen and (max-width: 1024px) {
  .faq {
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
  }
}

@media screen and (max-width: 576px) {
  .faq {
    &__left {
      margin-bottom: 36px;
      .heading {
        .link {
          font-size: 16px;
        }
      }
    }
  }
}
</style>