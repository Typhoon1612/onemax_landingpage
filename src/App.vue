<script setup lang="ts">
  import { ref, provide } from "vue";
  import LoadingPage from "./components/loading_page/main.vue";
  import Section1 from "./components/section_1/main.vue";
  // import Sections23Wrapper from "./components/general/sections_2_3_wrapper.vue";
  import Section2 from "./components/section_2/main.vue";
  import Section3 from "./components/section_3/main.vue";
  import Section4 from "./components/section_4/main.vue";
  import Section5 from "./components/section_5/main.vue";
  import Section6 from "./components/section_6/main.vue";
  import Footer from "./components/general/footer.vue";

  // Global loading state
  const isAppReady = ref(false);

  // Provide to all child components
  provide("isAppReady", isAppReady);

  // Called when loading completes
  function handleLoadingComplete() {
    isAppReady.value = true;
  }
</script>

<template>
  <div id="app">
    <LoadingPage @loading-complete="handleLoadingComplete" />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
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
