<script setup lang="ts">
  import ConceptVidImg from "./components/concept_vid_img.vue";
  import { section3 as section3Images } from "../../../helper_files/images";
  import { section3 as section3Videos } from "../../../helper_files/videos";
  import { ref, onMounted } from "vue";
  // Refs for each feature section
  const headingRef = ref<HTMLElement>();
  const analyseRef = ref<HTMLElement>();
  const storeRef = ref<HTMLElement>();
  const connectRef = ref<HTMLElement>();

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
        Top Features
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
          Track and analyze your crypto portfolio in real-time with advanced
          analytics. Monitor market trends, view detailed performance charts,
          and get insights on your holdings across multiple wallets. Our
          AI-powered analysis helps you make informed decisions with live price
          tracking, profit/loss calculations, and personalized recommendations
          tailored to your investment strategy.
        </p>
      </div>
      <div class="section3-img-vid-right">
        <ConceptVidImg
          :video-link="section3Videos.s3_analyse_video"
          :image-link="section3Images.s3_analyse_image" />
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
          :image-link="section3Images.s3_analyse_image" />
      </div>
      <div class="section3-text-right">
        <h1 class="section3-title">/Store</h1>
        <p class="section3-description">
          Store any crypto on OKX Wallet, including BTC, ETH, USDT, or meme
          tokens and NFTs. Our wallet allows you to create up to 1,000
          sub-accounts at once, and you can fully manage your keys.
        </p>
        <
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
          Seamlessly connect to thousands of decentralized applications across
          multiple blockchains. Access DeFi protocols, NFT marketplaces, and
          Web3 services directly from your wallet. Our secure connection
          protocol ensures your private keys never leave your device while
          enabling one-click access to the entire crypto ecosystem. Experience
          true interoperability with support for Ethereum, BSC, Polygon, and
          more.
        </p>
      </div>
      <div class="section3-img-vid-right">
        <ConceptVidImg
          :video-link="section3Videos.s3_connect_video"
          :image-link="section3Images.s3_connect_image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap");

  .section3-container {
    width: 100%;
    background: #000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    overflow-x: hidden; /* Prevent horizontal overflow */
  }

  .section3-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section3-header-title {
    font-family: "Orbitron", monospace;
    font-size: clamp(2rem, 5vw, 9rem);
    font-weight: 900;
    color: #fff;
    margin: 0;
    letter-spacing: 0.05em;
  }

  .section3-content {
    max-width: 1400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0 5rem 0rem;
    gap: 6rem;
  }

  .section3-text-left .section3-text-right {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 600px;
  }

  .section3-img-vid-right .section3-img-vid-left {
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section3-title {
    font-family: "Orbitron", monospace;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    color: #fff;
    margin: 0;
    letter-spacing: 0.05em;
  }

  .section3-description {
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.7;
    color: #d9d9d9;
    margin: 0;
    font-weight: 400;
  }

  @media (max-width: 900px) {
    .section3-container {
      padding: 0rem 0rem;
      min-height: auto;
    }
    .section3-header {
      margin-bottom: 2rem;
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
</style>
