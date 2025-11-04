<script lang="ts" setup>
  import CenterMachine from "./components/center_machine.vue";
  import HackingRain from "../general/hackingRain.vue";
</script>

<template>
  <section class="section4-hero">
    <HackingRain class="background-rain" />
    <!-- Content for Section 4 goes here -->
    <CenterMachine />
  </section>
</template>

<style scoped>
  .section4-hero {
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .background-rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.3;
  }
</style>
