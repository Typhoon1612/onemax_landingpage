<script lang="ts" setup>
  interface Props {
    frontTitle: string;
    frontImage: string;
    backTitle: string;
    backContent: string;
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p class="title">{{ props.frontTitle }}</p>
        <img
          :src="props.frontImage"
          alt="Flip Card Image" />
      </div>
      <div class="flip-card-back">
        <p class="title">BACK</p>
        <p>Leave Me</p>
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
    /* radial-gradient(
      circle at top left,
      #222222 0%,
      rgba(255, 255, 255, 0.3) 60%,
      #7b61ff 100%
    ); */
  }

  .flip-card-front img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  .flip-card-back {
    background: rgba(255, 255, 255, 0.147);
    /* background: radial-gradient(
      circle at top left,
      #888888 0%,
      #444444 50%,
      #222222 100%
    ); */
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

  .flip-card-back p:not(.title) {
    padding-top: 2.5rem;
  }
</style>
