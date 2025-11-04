<template>
  <div class="grid-plane"></div>
</template>

<style scoped>
.grid-plane {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background-image: linear-gradient(#7b61ff 1px, transparent 1px),
    linear-gradient(90deg, #7b61ff 1px, transparent 1px);
  background-size: 40px 40px;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: center;
  animation: grid-move 20s linear infinite;
  opacity: 0.3;
}

@keyframes grid-move {
  0% {
    transform: perspective(500px) rotateX(60deg) translateY(0);
  }
  100% {
    transform: perspective(500px) rotateX(60deg) translateY(40px);
  }
}
</style>
