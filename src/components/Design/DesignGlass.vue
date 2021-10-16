<template>
  <div ref="designGlass" class="design-glass">
    <div class="container container--center-flex">
      <div class="sub-section-headline-wrap">
        <h3 class="sub-section-headline">Kicks glass.</h3>
        <div class="ix-shadow" />
      </div>
      <img
        src="@/assets/design_tougher_glass__czlsbgxawrki_large_2x.jpg"
        loading="lazy"
        sizes="(max-width: 767px) 100vw, (max-width: 991px) 655px, 980px"
        alt=""
        class="glass-img"
        :srcset="glassSrcSet"
      />
      <img
        src="@/assets/design_tougher_glass__czlsbgxawrki_small_2x.jpg"
        loading="lazy"
        sizes="(max-width: 767px) 433px, 100vw"
        alt=""
        class="glass-img-mobile"
        :srcset="glassSmallSrcSet"
      />
      <div class="design-glass-subheading-wrap">
        <p class="design-glass-subheading">Ceramic Shield, tougher than any smartphone glass</p>
        <div class="ix-shadow" />
      </div>
      <FakeLink :class-name="'learn-more-button learn-more-button--blue w-button'">
        Find out how
      </FakeLink>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import useAnimation from '../../hooks/useAnimation';
import FakeLink from '../FakeLink.vue';
import glass500 from '../../assets/design_tougher_glass__czlsbgxawrki_large_2x-p-500.jpeg';
import glass800 from '../../assets/design_tougher_glass__czlsbgxawrki_large_2x-p-800.jpeg';
import glass2608 from '../../assets/design_tougher_glass__czlsbgxawrki_large_2x.jpg';
import glassSmall500 from '../../assets/design_tougher_glass__czlsbgxawrki_small_2x-p-500.jpeg';
import glassSmall800 from '../../assets/design_tougher_glass__czlsbgxawrki_small_2x-p-800.jpeg';
import glassSmall866 from '../../assets/design_tougher_glass__czlsbgxawrki_small_2x.jpg';

export default {
  components: {
    FakeLink,
  },
  setup() {
    const designGlass = ref(null);
    const { animateOpacity, animateFromTo } = useAnimation(designGlass);

    return {
      designGlass,
      animateOpacity,
      animateFromTo,
    };
  },
  data() {
    return {
      glassSrcSet: `${glass500} 500w, ${glass800} 800w, ${glass2608} 2608w`,
      glassSmallSrcSet: `${glassSmall500} 500w, ${glassSmall800} 800w, ${glassSmall866} 866w`,
    };
  },
  mounted() {
    this.animateFromTo('.glass-img', { from: { y: 80 }, to: { y: -70 }, start: 30, end: 80 });
    this.animateFromTo('.learn-more-button', {
      from: { y: 150 },
      to: { y: -25 },
      start: 30,
      end: 55,
    });
    this.animateFromTo('.ix-shadow', { from: { x: '-50%' }, to: { x: '50%' }, start: 40, end: 55 });
    this.animateOpacity('.learn-more-button', { start: 40, end: 55 });
    this.animateOpacity('.container', { to: 0, start: 55, end: 80 });
  },
};
</script>

<style scoped>
.learn-more-button {
  opacity: 0;
}
</style>
