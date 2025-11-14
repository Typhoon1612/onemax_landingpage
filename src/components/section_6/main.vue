<script lang="ts" setup>
  import { section6 } from "../../helper_files/images";
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
        :src="section6.s6_concept_img"
        alt="Concept Art"
        class="concept-art" />
    </div>
    <!-- QR and Download Info Center -->
    <div
      class="section7-center"
      ref="centerSection">
      <h1 class="section7-title">
        <span class="glow-text">Experience </span>
        <span class="gradient-text">1MAX</span
        ><span class="glow-text">. Anywhere, anytime.</span>
      </h1>
      <div class="qr-block">
        <img
          :src="section6.s6_apps_barcode"
          alt="QR Code"
          class="qr-img" />
        <div class="qr-info">
          <div class="qr-label">Scan to Download App</div>
          <div class="qr-platforms">iOS and Android</div>
        </div>
      </div>
      <div class="social-links">
        <h3 class="social-title">
          <span class="follow">Follow</span> <span class="us">Us</span>
        </h3>
        <div class="social-buttons">
          <a
            href="https://x.com/1MAX_GLOBAL"
            target="_blank"
            class="social-btn x-twitter">
            <span class="fa-brands fa-x-twitter"></span>
            <span class="social-label">X</span>
          </a>
          <a
            href="https://t.me/onemaxchannel"
            target="_blank"
            class="social-btn telegram">
            <span class="fa-brands fa-telegram"></span>
            <span class="social-label">Telegram</span>
          </a>
          <a
            href="https://linkedin.com/company/1max"
            target="_blank"
            class="social-btn linkedin">
            <span class="fa-brands fa-linkedin"></span>
            <span class="social-label">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/1max_global/"
            target="_blank"
            class="social-btn instagram">
            <span class="fa-brands fa-instagram"></span>
            <span class="social-label">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .section7-hero {
    width: 100%;
    min-height: 100vh;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    padding: 4rem 4rem;
    gap: 4rem;
    box-shadow: inset 0 1px 0 #000, inset 0 -1px 0 #000; /* mask hairlines */
    overflow-x: hidden; /* Prevent horizontal overflow */
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
    font-family: "Inter", sans-serif;
    font-size: clamp(1.8rem, 5vw, 3.5rem);
    line-height: 1.12;
    font-weight: 900;
    letter-spacing: 0.05em;
    margin: 0 0 2.25rem 0;
    text-align: left;
  }

  .section7-title .gradient-text {
    background: linear-gradient(135deg, #0dbeff 0%, #ff61e6 30%, #7b61ff 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-shift 3s ease infinite;
  }

  .section7-title .glow-text {
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(123, 97, 255, 0.6);
    animation: glow-pulse 2s ease-in-out infinite alternate;
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
    /* margin-left: 3.5rem; move slightly to the right */
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

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .social-title {
    font-family: "Inter", sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
    letter-spacing: 0.05em;
  }

  .social-title .follow {
    background: linear-gradient(135deg, #7b61ff 0%, #ff61e6 50%, #61d4ff 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-shift 3s ease infinite;
    text-shadow: 0 0 30px rgba(123, 97, 255, 0.5);
  }

  .social-title .us {
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
        0 0 10px rgba(123, 97, 255, 0.8), 0 0 20px rgba(123, 97, 255, 0.6);
    }
  }

  .social-buttons {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.9rem 1.8rem;
    background: rgba(123, 97, 255, 0.1);
    border: 2px solid #7b61ff;
    border-radius: 50px;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .social-btn:hover {
    background: #7b61ff;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(123, 97, 255, 0.3);
  }

  .social-btn span.fa-brands {
    font-size: 1.5rem;
  }

  .social-label {
    font-size: 1rem;
  }

  /* Brand-specific colors on hover */
  .social-btn.x-twitter:hover {
    background: #000000;
    border-color: #000000;
  }

  .social-btn.telegram:hover {
    background: #0088cc;
    border-color: #0088cc;
  }

  .social-btn.linkedin:hover {
    background: #0a66c2;
    border-color: #0a66c2;
  }

  .social-btn.instagram:hover {
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    border-color: #e1306c;
  }

  .platform-icons {
    display: flex;
    gap: 10rem; /* slightly tighter with two items */
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
    font-size: 3.5rem;
    color: #d9d9d9;
  }
  .platform-label {
    font-size: 2rem;
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
    .social-links {
      align-items: center;
    }
    .social-buttons {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
    .social-btn {
      padding: 0.7rem 1.4rem;
      font-size: 0.9rem;
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
