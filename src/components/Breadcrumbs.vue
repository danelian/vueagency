<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<template>
  <nav class="container">
    <ul class="breadcrumbs">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <!-- Если у breadcrumb есть to, делаем его ссылкой -->
        <router-link v-if="breadcrumb.to" :to="breadcrumb.to">{{ breadcrumb.text }}</router-link>
        <span class="breadcrumbs-page" v-else>{{ breadcrumb.text }}</span>
        <span class="breadcrumbs-separator" v-if="index < breadcrumbs.length - 1"> > </span>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  list-style: none;
  padding: 20px 0 20px 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 500;
  li {
    margin-right: 12px;
  }
  a {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: rgba(40,41,56,.7);
    transition: color .3s ease;
    &:hover {
      color: var(--royal-blue-color);
    }
  }
  &-separator {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(40,41,56,.7);
  }
  &-page {
    font-size: 16px;
    font-weight: 500;
    color: var(--royal-blue-color);
  }
}
</style>