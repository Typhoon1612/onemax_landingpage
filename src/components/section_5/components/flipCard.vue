<script lang="ts" setup>
  interface Props {
    title: string;
    frontImage: string;
    backContent: string;
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h1 class="title">{{ props.title }}</h1>
        <img
          :src="props.frontImage"
          alt="Flip Card Image" />
      </div>
      <div class="flip-card-back">
        <p class="title">{{ props.title }}</p>
        <p class="back-contents">{{ props.backContent }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .flip-card {
    background-color: transparent;
    width: 340px;
    height: 370px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    position: absolute;
    left: 10%;
    top: 10%;
    right: 10%;
    font-size: 1.5em;
    font-weight: 700;
    text-align: start;
    margin: 0;
    color: #ffffff;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: start;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid #000000;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: rgba(255, 255, 255, 0.147);
  }

  .flip-card-front img {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 250px;
    height: 250px;
    object-fit: contain;
  }

  .flip-card-back {
    background: rgba(255, 255, 255, 0.147);
    color: white;
    transform: rotateY(180deg);
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10%;
  }

  .flip-card-back p {
    margin: 0;
    text-align: start;
  }

  .back-contents {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    padding-top: 35%;
  }

  @media (max-width: 400px) {
    .flip-card {
      width: 280px;
      height: 320px;
    }

    .title {
      font-size: 1.2em;
      left: 8%;
      right: 8%;
    }

    .flip-card-front img {
      width: 180px;
      height: 180px;
      bottom: 5px;
      right: 5px;
    }

    .back-contents {
      font-size: 0.9em;
      padding-top: 30%;
    }
  }

  /* @media (max-width: 739px) {
    .flip-card {
      width:70%;
      max-width: 340px;
    }
  } */
</style>
