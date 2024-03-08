<script>

</script>

<template>
  <section class="portfolio-lets">
    <div class="container">
      <h2 class="title-h2">Let's build something great together</h2>
      <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
      <RouterLink to="/contact-us" class="button-primary">Contact Us</RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-lets {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .title-h2 {
      max-width: 730px;
    }
    p {
      max-width: 560px;
    }
    .button-primary {
      margin-top: 40px;
      width: 230px;
    }
  }
}

@media screen and (max-width: 576px) {
  .portfolio-lets {
    .container {
      .button-primary {
        margin-top: 24px;
        width: 100%;
      }
    }
  }
}
</style>