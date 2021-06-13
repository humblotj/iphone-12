<template>
  <div ref="designBezel" class="design-bezel">
    <div class="container container--center">
      <div class="sub-section-headline-wrap">
        <div class="ix-shadow" />
        <h3 class="sub-section-headline">
          Less bezel, more screen.
        </h3>
      </div>
      <img src="@/assets/design_less_bezel_static__deihs6pgwrcm_large_2x.jpg" loading="lazy" width="1540" height="1430" alt="" class="design-bezel-img" @load="handleLoad">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import useAnimation from '../../hooks/useAnimation';

export default {
  setup() {
    const designBezel = ref(null);
    const { animateFromTo } = useAnimation(designBezel);

    return {
      designBezel, animateFromTo,
    };
  },
  mounted() {
    this.animateFromTo('.ix-shadow', { x: '-50%' }, { x: '50%' }, 20, 35);
    this.animateFromTo('.design-bezel-img', { y: '10%' }, { y: '-10%' }, 20, 50);
  },
};
</script>

<style>
</style>
