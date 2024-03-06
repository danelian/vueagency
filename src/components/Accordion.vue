<template>
  <div class="accordions">
    <div v-for="(item, index) in accordionItems" :key="index" class="accordion" :class="{ 'accordion-open': item.open }">
      <div @click="toggleAccordion(index)" class="accordion-header">
        <span>{{ `${counter + index + 1 < 10 ? '0' : ''}${counter + index + 1}` }}</span>
        <h3>{{ item.title }}</h3>
        <div class="accordion-button"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z" fill="currentColor"/></svg></div>
      </div>
      <div v-show="item.open" class="accordion-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'Accordion',
  props: {
    accordionItems: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const counter = ref(0);
    
    const toggleAccordion = (index) => {
      props.accordionItems.forEach((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
      });
    };

    // Следим за изменениями в массиве аккордеонов и обновляем состояние
    watch(() => props.accordionItems, () => {
      props.accordionItems.forEach((item) => {
        if (item.open === undefined) {
          item.open = false;
        }
      });
    });

    return {
      counter,
      toggleAccordion,
    };
  },
};
</script>

<style lang="scss">
.accordion {
  padding-bottom: 28px;
  &s {
    display: flex;
    flex-direction: column;
    width: 100%;
    .accordion {
      &:not(:last-child) {
        margin-bottom: 28px;
        border-bottom: 2px solid #ECECF1;
      }
    }
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    span {
      display: block;
      margin-right: 32px;
      width: 72px;
      font-size: 24px;
      font-weight: 500;
      line-height: 1.3;
      text-align: center;
      color: var(--royal-blue-color);
    }
    h3 {
      width: calc(100% - 72px - 32px - 32px);
      margin-top: 0;
      margin-bottom: 0;
      font-size: 24px;
      font-weight: 500;
      line-height: 1.3;
      color: var(--dark-blue-color);
      transition: color .3s ease;
    }
  }
  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 12px;
    width: 20px;
    height: 20px;
    color: var(--dark-blue-color);
    transition: color .3s ease;
    svg {
      transition: transform .3s ease;
    }
  }
  &-content {
    border-top: none;
    padding: 0 40px 0 104px;
  }
  &:hover {
    .accordion-header h3,
    .accordion-button {
      color: var(--royal-blue-color);
    }
  }
  &-open {
    .accordion-header h3,
    .accordion-button {
      color: var(--royal-blue-color);
    }
    .accordion-button {
      svg {
        transform: rotate(-45deg);
      }
    }
    .accordion-content {
      margin-top: 16px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .accordion {
    padding-bottom: 20px;
    &s {
      .accordion {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
    &-header {
      span {
        margin-right: 12px;
        width: 40px;
        font-size: 20px;
      }
      h3 {
        width: calc(100% - 52px - 32px);
        font-size: 20px;
      }
    }
    &-content {
      padding-right: 32px;
      padding-left: 52px;
    }
    &-open {
      .accordion-content {
        margin-top: 12px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .accordion {
    &-header {
      span {
        margin-right: 8px;
        width: 32px;
        font-size: 18px;
        text-align: left;
      }
      h3 {
        width: calc(100% - 40px - 28px);
        font-size: 18px;
      }
    }
    &-content {
      padding-right: 0;
      padding-left: 40px;
    }
    &-button {
      margin-left: 8px;
    }
  }
}
</style>