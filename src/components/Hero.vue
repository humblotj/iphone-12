<template>
  <section ref="hero" class="hero">
    <div class="hero-header">
      <div class="container">
        <div class="hero-headline">
          <h1 class="hero-heading-eyebrow">iPhone 12 Pro</h1>
          <h2 class="hero-heading">It&#x27;s a leap year.</h2>
          <div class="ix-shadow" />
        </div>
        <div class="hero-video-wrap">
          <img
            src="@/assets/hero_endframe__e24jfrox7nu6_large_2x.jpg"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, 1352px"
            alt=""
            class="hero-img"
            :srcset="heroEndFrameSrcSet"
          />
          <img
            src="@/assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x.jpg"
            loading="lazy"
            width="1020"
            sizes="100vw"
            alt=""
            class="hero-img-medium"
            :srcset="heroEndFramePortraitSrcSet"
          />
          <div
            data-poster-url="@/assets/hero%20video-poster-00001.jpg"
            data-video-urls="@/assets/hero-video-transcode.mp4,@/assets/hero-video-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            class="hero-video w-background-video w-background-video-atom"
          >
            <video
              autoplay
              style="background-image: url('@/assets/hero%20video-poster-00001.jpg')"
              muted
              playsinline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src="@/assets/hero-video-transcode.mp4" data-wf-ignore="true" />
              <source src="@/assets/hero-video-transcode.webm" data-wf-ignore="true" />
            </video>
          </div>
          <div
            data-poster-url="@/assets/hero%20medium-poster-00001.jpg"
            data-video-urls="@/assets/hero-medium-transcode.mp4,@/assets/hero-medium-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            class="hero-video-medium w-background-video w-background-video-atom"
          >
            <video
              autoplay
              style="background-image: url('@/assets/hero%20medium-poster-00001.jpg')"
              muted
              playsinline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src="@/assets/hero-medium-transcode.mp4" data-wf-ignore="true" />
              <source src="@/assets/hero-medium-transcode.webm" data-wf-ignore="true" />
            </video>
          </div>
          <div
            data-poster-url="@/assets/hero%20small-poster-00001.jpg"
            data-video-urls="@/assets/hero%20small-transcode.mp4,@/assets/hero-small-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            class="hero-video-small w-background-video w-background-video-atom"
          >
            <video
              autoplay
              style="background-image: url('@/assets/hero%20small-poster-00001.jpg')"
              muted
              playsinline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src="@/assets/hero-small-transcode.mp4" data-wf-ignore="true" />
              <source src="@/assets/hero-small-transcode.webm" data-wf-ignore="true" />
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="container container--hero-copy">
      <p class="intro-paragraph">
        5G goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system
        takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro
        Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this
        thing can do.
      </p>
      <p class="intro-paragraph intro-paragraph--small">
        iPhone 12 Pro available 10.23 | Pre-order iPhone 12 Pro Max 11.6<br />
      </p>
      <p class="intro-paragraph intro-paragraph--small">
        From $41.62/mo. or $999 before trade‑in<br />
      </p>
    </div>
  </section>
</template>
<script>
import { ref } from 'vue';
import { gsap } from 'gsap';
import useAnimation from '../hooks/useAnimation';
import heroEndframe500 from '../assets/hero_endframe__e24jfrox7nu6_large_2x-p-500.jpeg';
import heroEndframe800 from '../assets/hero_endframe__e24jfrox7nu6_large_2x-p-800.jpeg';
import heroEndframe2074 from '../assets/hero_endframe__e24jfrox7nu6_large_2x.jpg';
import heroEndframePortrait500 from '../assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-500.jpeg';
import heroEndframePortrait800 from '../assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-800.jpeg';
import heroEndframePortrait1080 from '../assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-1080.jpeg';
import heroEndframePortrait1600 from '../assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-1600.jpeg';
import heroEndframePortrait2000 from '../assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-2000.jpeg';
import heroEndframePortrait2040 from '../assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x.jpg';

export default {
  setup() {
    const hero = ref(null);
    const { animateFromTo, animateTo } = useAnimation(hero, false);

    return {
      hero,
      animateFromTo,
      animateTo,
    };
  },
  data() {
    return {
      heroEndFrameSrcSet: `${heroEndframe500} 500w, ${heroEndframe800} 800w, ${heroEndframe2074} 2704w`,
      heroEndFramePortraitSrcSet: `${heroEndframePortrait500} 500w, ${heroEndframePortrait800} 800w, ${heroEndframePortrait1080} 1080w, ${heroEndframePortrait1600} 1600w, ${heroEndframePortrait2000} 2000w, ${heroEndframePortrait2040} 2040w`,
    };
  },
  mounted() {
    gsap.fromTo(
      this.$refs.hero.querySelector('.ix-shadow'),
      { x: '-50%' },
      {
        x: '55%',
        duration: 1.5,
        delay: 3.5,
      },
    );
    gsap.to(this.$refs.hero.querySelectorAll('.hero-video, .hero-video-medium'), {
      opacity: 0,
      duration: 0.25,
      delay: 5.5,
    });

    gsap.to(this.$refs.hero.querySelectorAll('.hero-video-wrap img'), {
      opacity: 1,
      duration: 0,
      delay: 5.5,
    });

    this.opacity('.container', 0, 40, 1);
    this.opacity('.container', 0, 40, 1);
    this.move('.hero-video-wrap', 0, 40);
    this.opacity('.hero-headline', 0, 12, 0);
  },
  methods: {
    move(className, start, end, immediateRender = true) {
      this.animateFromTo(className, { y: 0 }, { y: '-20vh' }, start, end, immediateRender);
    },
    opacity(className, start, end, to, immediateRender = true) {
      this.animateTo(className, { opacity: to }, start, end, immediateRender);
    },
  },
};
</script>

<style scoped>
.hero {
  padding-bottom: 25vh;
}

.container.container--hero-copy {
  opacity: 0;
  position: relative;
  margin-top: -70px;
}
.hero-header {
  overflow: hidden;
}

.hero-headline {
  position: relative;
  z-index: 2;
  margin-top: 72px;
  color: #f5f5f7;
  text-align: center;
}

.hero-heading-eyebrow {
  margin-top: 0px;
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0px;
}

.hero-heading {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 80px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.015em;
}

.hero-video-wrap {
  position: relative;
  left: 24px;
  top: -27px;
  z-index: -1;
  width: 1352px;
}

.hero-video-wrap img {
  opacity: 0;
}

.hero-video {
  position: absolute;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.intro-paragraph {
  width: 68%;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  color: #a1a1a6;
  font-size: 24px;
  line-height: 1.16667;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.009em;
}

.intro-paragraph.intro-paragraph--small {
  margin-top: 50px;
  font-size: 21px;
  font-weight: 600;
}

.hero-img-medium {
  display: none;
}

.hero-video-medium {
  display: none;
}

.hero-video-small {
  display: none;
}

@media screen and (max-width: 991px) {
  .hero-headline {
    margin-top: 82px;
  }

  .hero-heading {
    font-size: 56px;
  }

  .hero-video-wrap {
    left: -156px;
    top: -62px;
    width: 1020px;
  }

  .hero-img {
    display: none;
  }

  .hero-video {
    display: none;
  }

  .intro-paragraph {
    width: 70%;
    font-size: 21px;
  }

  .intro-paragraph.intro-paragraph--small {
    width: 100%;
    margin-top: 36px;
    font-size: 17px;
  }

  .hero-img-medium {
    display: block;
  }

  .hero-video-medium {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 767px) {
  .hero-headline {
    margin-top: 40px;
    margin-bottom: 12px;
  }

  .hero-video-wrap {
    left: -16.45vw;
    top: -20px;
    display: flex;
    width: 120vw;
    height: 560px;
    justify-content: center;
  }

  .intro-paragraph {
    width: 100%;
    text-align: left;
  }

  .hero-img-medium {
    display: none;
  }

  .hero-video-medium {
    display: none;
  }

  .hero-video-small {
    position: absolute;
    left: 0px;
    top: 0%;
    right: 0px;
    bottom: auto;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    object-fit: contain;
  }
}
</style>
