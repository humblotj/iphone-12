<template>
  <div ref="device" class="device">
    <div class="hardware">
      <img
        src="@/assets/5g_on_phone__qxgc670fz2aa_large_2x.jpg"
        loading="lazy"
        sizes="(max-width: 767px) 321px, (max-width: 991px) 520px, 770px"
        alt=""
        :srcset="onPhoneSrcSet"
        width="1540"
        height="2672"
      />
      <div class="hardware-gradient" />
      <div class="screen">
        <img
          src="@/assets/5g_top_ui__fh2pbo18aviq_large_2x.jpg"
          loading="lazy"
          sizes="(max-width: 767px) 269px, (max-width: 991px) 439px, 650px"
          alt=""
          class="screen-ui-top"
          :srcset="topUISrcSet"
          width="1300"
          height="400"
        />
        <div class="divider" />
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { gsap } from 'gsap';
import useAnimation from '../../hooks/useAnimation';
import onPhone500 from '../../assets/5g_on_phone__qxgc670fz2aa_large_2x-p-500.jpeg';
import onPhone800 from '../../assets/5g_on_phone__qxgc670fz2aa_large_2x-p-800.jpeg';
import onPhone1080 from '../../assets/5g_on_phone__qxgc670fz2aa_large_2x-p-1080.jpeg';
import onPhone1540 from '../../assets/5g_on_phone__qxgc670fz2aa_large_2x.jpg';
import topUI500 from '../../assets/5g_top_ui__fh2pbo18aviq_large_2x-p-500.jpeg';
import topUI1300 from '../../assets/5g_top_ui__fh2pbo18aviq_large_2x.jpg';

export default {
  setup() {
    const device = ref(null);
    const { loadAnimation, lottieScroll, animateTo, animateFromTo } = useAnimation(device);

    return {
      device,
      loadAnimation,
      lottieScroll,
      animateTo,
      animateFromTo,
    };
  },
  data() {
    return {
      onPhoneSrcSet: `${onPhone500} 500w, ${onPhone800} 800w, ${onPhone1080} 1080w, ${onPhone1540} 1540w`,
      topUISrcSet: `${topUI500} 500w, ${topUI1300} 1300w`,
    };
  },
  mounted() {
    gsap.fromTo(
      document.querySelector('._5g .ix-shadow'),
      { x: '-50%' },
      {
        x: '50%',
        scrollTrigger: {
          trigger: this.device,
          scrub: true,
          start: 0,
          end: `+=${(this.device.offsetHeight + window.innerHeight) * (20 / 100)}`,
        },
      },
    );
    this.animateTo(this.device, { y: '-10%' }, 15, 50);
    this.animateFromTo('.hardware-gradient', { y: 15 }, { y: 1002 }, 15, 50);
  },
};
</script>

<style scoped>
.device {
  position: relative;
  width: 770px;
  height: 1336px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 -6px 50px 0 #000;
}

.hardware {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
}

.hardware-gradient {
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    color-stop(10%, rgba(0, 0, 0, 0.6)),
    color-stop(30%, #000)
  );
  background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6) 10%, #000 30%);
}

.screen {
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  z-index: 1;
  width: 770px;
  height: 1336px;
  padding: 80px 20px 20px;
}

.screen-ui-top {
  width: 650px;
  height: 200px;
  margin-right: auto;
  margin-left: auto;
}

.divider {
  height: 1px;
  margin-top: 26px;
  margin-right: 25px;
  margin-left: 75px;
  background-color: #424245;
}

@media screen and (max-width: 991px) {
  .device {
    width: 520px;
    height: 920px;
  }

  .screen {
    width: 520px;
    height: 920px;
    padding-top: 54px;
    padding-right: 12px;
    padding-left: 12px;
  }

  .screen-ui-top {
    width: 439px;
    height: 135px;
  }

  .divider {
    margin-left: 52px;
  }
}

@media screen and (max-width: 767px) {
  .device {
    width: 321px;
    height: 563px;
  }

  .screen {
    width: 321px;
    height: 563px;
  }

  .screen-ui-top {
    width: 269px;
    height: 82px;
  }

  .divider {
    margin-right: 9px;
    margin-left: 35px;
  }
}
</style>
