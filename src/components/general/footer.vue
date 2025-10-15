<template>
  <footer class="footer">
    <p class="copyright">Copyright © 2025 1Max. All rights reserved</p>
  </footer>
</template>

<style scoped>
  .footer {
    width: 100%;
    background: #000;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #1a1a1a;
    box-shadow: inset 0 1px 0 #000, inset 0 -1px 0 #000; /* mask hairlines */
  }

  .copyright {
    color: #d9d9d9;
    font-size: 0.95rem;
    font-weight: 400;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    .footer {
      padding: 1.5rem 1rem;
      box-shadow: inset 0 1px 0 #000, inset 0 -1px 0 #000; /* mask hairlines */
    }
    .copyright {
      font-size: 0.85rem;
    }
  }
</style>
