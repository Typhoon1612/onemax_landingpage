<script setup lang="ts">
  import Section1 from "./components/section_1/main.vue";
  // import Section2 from "./components/section_2/main.vue";
  import Section3 from "./components/section_3/main.vue";
  import Section7 from "./components/section_7/main.vue";
  import Footer from "./components/general/footer.vue";
</script>

<template>
  <div id="app">
    <Section1 />
    <!-- <Section2 /> -->
    <Section3 />
    <Section7 />
    <Footer />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      sans-serif;
    line-height: 1.6;
    color: #333;
    background: #000; /* ensure page background is black to match sections */
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  #app {
    min-height: 100vh;
    overflow-x: hidden; /* Prevent horizontal scrolling */
    width: 100%;
  }
</style>
