<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core';
import { minLength, email, helpers } from '@vuelidate/validators'

import Input from '@/components/Input.vue'

const mustBeFigma = (value) => value.includes('https://www.figma.com')

const nameField = ref('')
const emailField = ref('')
const figmaField = ref('');

const rules = computed(() => ({
  nameField: {
    minLength: minLength(3)
  },
  emailField: {
    email: email,
    required: true
  },
  figmaField: {
    mustBeFigma: helpers.withMessage('Link must start with https://www.figma.com', mustBeFigma),
    required: true
  }
}))

const v = useVuelidate(rules, {nameField, emailField, figmaField})
</script>

<template>
  <section class="home-cta">
    <div class="container">
      <div class="home-cta__container">
        <div class="home-cta__content">
          <div class="home-cta__content-wrapper">
            <h2 class="title-h2">Building stellar websites for early startups</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
        </div>
        <div class="home-cta__form">
          <h3 class="title-h5">Send inquiry</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <form action="#">
            <Input 
              name="name" 
              placeholder="Your Name" 
              v-model:value="v.nameField.$model"
              :error="v.nameField.$errors"
              class="dark"
            />
            <Input 
              name="email"
              placeholder="Email" 
              v-model:value="v.emailField.$model"
              :error="v.emailField.$errors"
              class="dark"
            />
            <Input
              name="figma" 
              placeholder="Paste your Figma design URL" 
              v-model:value="v.figmaField.$model"
              :error="v.figmaField.$errors"
              class="dark"
            />
          </form>
          <RouterLink to="/contact-us" class="link-witharrow">Get in touch with us<svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1587 1.21301L24.787 5.84135C25.071 6.12537 25.071 6.58585 24.787 6.86987L20.1587 11.4982C19.8746 11.7822 19.4141 11.7822 19.1301 11.4982C18.8461 11.2142 18.8461 10.7537 19.1301 10.4697L22.5169 7.08288H1V5.62834H22.5169L19.1301 2.24153C18.8461 1.95751 18.8461 1.49703 19.1301 1.21301C19.4141 0.928996 19.8746 0.928996 20.1587 1.21301Z" fill="currentColor"/></svg></RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-cta {
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 100px;
  &__container {
    display: flex;
    width: 100%;
  }
  &__content {
    width: 100%;
    width: 50%;
    background-image: url('../../../public/home-cta__bg.jpg');
    background-size: cover;
    &-wrapper {
      padding: 92px;
      color: var(--white-color);
      background-color: rgba(28,30,83,.5);
      .title-h2 {
        color: var(--white-color);
      }
    }
  }
  &__form {
    width: 50%;
    padding: 92px 92px 48px 92px;
    color: var(--white-color);
    background-color: var(--tint-blue-color);
    .title-h5 {
      color: var(--white-color);
    }
    p {
      font-size: 16px;
      color: var(--grey-color);
    }
    .link-witharrow {
      margin: 28px auto 0 auto;
      color: var(--white-color);
    }
    form {
      margin-top: 40px;
    }
  }
}
</style>