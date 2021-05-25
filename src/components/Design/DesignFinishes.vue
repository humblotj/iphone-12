<template>
  <div ref="designFinishes" class="design-finishes">
    <div class="container">
      <div data-poster-url="@/assets/finishes-poster-00001.jpg" data-video-urls="@/assets/finishes-transcode.mp4,@/assets/finishes-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="video video--finishes w-background-video w-background-video-atom">
        <video autoplay style="background-image:url(&quot;@/assets/finishes-poster-00001.jpg&quot;)" muted playsinline data-wf-ignore="true" data-object-fit="cover"
               @playing="handleLoad"
        >
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
</template>

<script>
import { ref } from 'vue';
import useAnimation from '../../hooks/useAnimation';

export default {
  setup() {
    const designFinishes = ref(null);
    const { animateTo } = useAnimation(designFinishes);
    const isInit = ref(null);

    return {
      designFinishes, animateTo, isInit,
    };
  },
  methods: {
    handleLoad() {
      if (!this.isInit) {
        this.animateTo('.design-finishes-text-wrap', { opacity: 1 }, 50, 60);
        this.animateTo(this.designFinishes, { opacity: 0 }, 70, 90, false);
        this.isInit = true;
      }
    },
  },
};
</script>

<style>
</style>
