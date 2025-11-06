<script lang="ts" setup>
  import { section1 as section1Vid } from "../../helper_files/videos";
  import { section1 as section1Img } from "../../helper_files/images";
  import SciFiBtn from "./components/sci_fi_btn.vue";
</script>

<template>
  <section class="section1-hero">
    <!-- Background Video -->
    <video
      class="bg-video"
      :src="section1Vid.s1_bg_vid"
      autoplay
      loop
      muted
      playsinline></video>

    White panel overlay
    <div class="white-panel"></div>

    <!-- Navbar -->
    <nav class="navbar">
      <img
        :src="section1Img.s1_1max_logo"
        alt="1MAX Logo"
        class="navbar-logo" />
    </nav>

    <!-- Contents -->
    <div class="section1-content">
      <div class="section1-heroText">
        <h1 class="headline-text">
          <span style="color: #7b61ff">Smarter</span> Tools.
          <span style="color: #7b61ff">Faster</span> Decisions
        </h1>
        <p class="subheadline-text">
          Access <span style="color: #7b61ff">advanced market tools</span>,
          intelligent analytics, and
          <span style="color: #7b61ff">effortless setup</span>.
        </p>
        <SciFiBtn />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .section1-hero {
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  /* Background Video */
  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  /* White overlay panel */
  .white-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.671);
    z-index: 1;
  }

  /* Navbar */
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    box-shadow: 0 4px 6px rgb(0, 0, 0);
    z-index: 100;
  }

  .navbar-logo {
    height: auto;
    width: 13rem;
  }

  /* Contents */
  .section1-content {
    position: relative;
    z-index: 2;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #fff;
    text-align: center;
    /* padding-top: 80px; Space for fixed navbar */
  }

  .section1-heroText {
    padding: 0;
    width: 100%;
    text-align: center;
  }

  .headline-text {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 900;
    line-height: 1.2;
    color: #ffffff;
    font-family: "Inter", sans-serif;
  }

  .subheadline-text {
    font-size: clamp(2rem, 5vw, 1.5rem);
    font-weight: 600;
    line-height: 1.5;
    padding: 1rem 0 0 0;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    width: 100%;
  }
</style>
