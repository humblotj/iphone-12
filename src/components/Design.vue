<template>
  <section class="design">
    <div class="design-bezel">
      <div class="container container--center">
        <div class="sub-section-headline-wrap">
          <div class="ix-shadow" />
          <h3 class="sub-section-headline">
            Less bezel, more screen.
          </h3>
        </div>
        <img src="@/assets/design_less_bezel_static__deihs6pgwrcm_large_2x.jpg" loading="lazy" width="770" alt="" class="design-bezel-img">
      </div>
    </div>
    <div class="design-display">
      <div class="container">
        <div data-poster-url="@/assets/display video-poster-00001.jpg" data-video-urls="@/assets/display-video-transcode.mp4,@/assets/display-video-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="video display-video w-background-video w-background-video-atom">
          <video autoplay="" loop="" style="background-image:url(&quot;@/assets/display video-poster-00001.jpg&quot;)" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
            <source src="@/assets/display-video-transcode.mp4" data-wf-ignore="true">
            <source src="@/assets/display-video-transcode.webm" data-wf-ignore="true">
          </video>
        </div>
        <div class="design-display-compare-wrap">
          <div class="design-display-caption design-display-caption--left">
            <div>iPhone 12 Pro Max</div>
            <div class="design-display-caption-secondary">
              6.7” Super Retina<br>XDR display
            </div>
          </div>
          <div class="design-display-caption">
            <div>iPhone 12 Pro</div>
            <div class="design-display-caption-secondary">
              6.1” Super Retina<br>XDR display
            </div>
          </div>
        </div>
      </div>
      <div class="container container--center">
        <FakeLink :class-name="'learn-more-button w-button'">
          Compare sizes to iPhone 11 Pro
        </FakeLink>
      </div>
    </div>
    <div class="design-glass">
      <div class="container container--center-flex">
        <div class="sub-section-headline-wrap">
          <h3 class="sub-section-headline">
            Kicks glass.
          </h3>
          <div class="ix-shadow" />
        </div>
        <img src="@/assets/design_tougher_glass__czlsbgxawrki_large_2x.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 655px, 980px"
             alt="" class="glass-img"
        >
        <!--srcset="@/assets/design_tougher_glass__czlsbgxawrki_large_2x-p-500.jpeg 500w, @/assets/design_tougher_glass__czlsbgxawrki_large_2x-p-800.jpeg 800w, @/assets/design_tougher_glass__czlsbgxawrki_large_2x.jpg 2608w"-->
        <img src="@/assets/design_tougher_glass__czlsbgxawrki_small_2x.jpg" loading="lazy" sizes="(max-width: 767px) 433px, 100vw"
             alt="" class="glass-img-mobile"
        >
        <!--srcset="@/assets/design_tougher_glass__czlsbgxawrki_small_2x-p-500.jpeg 500w, @/assets/design_tougher_glass__czlsbgxawrki_small_2x-p-800.jpeg 800w, @/assets/design_tougher_glass__czlsbgxawrki_small_2x.jpg 866w"-->
        <div class="design-glass-subheading-wrap">
          <p class="design-glass-subheading">
            Ceramic Shield, tougher than any smartphone glass
          </p>
          <div class="ix-shadow" />
        </div>
        <FakeLink :class-name="'learn-more-button learn-more-button--blue w-button'">
          Find out how
        </FakeLink>
      </div>
    </div>
    <div class="design-steel">
      <div class="container">
        <div data-animation-type="lottie" data-src="documents/steel.json" data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="canvas" data-default-duration="2.1354687151560467" data-duration="0" data-preserve-aspect-ratio="none" class="steel-anim" />
        <div class="design-steel-text-wrap design-steel-text-wrap--left">
          <h3 class="design-steel-text">
            Surgical-grade
          </h3>
          <div class="ix-shadow ix-shadow--vertical" />
        </div>
        <div class="design-steel-text-wrap design-steel-text-wrap--right">
          <h3 class="design-steel-text">
            stainless steel.
          </h3>
          <div class="ix-shadow ix-shadow--vertical" />
        </div>
      </div>
    </div>
    <div class="design-water">
      <div class="container">
        <img src="@/assets/design_water_resistance__bx3cq2uzbzw2_large_2x.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 596px, (max-width: 991px) 662px, 980px" srcset="images/design_water_resistance__bx3cq2uzbzw2_large_2x-p-500.jpeg 500w, images/design_water_resistance__bx3cq2uzbzw2_large_2x-p-800.jpeg 800w, images/design_water_resistance__bx3cq2uzbzw2_large_2x-p-1080.jpeg 1080w, images/design_water_resistance__bx3cq2uzbzw2_large_2x-p-1600.jpeg 1600w, images/design_water_resistance__bx3cq2uzbzw2_large_2x-p-2000.jpeg 2000w, images/design_water_resistance__bx3cq2uzbzw2_large_2x.jpg 2016w" alt="" class="water-img">
        <div class="design-water-text-wrap">
          <h3 class="sub-section-headline">
            Blows other phones out of the water.
          </h3>
          <div class="sub-section-subheading sub-section-subheading--water">
            Industry‑leading IP68 water resistance
          </div>
        </div>
      </div>
    </div>
    <div class="design-finishes">
      <div class="container">
        <div data-poster-url="@/assets/finishes-poster-00001.jpg" data-video-urls="@/assets/finishes-transcode.mp4,@/assets/finishes-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="video video--finishes w-background-video w-background-video-atom">
          <video autoplay="" loop="" style="background-image:url(&quot;@/assets/finishes-poster-00001.jpg&quot;)" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
            <source src="@/assets/finishes-transcode.mp4" data-wf-ignore="true">
            <source src="@/assets/finishes-transcode.webm" data-wf-ignore="true">
          </video>
        </div>
      </div>
      <div class="container container--center">
        <div class="design-finishes-text-wrap">
          <h3 class="sub-section-headline">
            Four finishing touches.
          </h3>
          <div class="sub-section-subheading">
            Pacific Blue, Gold, Silver, and Graphite
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import FakeLink from './FakeLink.vue';

export default {
  name: 'Design',
  components: {
    FakeLink,
  },
};
</script>

<style scoped>
.design {
  overflow: hidden;
}

.design-bezel {
  padding-top: 180px;
}

.design-bezel-img {
  margin-top: 62px;
  box-shadow: 0 -20px 30px 0 #000;
}

.design-display {
  padding-bottom: 150px;
}

.display-video {
  width: 320px;
  height: 628px;
}

.video.display-video {
  margin-right: auto;
  margin-left: auto;
}

.video.video--finishes {
  left: 50%;
  width: 1108px;
  height: 950px;
  transform: translate(-50%, 0px);
}

.design-display-compare-wrap {
  position: absolute;
  bottom: 250px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.design-display-caption {
  line-height: 1.24;
  font-weight: 600;
  text-align: left;
  letter-spacing: -0.22px;
}

.design-display-caption.design-display-caption--left {
  text-align: right;
}

.design-display-caption-secondary {
  color: #a1a1a6;
}

.design-glass {
  margin-top: 150px;
}

.glass-img {
  position: relative;
  margin-top: 45px;
  margin-bottom: 45px;
}

.design-glass-subheading-wrap {
  position: relative;
  margin-top: 26px;
}

.design-glass-subheading {
  width: 45%;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  background-image: -webkit-gradient(linear, left top, right top, from(#005e7f), to(#61b6cd));
  background-image: linear-gradient(90deg, #005e7f, #61b6cd);
  font-size: 32px;
  line-height: 1.12;
  font-weight: 600;
  background-clip: text;
}

.design-steel {
  margin-top: 225px;
}

.steel-anim {
  width: 176px;
  height: 1400px;
  margin-right: auto;
  margin-left: auto;
}

.learn-more-button {
  margin-top: 64px;
  padding: 8px 16px;
  border: 1px solid #f5f5f7;
  border-radius: 50px;
  background-color: transparent;
  transition: color 350ms ease-in-out, background-color 350ms ease-in-out;
  line-height: 1.17064;
}

.learn-more-button:hover {
  background-color: #fff;
  color: #000;
}

.learn-more-button.learn-more-button--blue {
  align-self: center;
  border-color: #61b6cd;
}

.design-steel-text {
  margin: 0px;
  font-size: 56px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.005em;
}

.design-steel-text-wrap {
  position: relative;
}

.design-steel-text-wrap.design-steel-text-wrap--left {
  position: absolute;
  left: 216px;
  top: 0px;
}

.design-steel-text-wrap.design-steel-text-wrap--right {
  position: absolute;
  right: 216px;
  bottom: 245px;
}

.design-water {
  padding-bottom: 150px;
}

.water-img {
  position: relative;
  left: 120px;
}

.design-water-text-wrap {
  position: relative;
  top: -363px;
  padding-right: 68%;
}

.design-finishes {
  margin-top: 20px;
  padding-bottom: 80px;
}

.design-finishes-text-wrap {
  margin-top: 55px;
}

.glass-img-mobile {
  display: none;
}

.sub-section-subheading.sub-section-subheading--water {
  padding-right: 86px;
}

@media screen and (max-width: 991px) {
  .design-bezel {
    padding-top: 140px;
  }

    .design-bezel-img {
    width: 590px;
  }

  .video.display-video {
    width: 288px;
    height: 566px;
  }

  .video.video--finishes {
    width: 706px;
    height: 606px;
  }

  .glass-img {
    width: 655px;
  }

  .design-glass-subheading {
    width: 50%;
    font-size: 26px;
  }

  .steel-anim {
    width: 120px;
    height: 1016px;
  }

  .design-steel-text {
    font-size: 40px;
    letter-spacing: 0em;
  }

  .design-steel-text-wrap.design-steel-text-wrap--left {
    left: 122px;
  }

  .design-steel-text-wrap.design-steel-text-wrap--right {
    right: 122px;
    bottom: 250px;
  }

  .water-img {
    left: 32px;
    width: 662px;
  }

  .design-water-text-wrap {
    top: -217px;
    padding-right: 50%;
  }

  .sub-section-subheading.sub-section-subheading--water {
    padding-right: 124px;
    font-size: 19px;
  }
}

@media screen and (max-width: 767px) {
  .design-bezel {
    padding-top: 65px;
  }

  .design-bezel-img {
    width: 562px;
    max-width: none;
  }

  .video.display-video {
    width: 236px;
    height: 466px;
  }

  .design-display-compare-wrap {
    position: static;
    padding-top: 28px;
    justify-content: space-around;
  }

  .design-display-caption {
    font-size: 14px;
  }

  .design-display-caption.design-display-caption--left {
    text-align: left;
  }

  .glass-img {
    display: none;
  }

  .design-glass-subheading-wrap {
    margin-top: 19px;
    text-align: left;
  }

  .design-glass-subheading {
    width: 60%;
    margin-left: 0px;
    font-size: 28px;
  }

  .steel-anim {
    width: 96px;
    height: 816px;
  }

  .learn-more-button.learn-more-button--blue {
    margin-top: 44px;
    align-self: flex-start;
  }

  .design-steel-text {
    font-size: 32px;
  }

  .design-steel-text-wrap.design-steel-text-wrap--left {
    left: 55px;
  }

  .design-steel-text-wrap.design-steel-text-wrap--right {
    right: 55px;
  }

  .water-img {
    left: -86px;
    width: 596px;
    max-width: none;
  }

  .design-water-text-wrap {
    top: -204px;
    padding-right: 39%;
  }

  .glass-img-mobile {
    display: block;
    width: 433px;
    height: 683px;
    max-width: none;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
  }
}

@media screen and (max-width: 479px) {
  .design-bezel-img {
    width: 562px;
    max-width: none;
  }

  .design-water-text-wrap {
    padding-right: 21%;
  }
  .sub-section-subheading.sub-section-subheading--water {
    font-size: 17px;
  }

  .design-finishes-text-wrap {
    text-align: left;
  }
}

</style>
