<script lang="ts" setup>
import { section1 } from '../../../helper_files/images';
import videos from '../../../helper_files/videos';
import { ref } from 'vue';

// Video control state
const isPlaying = ref(false);
const videoRef = ref<HTMLVideoElement>();

// Toggle video play/pause
const toggleVideo = () => {
  if (videoRef.value) {
    if (isPlaying.value) {
      videoRef.value.pause();
    } else {
      videoRef.value.play();
    }
    isPlaying.value = !isPlaying.value;
  }
};

// Handle video events
const onVideoPlay = () => {
  isPlaying.value = true;
};

const onVideoPause = () => {
  isPlaying.value = false;
};
</script>

<template>
  <section class="hero-section">
    <!-- Hero Content -->
    <div class="hero-container">
      <!-- Left side: Text content -->
      <div class="hero-text">
        <div class="brand-logo">
          <img :src="section1.s1_1max_logo" alt="OneMax Logo" class="logo" />
        </div>
        
        <h1 class="hero-title">
          Buy & Trade <br />
          <span class="highlight">Digital Assets</span> <br />
          with Command
        </h1>
        
        <p class="hero-subtitle">
          Experience seamless cryptocurrency trading with our advanced platform. 
          Store, analyze, and trade digital assets with confidence.
        </p>
        
        <div class="hero-actions">
          <button class="cta-button primary">
            <img :src="section1.s1_icon_wallet" alt="Wallet" class="button-icon" />
            Get Started
          </button>
          
          <button class="cta-button secondary" @click="toggleVideo">
            {{ isPlaying ? '⏸️' : '▶️' }} Watch Demo
          </button>
        </div>
        
        <!-- Social Links -->
        <div class="social-links">
          <a href="#" class="social-link">
            <img :src="section1.s1_linkedin" alt="LinkedIn" />
          </a>
          <a href="#" class="social-link">
            <img :src="section1.s1_telegram" alt="Telegram" />
          </a>
          <a href="#" class="social-link">
            <img :src="section1.s1_x_twitter" alt="Twitter" />
          </a>
        </div>
      </div>
      
      <!-- Right side: Video/Image content -->
      <div class="hero-media">
        <!-- Video Container -->
        <div class="video-container">
          <video
            ref="videoRef"
            class="hero-video"
            :poster="section1.s1_banner_image"
            @play="onVideoPlay"
            @pause="onVideoPause"
            @ended="onVideoPause"
            controls
            muted
            loop
          >
            <!-- Use section 6 video as demo, or add a section 1 video to videos.ts -->
            <source :src="videos.section6.s6_video" type="video/mp4" />
            <p>Your browser doesn't support HTML video.</p>
          </video>
          
          <!-- Video overlay controls -->
          <div class="video-overlay" v-if="!isPlaying" @click="toggleVideo">
            <div class="play-button">
              <span class="play-icon">▶️</span>
            </div>
          </div>
        </div>
        
        <!-- Fallback image when video is not playing -->
        <div class="hero-image" v-show="false">
          <img :src="section1.s1_banner_image" alt="OneMax Trading App" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

/* Text Content */
.hero-text {
  text-align: center;
}

.brand-logo {
  margin-bottom: 2rem;
}

.logo {
  height: 60px;
  width: auto;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #b8b8b8;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 150px;
  justify-content: center;
}

.cta-button.primary {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid #667eea;
}

.cta-button.secondary:hover {
  background: #667eea;
  transform: translateY(-2px);
}

.button-icon {
  width: 20px;
  height: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(102, 126, 234, 0.3);
  transform: translateY(-2px);
}

.social-link img {
  width: 20px;
  height: 20px;
}

/* Video/Media Content */
.hero-media {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.hero-video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.video-overlay:hover {
  background: rgba(0, 0, 0, 0.6);
}

.play-button {
  width: 80px;
  height: 80px;
  background: rgba(102, 126, 234, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
  background: rgba(102, 126, 234, 1);
}

.play-icon {
  font-size: 2rem;
  margin-left: 4px; /* Optical alignment for play icon */
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Tablet and Desktop */
@media (min-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  
  .hero-text {
    text-align: left;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    margin-left: 0;
    margin-right: 0;
  }
  
  .hero-actions {
    justify-content: flex-start;
  }
  
  .social-links {
    justify-content: flex-start;
  }
  
  .video-container {
    max-width: 500px;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .video-container {
    max-width: 600px;
  }
}

/* Mobile specific adjustments */
@media (max-width: 767px) {
  .hero-section {
    padding: 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .cta-button {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
    min-width: 140px;
  }
  
  .video-container {
    max-width: 350px;
  }
}
</style>