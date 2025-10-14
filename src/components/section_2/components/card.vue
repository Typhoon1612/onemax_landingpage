<script lang="ts" setup>
  import { defineProps, computed } from "vue";

  const props = defineProps<{
    cryptoName: string;
    cryptoSymbol: string;
    cryptoLogo: string;
    currentPrice: string;
    priceChange: string;
  }>();

  const changeClass = computed(() => {
    return props.priceChange.startsWith("+") ? "positive" : "negative";
  });
</script>

<template>
  <div class="crypto-card">
    <div class="card-content">
      <div class="top-row">
        <img
          :src="cryptoLogo"
          :alt="cryptoName"
          class="crypto-logo" />
        <h3 class="crypto-name">{{ cryptoName }}</h3>
        <span class="crypto-symbol">{{ cryptoSymbol }}</span>
      </div>

      <div class="bottom-row">
        <span class="current-price">${{ currentPrice }}</span>
        <span :class="['price-change', changeClass]">{{ priceChange }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .crypto-card {
    background: #2a2d3a;
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    justify-content: space-between;
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
    background: #f7931a;
    padding: 12px;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(247, 147, 26, 0.3);
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
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
  }

  .price-change {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .price-change.positive {
    color: #4ade80;
  }

  .price-change.negative {
    color: #ef4444;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
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
      font-size: 2rem;
    }

    .price-change {
      font-size: 1.2rem;
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
      font-size: 1.0rem;
      margin: 0 0 0 0.75rem;
    }

    .crypto-symbol {
      font-size: 1rem;
    }

    .current-price {
      font-size: 1.8rem;
    }

    .price-change {
      font-size: 1rem;
    }

    .card-content {
      gap: 1.5rem;
    }
  }
</style>
