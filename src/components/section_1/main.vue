<script lang="ts" setup>
  import { section1 } from "../../../helper_files/images";
  import OmxButton from "../general/button.vue";
  import SocialMediaBtn from "./components/social_media_btn.vue";
  import { ref, onMounted } from "vue";

  const leftSection = ref<HTMLElement>();
  const rightSection = ref<HTMLElement>();

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

    if (leftSection.value) observer.observe(leftSection.value);
    if (rightSection.value) observer.observe(rightSection.value);
  });
</script>

<template>
  <section class="section1-hero">
    <img
      :src="section1.s1_1max_logo"
      alt="1MAX Logo"
      class="logo" />
    <div class="section1-content">
      <!-- Left: Text and actions -->
      <div
        class="section1-left"
        ref="leftSection">
        <div class="profit-row">
          <img
            :src="section1.s1_icon_wallet"
            alt="Wallet"
            class="wallet-icon" />
          <span class="profit-label">Maximize Your Crypto Profit:</span>
        </div>
        <h1 class="main-title">
          Buy &amp; Trade <span class="highlight">Crypto</span><br />
          Up to <span class="highlight">125× Futures Leverage</span>!
        </h1>
        <OmxButton>Trade</OmxButton>
        <div class="social-row">
          <SocialMediaBtn
            href="#"
            type="x"
            :icon-src="section1.s1_x_twitter"
            :ariaLabel="'X'" />
          <SocialMediaBtn
            href="#"
            type="telegram"
            :icon-src="section1.s1_telegram"
            :ariaLabel="'Telegram'" />
          <SocialMediaBtn
            href="#"
            type="linkedin"
            :icon-src="section1.s1_linkedin"
            :ariaLabel="'LinkedIn'" />
        </div>
      </div>
      <!-- Right: Concept image -->
      <div
        class="section1-right"
        ref="rightSection">
        <img
          :src="section1.s1_banner_image"
          alt="Concept"
          class="concept-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap");

  .section1-hero {
    width: auto;
    min-height: 100%;
    background: linear-gradient(45deg, #000000 50%, #2a2250 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section1-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1500px;
    gap: 2rem;
  }
  .section1-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    text-align: center;
    opacity: 0;
    transform: translateX(-60px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .section1-left.animate-in {
    opacity: 1;
    transform: translateX(0);
  }
  .logo {
    width: 300px;
  }
  .profit-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 500;
    justify-content: flex-start;
  }
  .wallet-icon {
    width: 50px;
    height: 50px;
    filter: brightness(0) invert(1);
  }
  .profit-label {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 900;
    font-family: "Orbitron", monospace;
  }
  .main-title {
    font-size: 0.5rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin: 1rem 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      sans-serif;
  }
  .highlight {
    color: #7b61ff;
  }
  .social-row {
    display: flex;
    gap: 2.2rem;
    margin-top: 0.5rem;
  }
  .section1-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(-60px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    transition-delay: 0.2s;
  }

  .section1-right.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  .concept-img {
    width: 420px;
    max-width: 95vw;
  }
  /* Tablet and up */
  @media (max-width: 1023px) {
    .logo {
      width: 200px;
    }
    .section1-hero {
      padding: 2rem;
    }
    .profit-row {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .profit-label {
      font-size: 1.8rem;
    }
    .main-title {
      font-size: 3.2rem;
    }
    .wallet-icon {
      width: 70px;
      height: 70px;
    }
    .concept-img {
      width: 450px;
      max-width: 450px;
    }
  }

  /* Desktop and up */
  @media (min-width: 1024px) {
    .section1-hero {
      padding: 2rem 4rem;
    }
    .section1-content {
      flex-direction: row;
      align-items: center;
      gap: 3rem;
      text-align: left;
    }
    .section1-left {
      align-items: flex-start;
      text-align: left;
      max-width: 600px;
      /* flex: 1.5 1 0%; */
    }
    .section1-right {
      justify-content: flex-end;
      align-self: flex-end;
      margin-top: 2rem;
      /* flex: 0.5 1 0%; Grow less */
    }
    .profit-label {
      font-size: 2.2rem;
      white-space: nowrap;
    }
    .main-title {
      font-size: 4rem;
    }

    .concept-img {
      width: 550px;
      max-width: 550px;
    }
  }

  /* Large desktop */
  @media (min-width: 1440px) {
    .profit-label {
      font-size: 2.6rem;
    }
    .concept-img {
      width: 620px;
      max-width: 620px;
    }
  }

  /* Mobile specific adjustments */
  @media (max-width: 500px) {
    .section1-hero {
      padding: 1rem 0.5rem;
    }
    .profit-label {
      font-size: 1.2rem;
    }
    .main-title {
      font-size: 3rem;
    }
    .logo {
      width: 150px;
      padding-bottom: 2.5rem;
    }
    .concept-img {
      padding-top: 30px;
      width: 95vw;
      max-width: 95vw;
    }

    .wallet-icon {
      width: 40px;
      height: 40px;
    }
  }
</style>
