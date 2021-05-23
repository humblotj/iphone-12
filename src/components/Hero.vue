<template>
  <section class="hero">
    <div class="hero-header">
      <div class="container">
        <div class="hero-headline">
          <h1 class="hero-heading-eyebrow">
            iPhone 12 Pro
          </h1>
          <h2 class="hero-heading">
            It&#x27;s a leap year.
          </h2>
          <div class="ix-shadow" />
        </div>
        <div class="hero-video-wrap">
          <img src="@/assets/hero_endframe__e24jfrox7nu6_large_2x.jpg" loading="lazy"
               sizes="(max-width: 991px) 100vw, 1352px"
               alt="" class="hero-img"
          >
          <!-- srcset="@/assets/hero_endframe__e24jfrox7nu6_large_2x-p-500.jpeg 500w, @/assets/hero_endframe__e24jfrox7nu6_large_2x-p-800.jpeg 800w, @/assets/hero_endframe__e24jfrox7nu6_large_2x.jpg 2704w" -->
          <img src="@/assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x.jpg" loading="lazy" width="1020" sizes="100vw"
               alt="" class="hero-img-medium"
          >
          <!-- srcset="@/assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-500.jpeg 500w, @/assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-800.jpeg 800w, @/assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-1080.jpeg 1080w, @/assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-1600.jpeg 1600w, @/assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x-p-2000.jpeg 2000w, @/assets/hero_endframe_portrait__k4dfs3u1zwi2_medium_2x.jpg 2040w" -->
          <div data-poster-url="@/assets/hero%20video-poster-00001.jpg" data-video-urls="@/assets/hero-video-transcode.mp4,@/assets/hero-video-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="hero-video w-background-video w-background-video-atom">
            <video autoplay style="background-image:url(&quot;@/assets/hero%20video-poster-00001.jpg&quot;)" muted playsinline data-wf-ignore="true" data-object-fit="cover">
              <source src="@/assets/hero-video-transcode.mp4" data-wf-ignore="true">
              <source src="@/assets/hero-video-transcode.webm" data-wf-ignore="true">
            </video>
          </div>
          <div data-poster-url="@/assets/hero%20medium-poster-00001.jpg" data-video-urls="@/assets/hero-medium-transcode.mp4,@/assets/hero-medium-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="hero-video-medium w-background-video w-background-video-atom">
            <video autoplay style="background-image:url(&quot;@/assets/hero%20medium-poster-00001.jpg&quot;)" muted playsinline data-wf-ignore="true" data-object-fit="cover">
              <source src="@/assets/hero-medium-transcode.mp4" data-wf-ignore="true">
              <source src="@/assets/hero-medium-transcode.webm" data-wf-ignore="true">
            </video>
          </div>
          <div data-poster-url="@/assets/hero%20small-poster-00001.jpg" data-video-urls="@/assets/hero%20small-transcode.mp4,@/assets/hero-small-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="hero-video-small w-background-video w-background-video-atom">
            <video autoplay style="background-image:url(&quot;@/assets/hero%20small-poster-00001.jpg&quot;)" muted playsinline data-wf-ignore="true" data-object-fit="cover">
              <source src="@/assets/hero-small-transcode.mp4" data-wf-ignore="true">
              <source src="@/assets/hero-small-transcode.webm" data-wf-ignore="true">
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="container container--hero-copy">
      <p class="intro-paragraph">
        5G goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.
      </p>
      <p class="intro-paragraph intro-paragraph--small">
        iPhone 12 Pro available 10.23 | Pre-order iPhone 12 Pro Max 11.6<br>
      </p>
      <p class="intro-paragraph intro-paragraph--small">
        From $41.62/mo. or $999 before trade‑in<br>
      </p>
    </div>
  </section>
</template>
<script>

export default {

};
</script>

<style scoped>
.hero {
  padding-bottom: 25vh;
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
