<script lang="ts" setup>
import { defineProps, computed, onMounted, ref, onBeforeUnmount } from "vue";
  import { section2 as section2Vid } from "../../../helper_files/videos";
  import axios from "axios";

  // Props
  const props = defineProps<{
    cryptoName: string;
    cryptoSymbol: string;
    cryptoLogo: string;
  }>();

  // Reactive Data
  const currentPrice = ref(0);
  const priceChange = ref(0);

  // Axios Functions
  const fetchCryptoData = async (cryptoSymbol: string) => {
    try {
      const res = await axios.get("https://onemax-crypto-server.onrender.com/price", {
        params: { symbol: cryptoSymbol, convert: "USD" },
      });
      console.log("Fetched crypto data:", res.data);
      currentPrice.value = res.data.price;
      priceChange.value = res.data.percent_change_1h;
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };

  // Fetch data on component mount
  let intervalId: number | null = null;

  // Fetch data on component mount and every second
  onMounted(() => {
    fetchCryptoData(props.cryptoSymbol); // Initial fetch
    intervalId = setInterval(() => {
      fetchCryptoData(props.cryptoSymbol);
    }, 30000); // Call every 1 second (1000ms)
  });

  // Clean up interval when component unmounts
  onBeforeUnmount(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  });

  const changeClass = computed(() => {
    return priceChange.value != null && priceChange.value < 0
      ? "negative"
      : "positive";
  });
</script>

<template>
  <div class="crypto-card">
   <img
      :src="section2Vid.s2_graph"
      alt="Graph background"
      class="bg-graph" />
    <div class="card-content">
      <div class="top-row">
        <img
          :src="cryptoLogo"
          :alt="cryptoName"
          class="crypto-logo" />
        <h3 class="crypto-name">{{ cryptoName }}</h3>
        <span class="crypto-symbol">{{ cryptoSymbol }}/USDT</span>
      </div>

      <div class="bottom-row">
        <span class="current-price"
          >${{ currentPrice?.toFixed(2) ?? "--" }}</span
        >
        <span :class="['price-change', changeClass]"
          >{{ priceChange?.toFixed(2) ?? "--" }} (1h Last)</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bg-graph {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.3;
  }

  .crypto-card {
    background: #2a2d3a;
    opacity: 0.8;
    border-radius: 12px;
    padding: 2rem;
    width: 320px;
    max-width: 320px;
    min-height: 200px;
    border: 1px solid #3a3d4a;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .crypto-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .card-content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    justify-content: space-between;
    z-index: 2;
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .crypto-logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /* background: #f7931a; */
    padding: 12px;
    flex-shrink: 0;
    box-shadow: 0 4px 12px #7b61ff;
  }

  .crypto-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 0 1rem;
    flex-grow: 1;
    text-align: left;
  }

  .crypto-symbol {
    font-size: 1.2rem;
    color: #a0a0a0;
    font-weight: 500;
    text-align: right;
  }

  .bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .current-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
  }

  .price-change {
    font-size: 1rem;
    font-weight: 600;
  }

  .price-change.positive {
    color: #4ade80;
  }

  .price-change.positive::before {
    content: "+";
  }


  .price-change.negative {
    color: #ef4444;
  }

  /* Responsive adjustments */
  @media (max-width: 1208px) {
    .crypto-card {
      width: 90%;
      max-width: 400px;
      min-height: 160px;
      padding: 2rem;
    }

    .crypto-logo {
      width: 60px;
      height: 60px;
      padding: 12px;
    }

    .crypto-name {
      font-size: 1.2rem;
      margin: 0 0 0 1rem;
    }

    .crypto-symbol {
      font-size: 1.2rem;
    }

    .current-price {
      font-size: 1.5rem;
    }

    .price-change {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .crypto-card {
      width: 95%;
      max-width: 350px;
      min-height: 140px;
      padding: 1.5rem;
    }

    .crypto-logo {
      width: 50px;
      height: 50px;
      padding: 10px;
    }

    .crypto-name {
      font-size: 1rem;
      margin: 0 0 0 0.75rem;
    }

    .crypto-symbol {
      font-size: 1rem;
    }

    .current-price {
      font-size: 1.4rem;
    }

    .price-change {
      font-size: 1rem;
    }

    .card-content {
      gap: 1.5rem;
    }
  }
</style>
