<script lang="ts" setup>
  import { section2 } from "../../../helper_files/images";
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
          :slides-per-view="3"
          :space-between="32"
          :navigation="true"
          :pagination="{ clickable: true }"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 32 },
          }"
          class="crypto-swiper"
        >
        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Bitcoin"
            crypto-symbol="BTC/USDT"
            :crypto-logo="section2.s2_bitcoin_logo"
            current-price="8.00"
            price-change="+4.1 (24h Last)" />
        </SwiperSlide>

        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Dogecoin"
            crypto-symbol="DOGE/USDT"
            :crypto-logo="section2.s2_dogecoin_logo"
            current-price="0.3421"
            price-change="-2.3 (24h Last)" />
        </SwiperSlide>

        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Ethereum"
            crypto-symbol="ETH/USDT"
            :crypto-logo="section2.s2_ethereum_logo"
            current-price="3,245.67"
            price-change="+1.8 (24h Last)" />
        </SwiperSlide>

        <SwiperSlide class="crypto-slide">
          <CryptoCard
            crypto-name="Litecoin"
            crypto-symbol="LTC/USDT"
            :crypto-logo="section2.s2_litecoin_logo"
            current-price="94.32"
            price-change="+0.7 (24h Last)" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
  .section2-crypto {
    width: 100%;
    padding: 0rem 2rem;
    background: #000000;
    min-height: 30vh;
    /* Remove flex centering for left alignment */
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
    /* padding: 2rem 0; */
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
    color: #7b61ff;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  :deep(.swiper-button-next:hover),
  :deep(.swiper-button-prev:hover) {
    background: rgba(123, 97, 255, 0.3);
    transform: scale(1.1);
  }

  :deep(.swiper-button-next:after),
  :deep(.swiper-button-prev:after) {
    font-size: 18px;
    font-weight: bold;
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
      padding: 0rem 1rem;
      min-height: 30vh;
    }
    .crypto-swiper {
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
    }
    .crypto-slide {
      /* no extra padding on mobile, Swiper handles gap */
    }
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      width: 40px;
      height: 40px;
      margin-top: -20px;
    }
    :deep(.swiper-button-next:after),
    :deep(.swiper-button-prev:after) {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    /* .crypto-swiper {
      padding: 1rem 0;
    } */

    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      width: 35px;
      height: 35px;
      margin-top: -17px;
    }
  }
</style>
