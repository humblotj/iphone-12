<template>
  <div ref="designDisplay" class="design-display">
    <div class="container">
      <div
        data-poster-url="@/assets/display video-poster-00001.jpg"
        data-video-urls="@/assets/display-video-transcode.mp4,@/assets/display-video-transcode.webm"
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
        class="video display-video w-background-video w-background-video-atom"
      >
        <video
          autoplay
          style="background-image: url('@/assets/display video-poster-00001.jpg')"
          muted
          playsinline
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source src="@/assets/display-video-transcode.mp4" data-wf-ignore="true" />
          <source src="@/assets/display-video-transcode.webm" data-wf-ignore="true" />
        </video>
      </div>
      <div class="design-display-compare-wrap">
        <div class="design-display-caption design-display-caption--left">
          <div>iPhone 12 Pro Max</div>
          <div class="design-display-caption-secondary">6.7” Super Retina<br />XDR display</div>
        </div>
        <div class="design-display-caption">
          <div>iPhone 12 Pro</div>
          <div class="design-display-caption-secondary">6.1” Super Retina<br />XDR display</div>
        </div>
      </div>
    </div>
    <div class="container container--center">
      <FakeLink :class-name="'learn-more-button w-button'">
        Compare sizes to iPhone 11 Pro
      </FakeLink>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import useAnimation from '../../hooks/useAnimation';
import FakeLink from '../FakeLink.vue';

export default {
  components: {
    FakeLink,
  },
  setup() {
    const designDisplay = ref(null);
    const { animateTo, animateFromTo } = useAnimation(designDisplay);

    return {
      designDisplay,
      animateTo,
      animateFromTo,
    };
  },
  mounted() {
    this.animateTo('.design-display-compare-wrap', { opacity: 1 }, 30, 40);
    this.animateFromTo('.video, .container.container--center', { y: 150 }, { y: -150 }, 30, 80);
    this.animateTo('.design-display-compare-wrap', { opacity: 0 }, 55, 80, false);
  },
};
</script>

<style scoped>
.design-display-compare-wrap {
  opacity: 0;
}
</style>
