<script setup>
const emit = defineEmits(['update:value'])

const props = defineProps({
  error: {
    type: Array,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    requred: true
  }
})

const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<template>
  <div class="form-input">
    <input 
      class="input-text"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      >
    <label :for="name" class="input-label">{{ label }}</label>
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
  &-text {
    position: relative;
    padding: 0 24px;
    width: 100%;
    height: 56px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,10%);
    background-color: transparent;
    z-index: 1;
    &:focus {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
    &::placeholder {
      color: var(--dark-blue-color);
    }
  }
  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: .3s;
    font-size: 13px;
    color: var(--dark-blue-color);
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
    &-text {
      padding: 0 20px;
      height: 44px;
      font-size: 15px;
    }
  }
}
</style>