<template>
  <section class="design">
    <DesignBezel />
    <DesignDisplay />
    <DesignGlass />
    <DesignSteel />
    <DesignWater />
    <DesignFinishes />
  </section>
</template>
<script>
import DesignBezel from './Design/DesignBezel.vue';
import DesignDisplay from './Design/DesignDisplay.vue';
import DesignGlass from './Design/DesignGlass.vue';
import DesignSteel from './Design/DesignSteel.vue';
import DesignWater from './Design/DesignWater.vue';
import DesignFinishes from './Design/DesignFinishes.vue';

export default {
  name: 'Design',
  components: {
    DesignBezel,
    DesignDisplay,
    DesignGlass,
    DesignSteel,
    DesignWater,
    DesignFinishes,
  },
};
</script>

<style>
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

.design .display-video {
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
  -webkit-text-fill-color: transparent;
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

.design .learn-more-button {
  margin-top: 64px;
  padding: 8px 16px;
  border: 1px solid #f5f5f7;
  border-radius: 50px;
  background-color: transparent;
  transition: color 350ms ease-in-out, background-color 350ms ease-in-out;
  line-height: 1.17064;
}

.design .learn-more-button:hover {
  background-color: #fff;
  color: #000;
}

.design .learn-more-button.learn-more-button--blue {
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
  writing-mode: vertical-lr;
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
    opacity: 0;
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
