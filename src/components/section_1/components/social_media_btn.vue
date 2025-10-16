<template>
  <a
    :href="href"
    :class="['social', `social-${type}`]"
    :aria-label="ariaLabel"
    target="_blank"
    rel="noopener noreferrer">
    <img
      :src="iconSrc"
      :alt="ariaLabel" />
  </a>
</template>

<script lang="ts" setup>
  import { defineProps } from "vue";

  defineProps<{
    href: string;
    type: "x" | "telegram" | "instagram";
    iconSrc: string;
    ariaLabel: string;
  }>();
</script>

<style scoped>
  .social {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid #7b61ff;
    transition: background 0.2s, border 0.2s;
    cursor: pointer;
    position: relative;
    text-decoration: none;
  }

  .social img {
    width: 32px;
    height: 32px;
    transition: filter 0.2s, background 0.2s;
    filter: invert(0) brightness(1);
  }

  /* Social icon hover: swap color/transparent */
  .social:hover {
    background: #7b61ff;
    border: 2px solid #7b61ff;
  }

  .social:hover img {
    filter: invert(1) brightness(2) grayscale(1);
  }

  /* Desktop and up */
  @media (min-width: 1024px) {
    .social {
      width: 70px;
      height: 70px;
    }
    .social img {
      width: 36px;
      height: 36px;
    }
  }

  /* Large desktop */
  @media (min-width: 1440px) {
    .social {
      width: 75px;
      height: 75px;
    }
    .social img {
      width: 38px;
      height: 38px;
    }
  }

  /* Mobile specific adjustments */
  @media (max-width: 480px) {
    .social {
      width: 55px;
      height: 55px;
    }
    .social img {
      width: 24px;
      height: 24px;
    }
  }
</style>
