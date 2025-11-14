<template>
  <div
    v-if="!isReady"
    class="loading-screen">
    <div class="loading-content">
      <LoadingNum />
      <h1>Welcome to 1MAX.com ...</h1>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import LoadingNum from "./components/loadingNum.vue";

  const emit = defineEmits(["loading-complete"]);
  const isReady = ref(false);

  onMounted(() => {
    // Simple 5 second delay, then hide loading screen
    setTimeout(() => {
      isReady.value = true;
      emit("loading-complete");
    }, 8000);
  });
</script>

<style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .loading-content h1 {
    color: #7b61ff;
    font-size: clamp(1rem, 5vw, 2rem);
    text-align: center;
    font-family: "Orbitron", sans-serif;
    opacity: 0.7;
    position: relative;
    white-space: nowrap;
    background: linear-gradient(
      90deg,
      #7b61ff 0%,
      #7b61ff 40%,
      #ff61e6 50%,
      #7b61ff 60%,
      #7b61ff 100%
    );
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: -200% center;
    }
  }
</style>
