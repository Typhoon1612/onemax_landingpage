<script lang="ts" setup>
  import FlipCard from "./components/flipCard.vue";
  import { section5 as section5img } from "../../helper_files/images";
</script>

<template>
  <div>
    <h1>
      A <span style="color: #7b61ff">cryptocurrency exchange</span> trusted by
      our users
    </h1>
  </div>
  <div class="flip-card-container">
    <FlipCard
      title="Fabulous Trading Experience"
      :front-image="section5img.s5_icon_academy"
      back-content="Leave Me" />
      <FlipCard
      title="24/7 Customer Support"
      :front-image="section5img.s5_icon_academy"
      back-content="Leave Me" />
      <FlipCard
      title="Fabulous Trading Experience"
      :front-image="section5img.s5_icon_academy"
      back-content="Leave Me" />
      <FlipCard
      title="Fabulous Trading Experience"
      :front-image="section5img.s5_icon_academy"
      back-content="Leave Me" />
  </div>
</template>

<style scoped>
  h1 {
    color: #fff;
    text-align: center;
    padding: 100px 0;
    font-size: clamp(2rem, 4vw, 4rem);
  }

  .flip-card-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    padding-bottom: 100px;
  }
</style>
