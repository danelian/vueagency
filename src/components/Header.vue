<script>

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <div class="logo">
          <img src="../assets/logo.svg" alt="">VueAgency
        </div>
        <nav class="nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about-us">About us</RouterLink>
          <RouterLink to="/features">Features</RouterLink>
          <RouterLink to="/pricing">Pricing</RouterLink>
          <RouterLink to="/faq">FAQ</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
          <RouterLink to="/contact-us">Contact us</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 28px 0;
  background-color: var(--tint-blue-color);
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .logo {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
    font-weight: 700;
    color: var(--white-color);
    img {
      height: 36px;
      margin-right: 12px;
    }
  }
}
</style>