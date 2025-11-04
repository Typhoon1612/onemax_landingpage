<script setup lang="ts">
  import Section2 from "../section_2/main.vue";
  import Section3 from "../section_3/main.vue";
  import HackingRain from "./hackingRain.vue";
</script>

<template>
  <div class="sections-wrapper">
    <HackingRain class="shared-background-rain" />
    <Section2 />
    <Section3 />
  </div>
</template>

<style scoped>
  .sections-wrapper {
    position: relative;
    width: 100%;
    background: #000;
    overflow: hidden;
    isolation: isolate;
  }

  .shared-background-rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 1;
    pointer-events: none;
  }
</style>
