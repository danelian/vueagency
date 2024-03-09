<script setup>
const emit = defineEmits(['update:value']);

const props = defineProps({
  error: {
    type: Array,
    required: false,
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const updateValue = (e) => {
  emit('update:value', e.target.value);
};
</script>

<template>
  <div class="form-input">
    <label :for="name" class="input-label">{{ label }}</label>
    <textarea
      class="input-textarea"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    ></textarea>
    <TransitionGroup>
      <div
        class="form-error"
        v-for="element of error"
        :key="element.$uid"
      >
        <div class="form-error__message">{{ element.$message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &-input {
    margin-bottom: 16px;
    position: relative;
    &.dark {
      color: var(--white-color);
      .input-text {
        color: var(--white-color);
        border: 1px solid rgba(255,255,255,5%);
        &::placeholder {
          color: rgba(244,246,252,.10);
        }
      }
    }
  }
  &-error {
    margin-top: 4px;
    font-size: 12px;
    color: var(--dark-blue-color);
    padding: 4px 8px;
    border-radius: 8px;
    background: var(--yellow-color);
  }
}
.input {
  &-textarea {
    position: relative;
    padding: 18px 24px;
    width: 100%;
    height: 120px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,10%);
    background-color: transparent;
    z-index: 1;
    &::placeholder {
      color: var(--dark-blue-color);
    }
  }
  &-label {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 500;
    color: var(--dark-blue-color);
    transition: .3s;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and (max-width: 576px) {
  .input {
    &-textarea {
      padding: 14px 20px;
      font-size: 15px;
    }
    &-label {
      font-size: 14px;
    }
  }
}
</style>