<script setup lang="ts">
  import { ref } from "vue";

  const props = defineProps<{
    videoLink?: string;
    imageLink?: string;
    videoDirection?: string;
    imgVideoCSSClass?: string;
  }>();
</script>

<template>
  <div :class="props.imgVideoCSSClass">
    <img
      :src="props.imageLink"
      alt="Concept Art"
      class="concept-img" />
    <video
      :src="props.videoLink"
      :class="props.videoDirection"
      autoplay
      loop
      muted
      playsinline
      preload="auto"></video>
  </div>
</template>

<style scoped>
  .concept-vid-img {
    position: relative;
    width: 600px;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .concept-img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    object-fit: cover;
    z-index: 2;
    border-radius: 18px;
  }
  .concept-vid-right {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    object-fit: cover;
    z-index: 1;
    border-radius: 18px;
    filter: brightness(0.7);
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }

  .concept-vid-left {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    height: 100%;
    object-fit: cover;
    z-index: 1;
    border-radius: 18px;
    filter: brightness(0.7);
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }

  @media (max-width: 860px) {
    .concept-vid-img {
      width: 420px;
      height: 460px;
    }

     .concept-vid-img-left{
      left: 20%;
    }

    .concept-vid-img-right{
      right: 20%;
    }

    .concept-vid-left .concept-vid-right {
      width: 62%;
    }
  }

  @media (max-width: 500px) {
    .concept-vid-img {
      width: 260px;
      height: 300px;
    }

    .concept-img {
      border-radius: 14px;
      object-fit: cover;
    }

    .concept-vid-left .concept-vid-right {
      width: 76%;
      border-radius: 14px;
    }
  }
</style>
