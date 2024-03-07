<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    teamMembers: Array,
  },
  setup(props) {
    const loadImages = async () => {
      for (const member of props.teamMembers) {
        const module = await import(`/public/team/${member.photo}`);
        member.photoSrc = module.default;
      }
    };

    onMounted(() => {
      loadImages();
    });

    return {
      teamMembers: ref(props.teamMembers),
    };
  },
};
</script>

<template>
  <section class="team">
    <div class="container">
      <div class="heading">
        <h2 class="title-h2">Meet our team</h2>
      </div>
      <div class="team__cards">
        <div class="team-item" v-for="member in teamMembers" :key="member.id">
          <img :src="member.photoSrc" :alt="member.name" />
          <h3 class="title-h6">{{ member.name }}</h3>
          <p>{{ member.position }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.team {
  background-color: var(--grey-color);
  .heading {
    text-align: center;
    margin-bottom: 48px;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    width: 100%;
  }
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 24px 32px 24px;
    width: 100%;
    background-color: var(--white-color);
    img {
      width: 60%;
      border-radius: 50%;
      flex-shrink: 0;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      margin-bottom: 28px;
    }
    .title-h6 {
      font-weight: 500;
    }
    p {
      line-height: 1.2;
      color: rgba(29,33,48,.7);
    }
  }
}

@media screen and (max-width: 1024px) {
  .team {
    .heading {
      margin-bottom: 40px;
    }
    &__cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
  }
}

@media screen and (max-width: 576px) {
  .team {
    .heading {
      margin-bottom: 32px;
    }
    &__cards {
      gap: 12px;
    }
    &-item {
      padding: 20px 12px;
      img {
        margin-bottom: 16px;
      }
      .title-h6 {
        font-size: 16px;
        &:not(:last-child) {
          margin-bottom: 4px;
        }
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>