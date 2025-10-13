<script lang="ts" setup>
  import { section1 } from "../../../helper_files/images";
</script>

<template>
  <section class="section1-hero">
    <img
      :src="section1.s1_1max_logo"
      alt="1MAX Logo"
      class="logo" />
    <div class="section1-content">
      <!-- Left: Text and actions -->
      <div class="section1-left">
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
        <button class="trade-btn">Trade</button>
        <div class="social-row">
          <a
            href="#"
            class="social social-x"
            aria-label="X">
            <img
              :src="section1.s1_x_twitter"
              alt="X" />
          </a>
          <a
            href="#"
            class="social social-telegram"
            aria-label="Telegram">
            <img
              :src="section1.s1_telegram"
              alt="Telegram" />
          </a>
          <a
            href="#"
            class="social social-linkedin"
            aria-label="LinkedIn">
            <img
              :src="section1.s1_linkedin"
              alt="LinkedIn" />
          </a>
        </div>
      </div>
      <!-- Right: Concept image -->
      <div class="section1-right">
        <img
          :src="section1.s1_banner_image"
          alt="Concept"
          class="concept-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .section1-hero {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(45deg, #181a2a 50%, #2a2250 100%);
    /* 315deg = top right to bottom left */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5rem;
  }
  .section1-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    gap: 1rem;
  }
  .section1-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    flex: 1;
    min-width: 300px;
  }
  .logo {
    width: 30vw;
    margin-bottom: 2.5rem;
  }
  .profit-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 500;
  }
  .wallet-icon {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1);
  }
  .profit-label {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .main-title {
    font-size: 2.1rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin: 0.5rem 0 1.5rem 0;
  }
  .highlight {
    color: #7b61ff;
  }
  .trade-btn {
    background: #7b61ff;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0.7rem 2.2rem;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1.2rem 0 1.5rem 0;
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 24px 0 rgba(123, 97, 255, 0.15);
  }
  .trade-btn:hover {
    background: #5f47d6;
  }
  .social-row {
    display: flex;
    gap: 2.2rem;
    margin-top: 0.5rem;
  }
  .social {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid #7b61ff;
    transition: background 0.2s, border 0.2s;
    cursor: pointer;
    position: relative;
  }
  .social img {
    width: 32px;
    height: 32px;
    transition: filter 0.2s, background 0.2s;
    filter: invert(0) brightness(1);
  }
  /* Social icon hover: swap color/transparent */
  .social:hover {
    background: #7b61ff;
    border: 2px solid #fff;
  }
  .social:hover img {
    filter: invert(1) brightness(2) grayscale(1);
  }
  .section1-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .concept-img {
    width: 340px;
    max-width: 90vw;
    border-radius: 18px;
  }
  @media (min-width: 900px) {
    .section1-content {
      flex-direction: row;
      align-items: flex-start;
      gap: 3.5rem;
    }
    .section1-left {
      align-items: flex-start;
      max-width: 480px;
    }
    .section1-right {
      justify-content: flex-end;
    }
    .concept-img {
      width: 420px;
      max-width: 420px;
    }
  }
  @media (max-width: 600px) {
    .section1-content {
      gap: 1.2rem;
    }
    .main-title {
      font-size: 1.3rem;
    }
    .logo {
      width: 120px;
    }
    .concept-img {
      width: 90vw;
      max-width: 95vw;
    }
    .social {
      width: 40px;
      height: 40px;
    }
    .social img {
      width: 22px;
      height: 22px;
    }
  }
</style>
