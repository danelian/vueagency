<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    // burger menu
    const isMenuOpen = ref(false);
    const isDesktop = ref(true);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const checkViewport = () => {
      isDesktop.value = window.innerWidth > 576;
    };

    onMounted(() => {
      checkViewport();
      window.addEventListener('resize', checkViewport);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkViewport);
    });

    // fixed header
    const header = ref(null);

    const handleScroll = () => {
      if (window.pageYOffset > 900) {
        header.value.classList.add('header-fixed');
      } else {
        header.value.classList.remove('header-fixed');
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    return {
      handleScroll,
      header,
      isMenuOpen,
      isDesktop,
      toggleMenu,
    };
  },
};
</script>

<template>
  <header class="header" ref="header" v-scroll="handleScroll">
    <div class="container">
      <div class="header__container">
        <RouterLink to="/">
          <div class="logo">
            <img src="../assets/logo.svg" alt="">VueAgency
          </div>
        </RouterLink>
        <transition name="fade">
          <nav v-if="isMenuOpen || isDesktop" class="header__nav">
            <div class="header__menu">
              <RouterLink @click="toggleMenu" to="/">Home</RouterLink>
              <RouterLink @click="toggleMenu" to="/about-us">About us</RouterLink>
              <RouterLink @click="toggleMenu" to="/features">Features</RouterLink>
              <RouterLink @click="toggleMenu" to="/pricing">Pricing</RouterLink>
              <RouterLink @click="toggleMenu" to="/portfolio">Portfolio</RouterLink>
              <RouterLink @click="toggleMenu" to="/blog">Blog</RouterLink>
              <RouterLink @click="toggleMenu" to="/contact-us">Contact us</RouterLink>
            </div>
          </nav>
        </transition>
        <button @click="toggleMenu" class="header__nav-toggle">
          <svg v-if="!isMenuOpen" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5C2 4.44772 2.44772 4 3 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H3C2.44772 6 2 5.55228 2 5ZM2 10C2 9.44772 2.44772 9 3 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H3C2.44772 11 2 10.5523 2 10ZM2 15C2 14.4477 2.44772 14 3 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H3C2.44772 16 2 15.5523 2 15Z" fill="currentColor"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L10 8.58579L15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711L11.4142 10L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L10 11.4142L4.70711 16.7071C4.31658 17.0976 3.68342 17.0976 3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929L8.58579 10L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  width: 100%;
  padding: 28px 0;
  background-color: var(--tint-blue-color);
  transition: position 10s ease-in;
  &.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 150;
  }
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
  &__menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
      display: inline-flex;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.4;
      text-decoration: none;
      color: #bbbbcb;
      transition: color .3s ease;
      &:not(:first-child) {
        margin-left: 32px;
      }
      &:hover {
        text-decoration: none;
        color: var(--white-color);
      }
      &.router-link-active {
        color: var(--white-color);
      }
    }
  }
  &__nav {
    &-toggle {
      display: none;
    }
  }
}

@media screen and (max-width: 1024px) {
  .header {
    padding: 20px 0;
    &__container {
      justify-content: center;
      flex-direction: column;
    }
    .logo {
      font-size: 18px;
      margin-bottom: 20px;
      img {
        height: 32px;
      }
    }
    &__menu {
      justify-content: center;
      flex-wrap: wrap;
      a {
        padding: 6px 16px;
        &:not(:first-child) {
          margin-left: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .header {
    padding: 14px 0;
    &__container {
      justify-content: space-between;
      flex-direction: row;
    }
    .logo {
      font-size: 16px;
      margin-bottom: 0;
      margin-right: 12px;
      img {
        height: 28px;
      }
    }
    &__nav {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      width: 100%;
      height: auto;
      max-height: calc(100vh - 60px);
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 44px 20px;
      background-color: var(--grey-color);
      &-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        margin: 0;
        color: var(--white-color);
        border: 1px solid rgba(255,255,255,.1);
        outline: none;
        background: none;
        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
    &__menu {
      flex-direction: column;
      a {
        padding: 0;
        font-size: 18px;
        color: var(--font-color);
        &:not(:first-child) {
          margin-top: 36px;
        }
        &:hover,
        &.router-link-active {
          color: var(--dark-blue-color);
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>