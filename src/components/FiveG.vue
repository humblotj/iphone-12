<template>
  <section ref="fiveG" class="_5g">
    <div class="container container--center">
      <div class="section-header">
        <h2 class="section-heading">
          <span class="section-heading-eyebrow">Superfast wireless</span>Hello 5G.
        </h2>
        <div class="ix-shadow" />
      </div>
      <Device>
        <ul role="list" class="downloads">
          <li class="download download--show">
            <img
              src="@/assets/5g_show_01__bf4l35s1jn1e_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 221px, (max-width: 991px) 360px, 533px"
              alt=""
              class="download-img"
              :srcset="show1SrcSet"
              width="1066"
              height="204"
            />
            <img
              src="@/assets/5g_show_01_downloading__ugasi8688yqi_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 138px, (max-width: 991px) 225px, 340px"
              alt=""
              class="download-text"
              :srcset="show1DownloadSrcSet"
              width="664"
              height="204"
            />
            <div class="ui-arrow" />
            <div class="download-divider" />
          </li>
          <li class="download download--film">
            <img
              src="@/assets/5g_show_02__f7pxk2oyioeq_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 221px, (max-width: 991px) 360px, 533px"
              alt=""
              class="download-img"
              :srcset="show2SrcSet"
              width="1066"
              height="204"
            />
            <div class="ui-download-progress" />
            <div class="download-divider" />
          </li>
          <li class="download download--show">
            <img
              src="@/assets/5g_show_03__c8qgtrgvtno2_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 221px, (max-width: 991px) 360px, 533px"
              alt=""
              class="download-img"
              :srcset="show3SrcSet"
              width="664"
              height="204"
            />
            <img
              src="@/assets/5g_show_03_downloading__el9s5eeilbue_large_2x.jpg"
              loading="lazy"
              alt=""
              class="download-text"
              width="664"
              height="204"
            />
            <div class="ui-arrow" />
            <div class="download-divider" />
          </li>
          <li class="download download--show">
            <img
              src="@/assets/5g_show_04__dbzl203ndh2e_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 221px, (max-width: 991px) 360px, 533px"
              alt=""
              class="download-img"
              :srcset="show4SrcSet"
              width="1066"
              height="204"
            />
            <img
              src="@/assets/5g_show_04_downloading__bpwdwow1lmhe_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 138px, (max-width: 991px) 225px, 340px"
              alt=""
              class="download-text"
              :srcset="show4DownloadSrcSet"
              width="664"
              height="204"
            />
            <div class="ui-arrow" />
            <div class="download-divider" />
          </li>
          <li class="download download--show">
            <img
              src="@/assets/5g_show_05__ceuw0pl16936_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 221px, (max-width: 991px) 360px, 533px"
              alt=""
              class="download-img"
              :srcset="show5SrcSet"
              width="1066"
              height="204"
            />
            <img
              src="@/assets/5g_show_05_downloading__rn0ahwhpe0i2_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 138px, (max-width: 991px) 225px, 340px"
              alt=""
              class="download-text"
              :srcset="show5DownloadSrcSet"
              width="664"
              height="204"
            />
            <div class="ui-arrow" />
            <div class="download-divider" />
          </li>
          <li class="download download--film">
            <img
              src="@/assets/5g_show_06__cq7hdrxmx3o2_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 221px, (max-width: 991px) 360px, 533px"
              alt=""
              class="download-img"
              :srcset="show6SrcSet"
              width="1066"
              height="204"
            />
            <div class="ui-download-progress" />
            <div class="download-divider" />
          </li>
          <li class="download download--show">
            <img
              src="@/assets/5g_show_07__bz66o6mfl2c2_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 221px, (max-width: 991px) 360px, 533px"
              alt=""
              class="download-img"
              :srcset="show7SrcSet"
              width="1066"
              height="204"
            />
            <img
              src="@/assets/5g_show_07_downloading__e3xx7ozr6owi_large_2x.jpg"
              loading="lazy"
              sizes="(max-width: 767px) 138px, (max-width: 991px) 225px, 340px"
              alt=""
              class="download-text"
              :srcset="show7DownloadSrcSet"
              width="664"
              height="204"
            />
            <div class="ui-arrow" />
            <div class="download-divider" />
          </li>
        </ul>
      </Device>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

import useAnimation from '../hooks/useAnimation';
import Device from './FiveG/Device.vue';
import download from '../assets/download.json';
import show1500 from '../assets/5g_show_01__bf4l35s1jn1e_large_2x-p-500.jpeg';
import show11066 from '../assets/5g_show_01__bf4l35s1jn1e_large_2x.jpg';
import show1Download500 from '../assets/5g_show_01_downloading__ugasi8688yqi_large_2x-p-500.jpeg';
import show1Download664 from '../assets/5g_show_01_downloading__ugasi8688yqi_large_2x.jpg';
import show2500 from '../assets/5g_show_02__f7pxk2oyioeq_large_2x-p-500.jpeg';
import show21066 from '../assets/5g_show_02__f7pxk2oyioeq_large_2x.jpg';
import show3500 from '../assets/5g_show_03__c8qgtrgvtno2_large_2x-p-500.jpeg';
import show31066 from '../assets/5g_show_03__c8qgtrgvtno2_large_2x.jpg';
import show4500 from '../assets/5g_show_04__dbzl203ndh2e_large_2x-p-500.jpeg';
import show41066 from '../assets/5g_show_04__dbzl203ndh2e_large_2x.jpg';
import show4Download500 from '../assets/5g_show_04_downloading__bpwdwow1lmhe_large_2x-p-500.jpeg';
import show4Download664 from '../assets/5g_show_04_downloading__bpwdwow1lmhe_large_2x.jpg';
import show5500 from '../assets/5g_show_05__ceuw0pl16936_large_2x-p-500.jpeg';
import show51066 from '../assets/5g_show_05__ceuw0pl16936_large_2x.jpg';
import show5Download500 from '../assets/5g_show_05_downloading__rn0ahwhpe0i2_large_2x-p-500.jpeg';
import show5Download664 from '../assets/5g_show_05_downloading__rn0ahwhpe0i2_large_2x.jpg';
import show6500 from '../assets/5g_show_06__cq7hdrxmx3o2_large_2x-p-500.jpeg';
import show6800 from '../assets/5g_show_06__cq7hdrxmx3o2_large_2x-p-800.jpeg';
import show61066 from '../assets/5g_show_06__cq7hdrxmx3o2_large_2x.jpg';
import show7500 from '../assets/5g_show_07__bz66o6mfl2c2_large_2x-p-500.jpeg';
import show71066 from '../assets/5g_show_07__bz66o6mfl2c2_large_2x.jpg';
import show7Download500 from '../assets/5g_show_07_downloading__e3xx7ozr6owi_large_2x-p-500.jpeg';
import show7Download664 from '../assets/5g_show_07_downloading__e3xx7ozr6owi_large_2x.jpg';

export default {
  components: {
    Device,
  },
  setup() {
    const fiveG = ref(null);
    const { animateTo, animateOpacity, loadAnimation, animateLottie } = useAnimation(fiveG);
    return { fiveG, animateTo, animateOpacity, loadAnimation, animateLottie };
  },
  data() {
    return {
      show1SrcSet: `${show1500} 500w, ${show11066} 1066w`,
      show1DownloadSrcSet: `${show1Download500} 500w, ${show1Download664} 664w`,
      show2SrcSet: `${show2500} 500w, ${show21066} 1066w`,
      show3SrcSet: `${show3500} 500w, ${show31066} 1066w`,
      show4SrcSet: `${show4500} 500w, ${show41066} 1066w`,
      show4DownloadSrcSet: `${show4Download500} 500w, ${show4Download664} 664w`,
      show5SrcSet: `${show5500} 500w, ${show51066} 1066w`,
      show5DownloadSrcSet: `${show5Download500} 500w, ${show5Download664} 664w`,
      show6SrcSet: `${show6500} 500w, ${show6800} 800w, ${show61066} 1066w`,
      show7SrcSet: `${show7500} 500w, ${show71066} 1066w`,
      show7DownloadSrcSet: `${show7Download500} 500w, ${show7Download664} 664w`,
    };
  },
  mounted() {
    const element = this.fiveG;
    const shows = element.querySelectorAll('.download--show');
    for (let i = 0; i < shows.length; i++) {
      this.animateTo(null, {
        to: {
          scale: 1,
          opacity: 1,
          y: 0,
        },
        start: 0,
        end: 5,
        customElement: shows[i],
      });
      this.animateOpacity('.download-text', { to: 0, start: 4, end: 5, customElement: shows[i] });
    }
    const films = element.querySelectorAll('.download--film');
    for (let i = 0; i < films.length; i++) {
      this.animateTo(null, {
        to: {
          scale: 1,
          opacity: 1,
          y: 0,
        },
        start: 0,
        end: 5,
        customElement: films[i],
      });
      const downloadAnimation = this.loadAnimation('.ui-download-progress', download, {
        customElement: films[i],
        renderer: 'svg',
      });
      this.animateLottie(downloadAnimation, {
        start: 0,
        end: 5,
        to: 100,
        customElement: films[i],
      });
    }
  },
};
</script>

<style scoped>
._5g {
  overflow: hidden;
  margin-top: 425px;
}

.downloads {
  margin-bottom: 0px;
  padding-right: 25px;
  padding-left: 75px;
  list-style-type: none;
}

.download {
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  transform-origin: 50% 0%;
  text-align: left;
  transform: translate(0px, 80%) scale(2);
  opacity: 0;
}

.download-img {
  width: 533px;
}

.download-text {
  position: absolute;
  left: 201px;
  top: 12px;
  width: 340px;
  background-color: #000;
}

.ui-arrow {
  position: absolute;
  top: 50px;
  right: 65px;
  width: 22px;
  height: 32px;
  background-image: url('../assets/5g_arrow_large_2x.jpg');
  background-position: 50% 50%;
  background-size: contain;
}

.ui-download-progress {
  position: absolute;
  top: 34px;
  right: 50px;
  width: 50px;
}

.download-divider {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 68%;
  height: 1px;
  background-color: #1e1e1e;
}

@media screen and (max-width: 991px) {
  ._5g {
    margin-top: 220px;
  }

  .downloads {
    padding-right: 18px;
    padding-left: 51px;
  }

  .download {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .download-img {
    width: 360px;
  }

  .download-text {
    left: 135px;
    top: 8px;
    width: 225px;
  }

  .ui-arrow {
    top: 32px;
    right: 44px;
    width: 14px;
    height: 23px;
  }

  .ui-download-progress {
    top: 16px;
    right: 34px;
    width: 42px;
  }
}

@media screen and (max-width: 767px) {
  .downloads {
    padding-right: 9px;
    padding-left: 35px;
  }

  .download {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .download-img {
    width: 221px;
  }

  .download-text {
    left: 84px;
    top: 5px;
    width: 138px;
  }

  .ui-arrow {
    top: 20px;
    right: 32px;
    width: 9px;
    height: 13px;
  }

  .ui-download-progress {
    top: 10px;
    right: 24px;
    width: 24px;
  }
}
</style>
