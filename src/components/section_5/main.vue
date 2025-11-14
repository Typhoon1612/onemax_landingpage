<script lang="ts" setup>
  import FlipCard from "./components/flipCard.vue";
  import LongCard from "./components/longCard.vue";
  import { section5 as section5img } from "../../helper_files/images";
</script>

<template>
  <div>
    <h1>
      <span class="glow-text">A </span>
      <span class="crypto-gradient">next-gen platform </span>
      <span class="glow-text">trusted by our users</span>
    </h1>
  </div>
  <div class="card-container">
    <FlipCard
      title=" Advanced Market Tracking"
      :front-image="section5img.s5_icon_fte"
      back-content="Access 50+ digital assets with high-performance trading tools crafted for all levels of investors." />
    <FlipCard
      title="24/7 Customer Support"
      :front-image="section5img.s5_icon_cs"
      back-content="Get professional support anytime and anywhere. Our team is available 24/7 to assist you around the clock." />
    <FlipCard
      title="Security and Compliance"
      :front-image="section5img.s5_icon_security"
      back-content="Experience top-tier risk control, multi-region compliance, and comprehensive protection for your digital assets." />
    <FlipCard
      title="Global Reach"
      :front-image="section5img.s5_icon_global"
      back-content="Trusted by users across the APAC region, empowering seamless crypto trading anytime and anywhere." />

    <LongCard />
  </div>
  <!-- <div class="long-card-container"><LongCard  /></div> -->
</template>

<style scoped>
  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 900;
    color: #fff;
    text-align: center;
    padding: 100px 0;
    font-size: clamp(3rem, 3vw, 3rem);
    letter-spacing: 0.05em;
  }

  h1 .crypto-gradient {
    background: linear-gradient(135deg, #7b61ff 0%, #ff61e6 50%, #61d4ff 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-shift 3s ease infinite;
  }

  h1 .glow-text {
    color: #fff;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
      0 0 40px rgba(123, 97, 255, 0.6);
    animation: glow-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes glow-pulse {
    0% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
        0 0 20px rgba(123, 97, 255, 0.4);
    }
    100% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 1),
        0 0 15px rgba(123, 97, 255, 0.8), 0 0 20px rgba(123, 97, 255, 0.6);
    }
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 340px);
    gap: 40px;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .card-container > :last-child {
    grid-column: 1/-1;
  }

  .long-card-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0 50px 100px;
  }

  @media (max-width: 1519px) {
    .card-container {
      grid-template-columns: repeat(2, 340px);
      max-width: 340px;
    }

    .card-container > :last-child {
      grid-column: 1/-1;
    }
  }

  @media (max-width: 739px) {
    h1 {
      padding: 100px 20px;
      font-size: clamp(2.2rem, 4vw, 2.5rem);
    }

    .card-container {
      grid-template-columns: 1fr;
      max-width: 340px;
    }

    .card-container > :last-child {
      grid-column: 1/-1;
    }
  }

  @media (max-width: 400px) {
    h1 {
      padding: 80px 15px;
      font-size: clamp(1.5rem, 5vw, 2rem);
    }
  }
</style>
