<script lang="ts" setup>
  import FlipCard from "./components/flipCard.vue";
  import LongCard from "./components/longCard.vue";
  import { section5 as section5img } from "../../helper_files/images";
</script>

<template>
  <div>
    <h1>
      A <span style="color: #7b61ff">cryptocurrency exchange</span> trusted by
      our users
    </h1>
  </div>
  <div class="card-container">
    <FlipCard
      title="Fabulous Trading Experience"
      :front-image="section5img.s5_icon_academy"
      back-content="Trade over 50+ cryptocurrencies across spot, futures, and more, designed to meet every investor’s needs." />
    <FlipCard
      title="24/7 Customer Support"
      :front-image="section5img.s5_icon_academy"
      back-content="Get professional support anytime and anywhere. Our team is available 24/7 to assist you around the clock." />
    <FlipCard
      title="Security and Compliance"
      :front-image="section5img.s5_icon_academy"
      back-content="Experience top-tier risk control, multi-region compliance, and comprehensive protection for your digital assets." />
    <FlipCard
      title="Global Reach"
      :front-image="section5img.s5_icon_academy"
      back-content="Trusted by users across the APAC region, empowering seamless crypto trading anytime and anywhere." />

    <LongCard />
  </div>
  <!-- <div class="long-card-container"><LongCard  /></div> -->
</template>

<style scoped>
  h1 {
    color: #fff;
    text-align: center;
    padding: 100px 0;
    font-size: clamp(2rem, 4vw, 4rem);
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
    .card-container {
      grid-template-columns: 1fr;
      max-width: 340px;
    }

    .card-container > :last-child {
      grid-column: 1/-1;
    }
  }
</style>
