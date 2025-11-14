<style scoped>
  .ai-matrix-loader {
    width: 200px;
    height: 260px;
    margin: 30px auto;
    position: relative;
    perspective: 800px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }

  .digit {
    color: #7b61ff;
    font-family: monospace;
    font-size: 25px;
    font-family: 'Orbitron', sans-serif;
    text-align: center;
    text-shadow: 0 0 5px #ff61e6;
    animation:
      matrix-fall 2s infinite,
      matrix-flicker 0.5s infinite;
    opacity: 0;
  }

  .digit:nth-child(1) {
    animation-delay: 0.1s;
  }
  .digit:nth-child(2) {
    animation-delay: 0.3s;
  }
  .digit:nth-child(3) {
    animation-delay: 0.5s;
  }
  .digit:nth-child(4) {
    animation-delay: 0.7s;
  }
  .digit:nth-child(5) {
    animation-delay: 0.9s;
  }
  .digit:nth-child(6) {
    animation-delay: 1.1s;
  }
  .digit:nth-child(7) {
    animation-delay: 1.3s;
  }
  .digit:nth-child(8) {
    animation-delay: 1.5s;
  }
  .digit:nth-child(9) {
    animation-delay: 1.7s;
  }

  .glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle,
      #ff61e728 0%,
      transparent 70%
    );
    animation: matrix-pulse 2s infinite;
  }

  @keyframes matrix-fall {
    0% {
      transform: translateY(-50px) rotateX(90deg);
      opacity: 0;
    }
    20%,
    80% {
      transform: translateY(0) rotateX(0deg);
      opacity: 0.8;
    }
    100% {
      transform: translateY(50px) rotateX(-90deg);
      opacity: 0;
    }
  }

  @keyframes matrix-flicker {
    0%,
    19%,
    21%,
    100% {
      opacity: 0.8;
    }
    20% {
      opacity: 0.2;
    }
  }

  @keyframes matrix-pulse {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.7;
    }
  }
</style>

<template>
  <div class="ai-matrix-loader">
    <div class="digit">0</div>
    <div class="digit">1</div>
    <div class="digit">0</div>
    <div class="digit">1</div>
    <div class="digit">1</div>
    <div class="digit">0</div>
    <div class="digit">0</div>
    <div class="digit">1</div>
    <div class="digit">1</div>
    <div class="glow"></div>
  </div>
</template>
