<script setup lang="ts">
  import { section5 } from "../../../helper_files/images";
</script>

<template>
  <div class="long-card-container">
    <div class="stat-box left-stat">
      <h1>50+</h1>
      <p>Niche Tokens</p>
    </div>

    <div class="stat-box right-stat">
      <img
        :src="section5.s5_icon_tokens"
        alt="Flip Card Image"
        class="long-card-img" />
    </div>
  </div>
</template>

<style scoped>
  .long-card-container {
    width: 100%;
    max-height: 2000px;
    background-color: #222;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 2rem 0 0 7rem;
    gap: 21rem;
  }

  .long-card-img {
    width: 650px;
    height: auto;
    object-fit: cover;
  }

  .stat-box h1 {
    color: #7b61ff;
    font-size: clamp(4.5rem, 6vw, 6rem);
    font-weight: 900;
    margin: 0;
    line-height: 1;
  }

  .stat-box p {
    color: #ccc;
    font-size: clamp(2rem, 2.2vw, 2.5rem);
    margin: 0.5rem 0 0 0;
    text-align: center;
  }

  @media (max-width: 1500px) {
    .long-card-container {
      position: relative;
      flex-direction: column;
      padding: 2rem;
      gap: 0;
      align-items: flex-start;
      min-height: 400px;
    }

    .stat-box.left-stat {
      position: absolute;
      top: 2rem;
      left: 2rem;
      max-width: 250px;
    }

    .stat-box.right-stat {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      bottom: 0;
      right: 0;
    }

    .long-card-img {
      width: 550px;
      max-width: 70%;
    }
  }

  @media (max-width: 739px) {
    .long-card-container {
      min-height: 350px;
    }

    .stat-box.left-stat {
      top: 1.5rem;
      left: 1.5rem;
    }

    .long-card-img {
      width: 300px;
      max-width: 70%;
    }
  }
</style>
