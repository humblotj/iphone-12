<template>
  <div ref="designWater" class="design-water">
    <div class="container">
      <img
        src="@/assets/design_water_resistance__bx3cq2uzbzw2_large_2x.jpg"
        loading="lazy"
        sizes="(max-width: 479px) 100vw, (max-width: 767px) 596px, (max-width: 991px) 662px, 980px"
        alt=""
        class="water-img"
        :srcset="waterSrcSet"
        width="2000"
        height="1964"
      />
      <div class="design-water-text-wrap">
        <h3 class="sub-section-headline">Blows other phones out of the water.</h3>
        <div class="sub-section-subheading sub-section-subheading--water">
          Industry‑leading IP68 water resistance
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import useAnimation from '../../hooks/useAnimation';
import water500 from '../../assets/design_water_resistance__bx3cq2uzbzw2_large_2x-p-500.jpeg';
import water800 from '../../assets/design_water_resistance__bx3cq2uzbzw2_large_2x-p-800.jpeg';
import water1080 from '../../assets/design_water_resistance__bx3cq2uzbzw2_large_2x-p-1080.jpeg';
import water1600 from '../../assets/design_water_resistance__bx3cq2uzbzw2_large_2x-p-1600.jpeg';
import water2000 from '../../assets/design_water_resistance__bx3cq2uzbzw2_large_2x-p-2000.jpeg';
import water2016 from '../../assets/design_water_resistance__bx3cq2uzbzw2_large_2x.jpg';

export default {
  setup() {
    const designWater = ref(null);
    const { animateOpacity, animateFromTo } = useAnimation(designWater);

    return {
      designWater,
      animateOpacity,
      animateFromTo,
    };
  },
  data() {
    return {
      waterSrcSet: `${water500} 500w, ${water800} 800w, ${water1080} 1080w, ${water1600} 1600w, ${water2000} 2000w, ${water2016} 2016w`,
    };
  },
  mounted() {
    this.animateOpacity('.water-img', { start: 10, end: 25 });
    this.animateFromTo('.water-img', { from: { y: 100 }, to: { y: -100 }, start: 20, end: 80 });
    this.animateFromTo('.design-water-text-wrap', {
      from: { y: -150 },
      to: { y: 150 },
      start: 20,
      end: 80,
    });
    this.animateOpacity('.design-water-text-wrap', { start: 20, end: 40 });
    this.animateOpacity('.container', { to: 0, start: 60, end: 80 });
  },
};
</script>

<style scoped>
.water-img {
  opacity: 0;
}
.design-water-text-wrap {
  opacity: 0;
}
</style>
