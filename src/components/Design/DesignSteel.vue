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
    const { loadAnimation, lottieScroll, animateTo, animateFromTo } = useAnimation(designSteel);

    return {
      designSteel,
      loadAnimation,
      lottieScroll,
      animateTo,
      animateFromTo,
    };
  },
  mounted() {
    const stealAnimation = this.loadAnimation('.steel-anim', steel);
    this.lottieScroll(stealAnimation, { start: 20, end: 60, to: 100 });
    this.animateFromTo(
      '.design-steel-text-wrap--left .ix-shadow',
      { y: '-50%' },
      { y: '50%' },
      20,
      35,
    );
    this.animateFromTo('.design-steel-text-wrap--left', { y: 0 }, { y: '100%' }, 20, 60);
    this.animateFromTo('.design-steel-text-wrap--right', { y: '10%' }, { y: '-100%' }, 20, 60);
    this.animateFromTo(
      '.design-steel-text-wrap--right .ix-shadow',
      { y: '-50%' },
      { y: '50%' },
      35,
      50,
    );
    this.animateTo('.design-steel-text-wrap', { opacity: 0 }, 50, 60, false);
  },
};
</script>

<style>

</style>
