<script lang="ts" setup>
  import { section7 } from "../../../helper_files/images";
  import { ref, onMounted } from "vue";

  const leftSection = ref<HTMLElement>();
  const centerSection = ref<HTMLElement>();

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
    if (centerSection.value) observer.observe(centerSection.value);
  });
</script>

<template>
  <section class="section7-hero">
    <!-- Phone Mockup Left -->
    <div
      class="section7-left"
      ref="leftSection">
      <img
        :src="section7.s7_concept_img"
        alt="Concept Art"
        class="concept-art" />
    </div>
    <!-- QR and Download Info Center -->
    <div
      class="section7-center"
      ref="centerSection">
      <h1 class="section7-title">
        Trade with <span style="color: #7b61ff">1Max</span>. Anywhere, anytime.
      </h1>
      <div class="qr-block">
        <img
          :src="section7.s7_apps_barcode"
          alt="QR Code"
          class="qr-img" />
        <div class="qr-info">
          <div class="qr-label">Scan to Download App</div>
          <div class="qr-platforms">iOS and Android</div>
        </div>
      </div>
      <div class="platform-icons">
        <div class="platform">
          <span class="fa-brands fa-apple platform-icon"></span>
          <span class="platform-label">iOS</span>
        </div>
        <div class="platform">
          <span class="fa-brands fa-android platform-icon"></span>
          <span class="platform-label">Android</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .section7-hero {
    min-height: 100vh;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    padding: 4rem 4rem;
    gap: 4rem;
    box-shadow: inset 0 1px 0 #000, inset 0 -1px 0 #000; /* mask hairlines */
  }
  .section7-left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 0;
    /* Animation: fade in from left */
    opacity: 0;
    transform: translateX(-60px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .section7-left.animate-in {
    opacity: 1;
    transform: translateX(0);
  }
  .concept-art {
    max-width: 350px;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .section7-center {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* align left */
    justify-content: center;
    flex: 2 1 0;
    gap: 2.75rem;
    /* Animation: fade in from right */
    opacity: 0;
    transform: translateX(60px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    transition-delay: 0.2s; /* slight delay for stagger effect */
  }

  .section7-center.animate-in {
    opacity: 1;
    transform: translateX(0);
  }
  .section7-title {
    font-size: clamp(1.8rem, 5vw, 3.5rem);
    line-height: 1.12;
    font-weight: 800;
    letter-spacing: 0.05rem;
    color: #fff;
    margin: 0 0 2.25rem 0;
    text-align: left;
  }
  .qr-block {
    display: flex;
    align-items: center;
    gap: 2rem;
    background: #181c22;
    border-radius: 18px;
    padding: 2.25rem 2.75rem; /* slightly bigger */
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.18);
    margin-bottom: 2.25rem;
    margin-left: 3.5rem; /* move slightly to the right */
  }
  .qr-img {
    width: 160px;
    height: 160px;
    border-radius: 12px;
    background: #fff;
    padding: 0.6rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  }
  .qr-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
  .qr-label {
    font-size: 1.15rem;
    color: #d9d9d9;
    font-weight: 500;
  }
  .qr-platforms {
    font-size: 1.25rem;
    color: #d9d9d9;
    font-weight: 700;
  }
  .platform-icons {
    display: flex;
    gap: 20rem; /* slightly tighter with two items */
    margin-top: 1.5rem;
    margin-left: 1rem;
    justify-content: flex-start; /* align left */
    align-items: center;
  }
  .platform {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .platform-icon {
    font-size: 6rem;
    color: #d9d9d9;
  }
  .platform-label {
    font-size: 3rem;
    color: #d9d9d9;
    font-weight: 500;
    margin-top: 0.25rem;
  }
  @media (max-width: 900px) {
    .section7-hero {
      flex-direction: column;
      gap: 2rem;
      padding: 2rem 1rem;
    }
    .section7-center {
      gap: 1.75rem;
      align-items: center; /* center content on mobile */
    }
    .section7-title {
      text-align: center;
    }
    .qr-block {
      flex-direction: column;
      gap: 1rem;
      padding: 1.4rem 1.15rem;
      align-items: center; /* keep QR and text centered */
      margin-left: 0; /* center on mobile */
    }
    .qr-info {
      align-items: center;
      text-align: center;
    }
    .platform-icons {
      gap: 1.25rem;
      justify-content: center;
      margin-left: 0; /* center on mobile */
    }
    .platform-icon {
      font-size: 3rem;
    }
    .platform-label {
      font-size: 1.2rem;
    }
  }
</style>
