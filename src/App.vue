<template>
  <Note />
  <Nav />
  <main class="main" v-bind="$attrs">
    <IphoneNav />
    <Hero />
    <Design />
    <FiveG />
  </main>
  <Thanks />
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import Note from './components/Note.vue';
import Nav from './components/Nav.vue';
import IphoneNav from './components/IphoneNav.vue';
import Hero from './components/Hero.vue';
import Design from './components/Design.vue';
import FiveG from './components/FiveG.vue';
import Thanks from './components/Thanks.vue';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults().ease = 'linear';

const firebaseConfig = JSON.parse(process.env.VUE_APP_API_KEY);
initializeApp(firebaseConfig);
getAnalytics();

export default {
  name: 'App',
  components: {
    Note,
    Nav,
    IphoneNav,
    Hero,
    Design,
    FiveG,
    Thanks,
  },
  mounted() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  },
};
</script>

<style>
.container {
  position: relative;
  max-width: 980px;
  margin-right: auto;
  margin-left: auto;
}

.container.container--center {
  text-align: center;
}

.container.container--center-flex {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.body {
  background-color: #000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: #fff;
  font-size: 17px;
}

body {
  margin: 0;
  min-height: 100%;
  background-color: #fff;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
}

* {
  box-sizing: border-box;
}

img {
  border: 0;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  display: inline-block;
}

.w-background-video > video {
  background-size: cover;
  background-position: 50% 50%;
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  right: -100%;
  bottom: -100%;
  top: -100%;
  left: -100%;
  object-fit: cover;
  z-index: -100;
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

.ix-shadow {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  width: 200%;
  background-image: linear-gradient(110deg, transparent, #000 50%);
}

.ix-shadow.ix-shadow--vertical {
  width: 200%;
  height: 200%;
  background-image: linear-gradient(165deg, transparent, #000 50%);
}

.sub-section-headline-wrap {
  position: relative;
}

.sub-section-headline {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 56px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.005em;
}

.sub-section-subheading {
  margin-top: 24px;
  color: #a1a1a6;
  font-size: 21px;
  line-height: 1.19;
  font-weight: 600;
}

.section-header {
  position: relative;
  margin-bottom: 115px;
}

.section-heading {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 80px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.015em;
}

.section-heading-eyebrow {
  display: block;
  color: #6e6e73;
}

.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898ec;
  color: #fff;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}

.w-background-video {
  position: relative;
  overflow: hidden;
  height: 500px;
  color: #fff;
}

@media screen and (max-width: 991px) {
  .container {
    max-width: 692px;
  }

  .container.container--nav {
    max-width: 890px;
  }

  .sub-section-headline {
    font-size: 40px;
    letter-spacing: 0em;
  }

  .sub-section-subheading {
    margin-top: 17px;
  }

  .section-header {
    margin-bottom: 65px;
  }

  .section-heading {
    font-size: 56px;
    letter-spacing: -0.005em;
  }
}

@media screen and (max-width: 767px) {
  .container {
    width: 87.5%;
    max-width: none;
  }

  .container.container--nav {
    width: 100%;
  }

  .container.container--center-flex {
    text-align: left;
  }

  .ix-shadow {
    width: 200%;
  }

  .sub-section-headline {
    font-size: 32px;
  }

  .section-header {
    text-align: left;
  }

  .section-heading {
    font-size: 48px;
  }
}
</style>
