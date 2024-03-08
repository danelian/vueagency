<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core';
import { minLength, email, helpers, numeric, maxLength } from '@vuelidate/validators'

import Input from '@/components/Input.vue'

const nameField = ref('')
const emailField = ref('')
const phoneField = ref('');

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
  }
}))

const v = useVuelidate(rules, {nameField, emailField, phoneField})

const isFormPending = computed(() => v.$pending);

const submitForm = () => {
  if (v.$pending) {
    // Если есть поля в ожидании валидации, ничего не делаем
    return;
  }
  alert('Thank you! Form submutted.');
}
</script>

<script>
export default {
  props: {
    visible: Boolean,
    selectedTariff: Object,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal">
      <div class="modal-heading">
        <h2 class="title-h3">Order - {{ selectedTariff.title }}</h2>
        <p>{{ selectedTariff.price }} {{ selectedTariff.per }}</p>
      </div>
      <form @submit.prevent="submitForm">
        <Input 
          name="name" 
          placeholder="Your Name" 
          v-model:value="v.nameField.$model"
          :error="v.nameField.$errors"
        />
        <Input 
          name="email"
          placeholder="Email" 
          v-model:value="v.emailField.$model"
          :error="v.emailField.$errors"
        />
        <Input
          name="tel" 
          placeholder="Phone number" 
          v-model:value="v.phoneField.$model"
          :error="v.phoneField.$errors"
        />
        <button class="button-primary" :disabled="isFormPending">Submit</button>
      </form>
      <button class="modal-close" @click="closeModal">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L10 8.58579L15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711L11.4142 10L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L10 11.4142L4.70711 16.7071C4.31658 17.0976 3.68342 17.0976 3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929L8.58579 10L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: relative;
  width: 500px;
  max-width: calc(100% - 40px);
  padding: 56px 24px 40px 24px;
  border-radius: 12px;
  text-align: center;
  background-color: var(--grey-color);
  &-close {
    position: absolute;
    top: 20px;
    right: 20px;
    color: var(--font-color);
    padding: 0;margin: 0;
    border: 0;outline: none;
    background: none;
    transition: color .3s ease;
    &:hover {
      color: var(--dark-blue-color);
    }
  }
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-heading {
    text-align: center;
    margin-bottom: 40px;
  }
  .button-primary {
    width: 100%;
    margin-top: 24px;
  }
}

@media screen and (max-width: 576px) {
  .modal {
    padding: 44px 20px 28px 20px;
    &-close {
      top: 16px;
      right: 16px;
    }
    .button-primary {
      margin-top: 20px;
    }
  }
}
</style>