<script setup lang="ts">
  const props = defineProps<{
    videoLink?: string;
    imageLink?: string;
  }>();
</script>

<template>
  <div class="concept-vid-img">
    <img
      :src="props.imageLink"
      alt="Concept Art"
      class="concept-img" />
    <video
      :src="props.videoLink"
      class="concept-video"
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
    width: 340px;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .concept-img {
    position: absolute;
    top: 0;
    left: 8rem;
    width: 50%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    border-radius: 18px;
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.45);
  }
  .concept-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
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
</style>
