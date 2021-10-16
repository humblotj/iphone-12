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
    const { animateTo, animateFromTo } = useAnimation(designWater);

    return {
      designWater,
      animateTo,
      animateFromTo,
    };
  },
  data() {
    return {
      waterSrcSet: `${water500} 500w, ${water800} 800w, ${water1080} 1080w, ${water1600} 1600w, ${water2000} 2000w, ${water2016} 2016w`,
    };
  },
  mounted() {
    this.animateTo('.water-img', { opacity: 1 }, 10, 25);
    this.animateFromTo('.water-img', { y: 100 }, { y: -100 }, 20, 80);
    this.animateFromTo('.design-water-text-wrap', { y: -150 }, { y: 150 }, 20, 80);
    this.animateTo('.design-water-text-wrap', { opacity: 1 }, 20, 40);
    this.animateTo('.container', { opacity: 0 }, 60, 80, false);
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
