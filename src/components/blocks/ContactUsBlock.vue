<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core';
import { minLength, email, helpers, numeric, maxLength } from '@vuelidate/validators'

import Input from '@/components/Input.vue'
import TextArea from '@/components/TextArea.vue';

const nameField = ref('')
const emailField = ref('')
const phoneField = ref('')
const messageField = ref('')

const rules = computed(() => ({
  nameField: {
    minLength: minLength(3)
  },
  emailField: {
    email: email,
    required: true
  },
  phoneField: {
    type: numeric,
    required: true,
    maxLength: maxLength(10)
  },
  messageField: {
    maxLength: maxLength(1000)
  }
}))

const v = useVuelidate(rules, {nameField, emailField, phoneField, messageField})
</script>

<template>
  <section class="contact-us">
    <div class="container">
      <div class="heading">
        <h2 class="title-h2">Contact Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <div class="contact-us__form">
        <form @submit.prevent="submitForm">
          <Input 
            name="name" 
            placeholder="Your Name" 
            label="Name"
            v-model:value="v.nameField.$model"
            :error="v.nameField.$errors"
          />
          <Input 
            name="email"
            placeholder="Email" 
            label="Email"
            v-model:value="v.emailField.$model"
            :error="v.emailField.$errors"
          />
          <Input
            name="tel" 
            placeholder="Phone number" 
            label="Phone number"
            v-model:value="v.phoneField.$model"
            :error="v.phoneField.$errors"
          />
          <TextArea
            name="message" 
            placeholder="Write your  question here" 
            label="Message"
            v-model:value="v.messageField.$model"
            :error="v.messageField.$errors"
          />
          <button class="button-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-us {
  .heading {
    max-width: 560px;
    text-align: center;
    margin: 0 auto 48px;
  }
  &__form {
    max-width: 1060px;
    margin-right: auto;
    margin-left: auto;
    padding: 52px 64px 64px;
    border-radius: 12px;
    background-color: var(--grey-color);
  }
}

@media screen and (max-width: 1024px) {
  .contact-us {
    .heading {
      margin-bottom: 40px;
    }
    &__form {
      max-width: 100%;
      padding: 24px 24px 32px;
    }
  }
}

@media screen and (max-width: 576px) {
  .contact-us {
    .heading {
      margin-bottom: 28px;
    }
    &__form {
      padding: 20px 20px 24px;
    }
  }
}
</style>