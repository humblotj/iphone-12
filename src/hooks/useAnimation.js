import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

const useAnimation = (ref, animationStartEntering = true) => {
  const loadAnimation = (className, animationData, renderer = 'canvas') => {
    const element = ref.value;
    if (!element) {
      return null;
    }

    return lottie.loadAnimation({
      container: typeof className === 'string' ? element.querySelector(className) : className,
      renderer,
      animationData,
      loop: false,
      autoplay: false,
    });
  };

  const lottieScroll = (animation, {
    start, end, to,
  }, selfRender = false) => {
    const element = !selfRender ? ref.value : selfRender;
    if (!element) {
      return;
    }

    const animationStart = `${(element.offsetHeight + window.innerHeight) * (start / 100)} bottom`;
    const animationEnd = `+=${(element.offsetHeight + window.innerHeight) * ((end - start) / 100)}`;

    ScrollTrigger.create({
      trigger: element,
      scrub: true,
      start: animationStart,
      end: animationEnd,
      onUpdate: (self) => {
        animation.goToAndStop(self.progress * (animation.totalFrames - 1) * (to / 100), true);
      },
    });
  };

  const animateFromTo = (className, from,
    to, start, end, immediateRender = true) => {
    const element = ref.value;
    if (!element) {
      return;
    }

    const animationStart = animationStartEntering ? `${(element.offsetHeight + window.innerHeight) * (start / 100)} bottom` : `${start}% ${start}%`;
    const animationEnd = animationStartEntering ? `+=${(element.offsetHeight + window.innerHeight) * ((end - start) / 100)}` : `+=${element.offsetHeight * ((end - start) / 100)}`;

    const targets = typeof className === 'string' ? element.querySelectorAll(className) : className;
    gsap.fromTo(targets, from,
      {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: typeof className === 'string' ? element : className,
          scrub: true,
          start: animationStart,
          end: animationEnd,
        },
      });
  };

  const animateTo = (className, to,
    start, end, immediateRender = true) => {
    const element = ref.value;
    if (!element) {
      return;
    }

    const animationStart = animationStartEntering ? `${(element.offsetHeight + window.innerHeight) * (start / 100)} bottom` : `${start}% ${start}%`;
    const animationEnd = animationStartEntering ? `+=${(element.offsetHeight + window.innerHeight) * ((end - start) / 100)}` : `+=${element.offsetHeight * ((end - start) / 100)}`;

    const targets = typeof className === 'string' ? element.querySelectorAll(className) : className;
    gsap.to(targets,
      {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: typeof className === 'string' ? element : className,
          scrub: true,
          start: animationStart,
          end: animationEnd,
        },
      });
  };

  return {
    loadAnimation, lottieScroll, animateFromTo, animateTo,
  };
};

export default useAnimation;
