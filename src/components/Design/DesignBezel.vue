<template>
  <div ref="designBezel" class="design-bezel">
    <div class="container container--center">
      <div class="sub-section-headline-wrap">
        <div class="ix-shadow" />
        <h3 class="sub-section-headline">Less bezel, more screen.</h3>
      </div>
      <img
        src="@/assets/design_less_bezel_static__deihs6pgwrcm_large_2x.jpg"
        loading="lazy"
        width="770"
        height="715"
        alt=""
        class="design-bezel-img"
        @load="handleLoad"
      />
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
      designBezel,
      animateFromTo,
    };
  },
  mounted() {
    this.animateFromTo('.ix-shadow', { from: { x: '-50%' }, to: { x: '50%' }, start: 20, end: 35 });
    this.animateFromTo('.design-bezel-img', {
      from: { y: '10%' },
      to: { y: '-10%' },
      start: 20,
      end: 50,
    });
  },
};
</script>

<style>
</style>
