<script setup lang="ts">
  import ConceptVidImg from "./components/concept_vid_img.vue";
  import { section3 as section3Images } from "../../helper_files/images";
  import { section3 as section3Videos } from "../../helper_files/videos";
  import { ref, onMounted } from "vue";
  // Refs for each feature section
  const headingRef = ref<HTMLElement>();
  const analyseRef = ref<HTMLElement>();
  const storeRef = ref<HTMLElement>();
  const connectRef = ref<HTMLElement>();

  const goToRegister = () => {
    window.location.href = "https://www.1max.com/en_US/register";
  };

  onMounted(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    if (headingRef.value) observer.observe(headingRef.value);
    if (analyseRef.value) observer.observe(analyseRef.value);
    if (storeRef.value) observer.observe(storeRef.value);
    if (connectRef.value) observer.observe(connectRef.value);
  });
</script>

<template>
  <section class="section3-container">
    <!-- Header -->
    <div class="section3-header">
      <h1
        class="section3-header-title animate-section"
        ref="headingRef">
        <span class="top">Top</span> <span class="features">Features</span>
      </h1>
    </div>
    <!-- Analyse -->
    <div
      class="section3-content animate-section"
      ref="analyseRef">
      <!-- Analyse: Text left, image right -->
      <div
        class="section3-text-left"
        ref="leftSection">
        <h1 class="section3-title">/Analyse</h1>
        <p class="section3-description">
          Track and analyze your digital portfolio in real time with advanced
          analytics. Monitor market trends, view detailed performance data, and
          gain insights across multiple wallets. Smart tools help you stay
          informed with live price tracking and personalized insights for your
          Web3 strategy.
        </p>
        <button @click="goToRegister">Register Now</button>
      </div>
      <div class="section3-img-vid-right">
        <ConceptVidImg
          :video-link="section3Videos.s3_analyse_video"
          :image-link="section3Images.s3_analyse_image"
          video-direction="concept-vid-right"
          img-video-c-s-s-class="concept-vid-img concept-vid-img-right" />
      </div>
    </div>
    <!-- Store -->
    <div
      class="section3-content animate-section"
      ref="storeRef">
      <!-- Store: Text left, image right -->
      <div
        class="section3-img-vid-left"
        ref="rightSection">
        <ConceptVidImg
          :video-link="section3Videos.s3_store_video"
          :image-link="section3Images.s3_store_image"
          video-direction="concept-vid-left"
          img-video-c-s-s-class="concept-vid-img concept-vid-img-left" />
      </div>
      <div class="section3-text-right">
        <h1 class="section3-title">/Store</h1>
        <p class="section3-description">
          Built for the future of finance, 1MAX Wallet lets you manage BTC, ETH,
          USDT, and other digital assets in one powerful ecosystem. Experience
          seamless access, smart tools, and complete control over your Web3
          portfolio.
        </p>
        <button @click="goToRegister">Register Now</button>
      </div>
    </div>
    <!-- Connect -->
    <div
      class="section3-content animate-section"
      ref="connectRef">
      <!-- Connect: Text left, image right -->
      <div
        class="section3-text-left"
        ref="leftSection">
        <h1 class="section3-title">/Connect</h1>
        <p class="section3-description">
          Effortlessly connect to a world of decentralized applications across
          multiple networks. Explore Web3 services all from one secure
          interface. Your data stays protected on your device while you enjoy
          simple, one-tap access to a truly connected Web3 experience. Built for
          interoperability with Ethereum, BNB Smart Chain, Polygon, and more.
        </p>
        <button @click="goToRegister">Register Now</button>
      </div>
      <div class="section3-img-vid-right">
        <ConceptVidImg
          :video-link="section3Videos.s3_connect_video"
          :image-link="section3Images.s3_connect_image"
          video-direction="concept-vid-right"
          img-video-c-s-s-class="concept-vid-img concept-vid-img-right" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap");

  .section3-container {
    width: 100%;
    background: transparent;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 5rem;
  }

  .section3-header {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }

  .section3-header-title {
    font-family: "Inter", sans-serif;
    font-size: clamp(5rem, 10vw, 6rem);
    font-weight: 900;
    margin: 0;
    letter-spacing: 0.05em;
  }

  .section3-header-title .top {
    background: linear-gradient(135deg, #7b61ff 0%, #ff61e6 50%, #61d4ff 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-shift 3s ease infinite;
  }

  .section3-header-title .features {
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

  @keyframes title-shimmer {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .section3-content {
    max-width: 1100px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 15rem 0 15rem 0;
    z-index: 1;
  }

  .section3-text-right,
  .section3-text-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 500px;
  }

  .section3-img-vid-right,
  .section3-img-vid-left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section3-title {
    font-family: "Inter", monospace;
    font-size: clamp(1.5rem, 4vw, 3rem);
    font-weight: 900;
    color: #fff;
    margin: 0;
    letter-spacing: 0.05em;
  }

  .section3-description {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    line-height: 1.7;
    color: #d9d9d9;
    margin: 0;
    font-weight: 400;
  }

  @media (max-width: 1500px) {
    .section3-content {
      gap: clamp(1.5rem, 3vw, 2.5rem);
      padding: 3.5rem 1.5rem;
      justify-content: space-between;
    }

    .section3-text-left,
    .section3-text-right {
      max-width: 300px;
    }
  }

  @media (max-width: 1450px) {
    .section3-content {
      gap: clamp(1rem, 2.5vw, 2rem);
      padding: 3rem 1.25rem;
    }

    .section3-text-left,
    .section3-text-right {
      max-width: 380px;
    }
  }

  @media (max-width: 1300px) {
    .section3-container {
      padding: 0rem 0rem;
      min-height: auto;
    }
    .section3-header {
      margin-bottom: 2rem;
    }
    .section3-header-title {
      font-size: clamp(3.25rem, 14vw, 4.25rem);
    }
    .section3-content {
      flex-direction: column;
      gap: 2rem;
      padding: 3rem 0;
    }
    /* Force image/video to always appear first on mobile */
    .section3-img-vid-right,
    .section3-img-vid-left {
      order: 1;
    }
    /* Force text to always appear second on mobile */
    .section3-text-left,
    .section3-text-right {
      order: 2;
      text-align: center;
      align-items: center;
    }

    .section3-description {
      padding: 0 1rem;
    }

    button {
      width: 100%;
      max-width: 300px;
    }
  }
  @media (max-width: 600px) {
    .section3-header-title {
      font-size: clamp(2rem, 10vw, 2.5rem);
    }
  }
  /* Animation styles */
  .animate-section {
    opacity: 0;
    transform: translateY(60px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;
  }

  .animate-section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  button {
    display: inline-block;
    min-width: 200px;
    max-width: fit-content;
    padding: clamp(0.8rem, 2vw, 1rem) clamp(2rem, 4vw, 3rem);
    font-size: clamp(1rem, 2vw, 1.3rem);
    font-weight: 550;
    border-radius: 50px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 24px 0 rgba(123, 97, 255, 0.15);
    border: 2px solid transparent;
    background: #7b61ff;
    color: #fff;
    margin-top: 2rem;
    white-space: nowrap;
  }
  button:hover {
    background: transparent;
    color: #7b61ff;
    border: 2px solid #7b61ff;
    box-shadow: none;
  }
  button:active {
    background: #7b61ff;
    color: #fff;
    border: 2px solid transparent;
    box-shadow: 0 4px 24px 0 rgba(123, 97, 255, 0.15);
  }
  button.outline {
    background: transparent;
    color: #7b61ff;
    border: 2px solid #7b61ff;
    box-shadow: none;
  }
  button.outline:hover {
    background: #7b61ff;
    color: #fff;
    border: 2px solid transparent;
  }
  button--block {
    display: block;
    width: 100%;
  }
</style>
