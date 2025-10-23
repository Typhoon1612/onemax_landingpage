<script lang="ts" setup>
  import { section2 } from "../../helper_files/images";
  import CryptoCard from "./components/card.vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination, Autoplay } from "swiper/modules";

  const modules = [Navigation, Pagination, Autoplay];
</script>

<template>
  <section class="section2-crypto">
    <div class="section2-container">
      <Swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="32"
        :navigation="true"
        :pagination="{ clickable: true }"
        :loop="true"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1200: { slidesPerView: 4, spaceBetween: 30 },
        }"
        class="crypto-swiper">
        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Bitcoin"
            crypto-symbol="BTC"
            :crypto-logo="section2.s2_bitcoin_logo" />
        </SwiperSlide>

        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Dogecoin"
            crypto-symbol="DOGE"
            :crypto-logo="section2.s2_dogecoin_logo" />
        </SwiperSlide>

        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Ethereum"
            crypto-symbol="ETH"
            :crypto-logo="section2.s2_ethereum_logo" />
        </SwiperSlide>

        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Litecoin"
            crypto-symbol="LTC"
            :crypto-logo="section2.s2_litecoin_logo" />
        </SwiperSlide>
        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Solana"
            crypto-symbol="SOL"
            :crypto-logo="section2.s2_solana_logo" />
        </SwiperSlide>
        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Tron"
            crypto-symbol="TRX"
            :crypto-logo="section2.s2_tron_logo" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
  .section2-crypto {
    width: 100%;
    padding: 1px 2rem; /* 1px vertical pad to avoid seam */
    background: #000000;
    min-height: 30vh;
    /* Remove flex centering for left alignment */
    box-shadow: inset 0 1px 0 #000, inset 0 -1px 0 #000; /* mask hairlines */
    overflow: hidden; /* clip sub-pixel artifacts */
    transform: translateZ(0); /* force layer */
  }

  .section2-container {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .crypto-swiper {
    width: 100%;
    max-width: 1500px;
    margin-left: 0;
    margin-right: auto;
  }

  .crypto-slide {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
  }

  .crypto-slide > * {
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
  }

  /* Swiper Navigation Arrows */
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none; /* completely hide navigation buttons */
  }

  /* Swiper Pagination Dots */
  :deep(.swiper-pagination-bullet) {
    background: rgba(255, 255, 255, 0.3);
    width: 12px;
    height: 12px;
    transition: all 0.3s ease;
  }

  :deep(.swiper-pagination-bullet-active) {
    background: #7b61ff;
    transform: scale(1.3);
  }

  :deep(.swiper-pagination-bullet:hover) {
    background: rgba(255, 255, 255, 0.6);
    transform: scale(1.2);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .section2-crypto {
      padding: 1px 1rem; /* maintain 1px vertical pad */
      min-height: 20vh;
    }
    .crypto-swiper {
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
    }
    /* removed empty ruleset */
  }
</style>
