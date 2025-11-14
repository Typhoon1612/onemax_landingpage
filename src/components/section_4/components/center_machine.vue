<style scoped>
  .section4-container {
    width: 100%;
    height: 100vh; /* Default for all screens */
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0 6rem;
    position: relative;
    overflow: hidden;
  }

  .section4-content {
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1.5);
  }

  .stars-container {
    position: absolute;
    width: 100%;
    height: 100%;
    perspective: 500px;
    transform-style: preserve-3d;
  }

  .star-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  .star-layer:nth-child(1) {
    transform: translateZ(-50px);
    animation: star-drift 150s linear infinite;
  }

  .star-layer:nth-child(2) {
    transform: translateZ(-100px);
    animation: star-drift 200s linear infinite reverse;
    opacity: 0.6;
  }

  .star-layer:nth-child(3) {
    transform: translateZ(-200px);
    animation: star-drift 250s linear infinite;
    opacity: 0.4;
  }

  @keyframes star-drift {
    0% {
      transform: translateZ(-50px) translateY(0);
    }
    100% {
      transform: translateZ(-50px) translateY(100%);
    }
  }

  .star-layer::before,
  .star-layer::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .star-layer:nth-child(1)::before {
    background-image: radial-gradient(
        1px 1px at 10% 10%,
        white 100%,
        transparent
      ),
      radial-gradient(1px 1px at 20% 20%, white 100%, transparent),
      radial-gradient(2px 2px at 30% 30%, white 100%, transparent),
      radial-gradient(1px 1px at 40% 40%, white 100%, transparent),
      radial-gradient(2px 2px at 50% 50%, white 100%, transparent),
      radial-gradient(1px 1px at 60% 60%, white 100%, transparent),
      radial-gradient(2px 2px at 70% 70%, white 100%, transparent),
      radial-gradient(1px 1px at 80% 80%, white 100%, transparent),
      radial-gradient(2px 2px at 90% 90%, white 100%, transparent),
      radial-gradient(1px 1px at 15% 85%, white 100%, transparent);
  }

  /* .nebula {
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  background: radial-gradient(
      ellipse at 30% 30%,
      rgba(63, 0, 113, 0.3) 0%,
      rgba(63, 0, 113, 0) 70%
    ),
    radial-gradient(
      ellipse at 70% 60%,
      rgba(0, 113, 167, 0.3) 0%,
      rgba(0, 113, 167, 0) 70%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      rgba(167, 0, 157, 0.2) 0%,
      rgba(167, 0, 157, 0) 70%
    );
  filter: blur(30px);
  opacity: 0.5;
  animation: nebula-shift 30s infinite alternate ease-in-out;
}

@keyframes nebula-shift {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2) rotate(5deg);
    opacity: 0.4;
  }
} */

  .grid-plane {
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background-image: linear-gradient(#7b61ff 1px, transparent 1px),
      linear-gradient(90deg, #7b61ff 1px, transparent 1px);
    background-size: 40px 40px;
    transform: perspective(500px) rotateX(60deg);
    transform-origin: center;
    animation: grid-move 20s linear infinite;
    opacity: 0.3;
  }

  @keyframes grid-move {
    0% {
      transform: perspective(500px) rotateX(60deg) translateY(0);
    }
    100% {
      transform: perspective(500px) rotateX(60deg) translateY(40px);
    }
  }

  .checkbox-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 400px;
    z-index: 10;
    transform: scale(1.2);
  }

  /* Скрываем стандартный чекбокс */
  .holo-checkbox-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .holo-checkbox {
    position: relative;
    width: 120px;
    height: 120px;
    cursor: pointer;
    transform-style: preserve-3d;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .holo-box {
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 162, 255, 0.7);
    border-radius: 12px;
    background-color: rgba(0, 24, 55, 0.5);
    box-shadow: 0 0 10px rgba(0, 162, 255, 0.5),
      inset 0 0 15px rgba(0, 162, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all 0.3s ease;
    transform-style: preserve-3d;
  }

  .holo-inner {
    position: absolute;
    width: 30%;
    height: 30%;
    background-color: rgba(0, 162, 255, 0.5);
    border-radius: 4px;
    opacity: 0;
    transform: scale(0) rotate(45deg);
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 162, 255, 0.8);
  }

  .scan-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 162, 255, 0.8),
      transparent
    );
    animation: scan-off 4s infinite;
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  @keyframes scan-off {
    0% {
      left: -100%;
      opacity: 0.3;
    }
    100% {
      left: 100%;
      opacity: 0.3;
    }
  }

  @keyframes scan-on {
    0% {
      left: -100%;
      opacity: 1;
    }
    100% {
      left: 100%;
      opacity: 1;
    }
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-box {
    border-color: #7b61ffc3;
    box-shadow: 0 0 10px #7b61ff93, inset 0 0 15px #7b61ff4d;
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-inner {
    background-color: #7b61ff7f;
    box-shadow: 0 0 15px #7b61ff71;
    opacity: 1;
    transform: scale(1) rotate(45deg);
  }

  .holo-checkbox-input:checked + .holo-checkbox .scan-effect {
    animation: scan-on 2s infinite;
    opacity: 1;
    background: linear-gradient(90deg, transparent, #7b61ffc5, transparent);
  }

  .holo-glow {
    position: absolute;
    width: 200%;
    height: 200%;
    left: -50%;
    top: -50%;
    background: radial-gradient(
      ellipse at center,
      #7b61ff57 0%,
      #7b61ff32 40%,
      rgba(0, 0, 0, 0) 70%
    );
    pointer-events: none;
    filter: blur(10px);
    opacity: 0.5;
    z-index: -1;
    animation: glow-pulse 4s infinite alternate;
    transition: all 0.5s ease;
  }

  @keyframes glow-pulse {
    0% {
      opacity: 0.3;
      filter: blur(10px) brightness(0.8);
    }
    100% {
      opacity: 0.6;
      filter: blur(15px) brightness(1.2);
    }
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-glow {
    background: radial-gradient(
      ellipse at center,
      #7b61ff4f 0%,
      #7b61ff32 40%,
      rgba(0, 0, 0, 0) 70%
    );
    animation: active-glow-pulse 2s infinite alternate;
  }

  @keyframes active-glow-pulse {
    0% {
      opacity: 0.4;
      filter: blur(10px) brightness(1);
    }
    100% {
      opacity: 0.8;
      filter: blur(20px) brightness(1.5);
    }
  }

  .corner-accent {
    position: absolute;
    width: 15px;
    height: 15px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(0, 162, 255, 0.5);
    transition: all 0.3s ease;
  }

  .corner-accent:nth-child(1) {
    top: -5px;
    left: -5px;
    border-right: none;
    border-bottom: none;
    border-radius: 5px 0 0 0;
  }

  .corner-accent:nth-child(2) {
    top: -5px;
    right: -5px;
    border-left: none;
    border-bottom: none;
    border-radius: 0 5px 0 0;
  }

  .corner-accent:nth-child(3) {
    bottom: -5px;
    left: -5px;
    border-right: none;
    border-top: none;
    border-radius: 0 0 0 5px;
  }

  .corner-accent:nth-child(4) {
    bottom: -5px;
    right: -5px;
    border-left: none;
    border-top: none;
    border-radius: 0 0 5px 0;
  }

  .holo-checkbox-input:checked + .holo-checkbox .corner-accent {
    width: 20px;
    height: 20px;
    border-color: #7b61ffbd;
  }

  .status-text {
    margin-top: 40px;
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 162, 255, 0.8);
    text-shadow: 0 0 5px rgba(0, 162, 255, 0.5);
    position: relative;
    transition: all 0.3s ease;
    white-space: nowrap;
    text-align: center;
    min-width: 300px;
  }

  .status-text::before {
    content: "Click to ACTIVATE SYSTEM";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .holo-checkbox-input:checked ~ .status-text::before {
    content: "Keywords of us";
    color: #7b61ffe2;
    text-shadow: 0 0 5px #7b61ff95;
  }

  .activation-rings {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .activation-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 40%;
    border: 1px solid rgba(0, 255, 136, 0);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .holo-checkbox-input:checked + .holo-checkbox .activation-ring {
    animation: ring-expand 2s ease-out forwards;
    border-color: #7b61ffce;
  }

  .holo-checkbox-input:checked + .holo-checkbox .activation-ring:nth-child(1) {
    animation-delay: 0s;
  }

  .holo-checkbox-input:checked + .holo-checkbox .activation-ring:nth-child(2) {
    animation-delay: 0.3s;
  }

  .holo-checkbox-input:checked + .holo-checkbox .activation-ring:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes ring-expand {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(2.5);
      opacity: 0;
    }
  }

  .holo-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .holo-particle {
    position: absolute;
    background-color: rgba(0, 162, 255, 0.7);
    border-radius: 50%;
    width: 3px;
    height: 3px;
    opacity: 0;
    filter: blur(1px);
    transition: all 0.3s ease;
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-particle {
    background-color: #7b61ffc4;
    animation: particle-float 3s infinite ease-in-out;
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-particle:nth-child(1) {
    top: 20%;
    left: 30%;
    animation-delay: 0.1s;
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-particle:nth-child(2) {
    top: 70%;
    left: 20%;
    animation-delay: 0.7s;
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-particle:nth-child(3) {
    top: 40%;
    left: 80%;
    animation-delay: 1.3s;
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-particle:nth-child(4) {
    top: 60%;
    left: 60%;
    animation-delay: 1.9s;
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-particle:nth-child(5) {
    top: 30%;
    left: 45%;
    animation-delay: 2.5s;
  }

  .holo-checkbox-input:checked + .holo-checkbox .holo-particle:nth-child(6) {
    top: 60%;
    left: 40%;
    animation-delay: 3.1s;
  }

  @keyframes particle-float {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateY(-20px) scale(0);
      opacity: 0;
    }
  }

  .cube-transform {
    position: absolute;
    width: 30%;
    height: 30%;
    transform-style: preserve-3d;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .cube-face {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 162, 255, 0.3);
    border: 1px solid rgba(0, 162, 255, 0.5);
    box-shadow: 0 0 5px rgba(0, 162, 255, 0.3);
    transition: all 0.3s ease;
  }

  .holo-checkbox-input:checked + .holo-checkbox .cube-transform {
    opacity: 1;
    animation: cube-rotate 5s infinite linear;
  }

  .holo-checkbox-input:checked + .holo-checkbox .cube-face {
    background-color: #7b61ff4e;
    border-color: #7b61ff89;
    box-shadow: 0 0 5px #7b61ff4f;
  }

  .holo-checkbox-input:checked + .holo-checkbox .cube-face:nth-child(1) {
    transform: translateZ(15px);
  }

  .holo-checkbox-input:checked + .holo-checkbox .cube-face:nth-child(2) {
    transform: rotateY(180deg) translateZ(15px);
  }

  .holo-checkbox-input:checked + .holo-checkbox .cube-face:nth-child(3) {
    transform: rotateY(90deg) translateZ(15px);
  }

  .holo-checkbox-input:checked + .holo-checkbox .cube-face:nth-child(4) {
    transform: rotateY(-90deg) translateZ(15px);
  }

  .holo-checkbox-input:checked + .holo-checkbox .cube-face:nth-child(5) {
    transform: rotateX(90deg) translateZ(15px);
  }

  .holo-checkbox-input:checked + .holo-checkbox .cube-face:nth-child(6) {
    transform: rotateX(-90deg) translateZ(15px);
  }

  @keyframes cube-rotate {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

  .frequency-spectrum {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 60px;
    width: 320px;
    margin-top: 40px;
    gap: 4px;
  }

  .frequency-bar {
    width: 6px;
    height: 8px;
    background: rgba(0, 162, 255, 0.5);
    border-radius: 3px 3px 0 0;
    transition: height 0.3s ease, background 0.3s ease;
  }

  .holo-checkbox-input:checked ~ .frequency-spectrum .frequency-bar {
    background: #7b61ff84;
    animation: frequency-animation 1.5s infinite ease;
  }

  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(1) {
    animation-delay: 0.1s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(2) {
    animation-delay: 0.2s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(3) {
    animation-delay: 0.1s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(4) {
    animation-delay: 0.3s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(5) {
    animation-delay: 0.5s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(6) {
    animation-delay: 0.2s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(7) {
    animation-delay: 0.4s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(8) {
    animation-delay: 0.1s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(9) {
    animation-delay: 0.3s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(10) {
    animation-delay: 0.2s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(11) {
    animation-delay: 0.5s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(12) {
    animation-delay: 0.3s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(13) {
    animation-delay: 0.1s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(14) {
    animation-delay: 0.4s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(15) {
    animation-delay: 0.2s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(16) {
    animation-delay: 0.3s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(17) {
    animation-delay: 0.1s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(18) {
    animation-delay: 0.5s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(19) {
    animation-delay: 0.2s;
  }
  .holo-checkbox-input:checked
    ~ .frequency-spectrum
    .frequency-bar:nth-child(20) {
    animation-delay: 0.4s;
  }

  @keyframes frequency-animation {
    0% {
      height: 8px;
    }
    50% {
      height: 50px;
    }
    100% {
      height: 8px;
    }
  }

  .holo-label {
    position: absolute;
    bottom: -60px;
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 162, 255, 0.8);
    letter-spacing: 1px;
    text-shadow: 0 0 5px rgba(0, 162, 255, 0.5);
    transition: all 0.3s ease;
  }

  .holo-checkbox-input:checked ~ .holo-label {
    color: #7b61ffc9;
    text-shadow: 0 0 5px #7b61ff86;
  }

  .data-chips {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: white;
  }

  .data-chip {
    position: absolute;
    padding: 8px 14px;
    background-color: rgba(0, 24, 55, 0.7);
    border: 2px solid rgba(0, 162, 255, 0.5);
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
  }

  .holo-checkbox-input:checked ~ .data-chips .data-chip {
    animation: chip-appear 0.5s ease forwards;
    border-color: #7b61ff;
  }

  @keyframes chip-appear {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .data-chip:nth-child(1) {
    bottom: 210px;
    left: 60px;
    animation-delay: 0.5s;
  }

  .data-chip:nth-child(2) {
    bottom: 275px;
    left: 5px;
    animation-delay: 0.8s;
  }

  .data-chip:nth-child(3) {
    top: 20px;
    left: 70px;
    animation-delay: 1.1s;
  }

  .data-chip:nth-child(4) {
    top: auto;
    left: 200px;
    animation-delay: 1.4s;
  }

  .data-chip:nth-child(5) {
    top: 20px;
    right: 70px;
    animation-delay: 1.7s;
  }

  .data-chip:nth-child(6) {
    bottom: 275px;
    right: 5px;
    animation-delay: 2s;
  }

  .data-chip:nth-child(7) {
    bottom: 210px;
    right: 60px;
    animation-delay: 2.3s;
  }

  /* Responsive design */

  @media (min-height: 800px) {
    .section4-container {
      height: 90vh;
    }
  }

  @media (max-height: 799px) {
    .section4-container {
      height: 120vh;
    }
  }

  @media (max-width: 900px) {
    .section4-container {
      align-items: flex-start;
    }
    .section4-content {
      transform: scale(1.2);
      height: 500px;
    }

    .checkbox-container {
      transform: scale(1);
      width: 450px;
      height: 350px;
    }
    .data-chips {
      top: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .data-chip {
      position: static;
    }
  }

  @media (max-width: 800px) {
    .section4-content {
      transform: scale(1);
    }

    .checkbox-container {
      transform: scale(0.9);
      width: 380px;
      height: 300px;
    }

    .frequency-spectrum {
      width: 280px;
    }

    .status-text {
      font-size: 16px;
      min-width: 250px;
    }
  }
</style>

<template>
  <section class="section4-container">
    <div class="section4-content">
      <div class="nebula"></div>
      <div class="grid-plane"></div>
      <div class="stars-container">
        <div class="star-layer"></div>
        <div class="star-layer"></div>
        <div class="star-layer"></div>
      </div>
      <div class="checkbox-container">
        <input
          class="holo-checkbox-input"
          id="holo-check"
          type="checkbox" />
        <label
          class="holo-checkbox"
          for="holo-check">
          <div class="holo-box">
            <div class="holo-inner"></div>
            <div class="scan-effect"></div>
            <div class="holo-particles">
              <div class="holo-particle"></div>
              <div class="holo-particle"></div>
              <div class="holo-particle"></div>
              <div class="holo-particle"></div>
              <div class="holo-particle"></div>
              <div class="holo-particle"></div>
            </div>

            <div class="activation-rings">
              <div class="activation-ring"></div>
              <div class="activation-ring"></div>
              <div class="activation-ring"></div>
            </div>

            <div class="cube-transform">
              <div class="cube-face"></div>
              <div class="cube-face"></div>
              <div class="cube-face"></div>
              <div class="cube-face"></div>
              <div class="cube-face"></div>
              <div class="cube-face"></div>
            </div>
          </div>

          <div class="corner-accent"></div>
          <div class="corner-accent"></div>
          <div class="corner-accent"></div>
          <div class="corner-accent"></div>

          <div class="holo-glow"></div>
        </label>

        <div class="status-text"></div>

        <div class="frequency-spectrum">
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
          <div class="frequency-bar"></div>
        </div>

        <div class="data-chips">
          <div class="data-chip">Web3</div>
          <div class="data-chip">Future 125x</div>
          <div class="data-chip">Spot</div>
          <div class="data-chip">Blockchain</div>
          <div class="data-chip">Crypto</div>
          <div class="data-chip">Tokens</div>
          <div class="data-chip">CEX</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
