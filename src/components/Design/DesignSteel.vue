<template>
  <div ref="designSteel" class="design-steel">
    <div class="container">
      <div class="steel-anim" />
      <div class="design-steel-text-wrap design-steel-text-wrap--left">
        <h3 class="design-steel-text">Surgical-grade</h3>
        <div class="ix-shadow ix-shadow--vertical" />
      </div>
      <div class="design-steel-text-wrap design-steel-text-wrap--right">
        <h3 class="design-steel-text">stainless steel.</h3>
        <div class="ix-shadow ix-shadow--vertical" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import useAnimation from '../../hooks/useAnimation';
import steel from '../../assets/steel.json';

export default {
  setup() {
    const designSteel = ref(null);
    const { loadAnimation, animateLottie, animateOpacity, animateFromTo } =
      useAnimation(designSteel);

    return {
      designSteel,
      loadAnimation,
      animateLottie,
      animateOpacity,
      animateFromTo,
    };
  },
  mounted() {
    const stealAnimation = this.loadAnimation('.steel-anim', steel);
    this.animateLottie(stealAnimation, { start: 20, end: 60, to: 100 });
    this.animateFromTo('.design-steel-text-wrap--left .ix-shadow', {
      from: { y: '-50%' },
      to: { y: '50%' },
      start: 20,
      end: 35,
    });
    this.animateFromTo('.design-steel-text-wrap--left', {
      from: { y: 0 },
      to: { y: '100%' },
      start: 20,
      end: 60,
    });
    this.animateFromTo('.design-steel-text-wrap--right', {
      from: { y: '10%' },
      to: { y: '-100%' },
      start: 20,
      end: 60,
    });
    this.animateFromTo('.design-steel-text-wrap--right .ix-shadow', {
      from: { y: '-50%' },
      to: { y: '50%' },
      start: 35,
      end: 50,
    });
    this.animateOpacity('.design-steel-text-wrap', { to: 0, start: 50, end: 60 });
  },
};
</script>

<style>

</style>
