import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

const useAnimation = (ref, animationStartEntering = true) => {
  const loadAnimation = (
    className,
    animationData,
    { renderer = 'canvas', customElement = null } = { renderer: 'canvas', customElement: null },
  ) => {
    const element = customElement || (ref ? ref.value : document.body);
    if (!element) {
      return null;
    }

    return lottie.loadAnimation({
      container: typeof className === 'string' ? element.querySelector(className) : className,
      renderer: renderer || 'canvas',
      animationData,
      loop: false,
      autoplay: false,
    });
  };

  const lottieScroll = (animation, { start, end, to, customElement }) => {
    const element = customElement || ref ? ref.value : document.body;
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

  const animateFromTo = (
    className,
    {
      from,
      to,
      start,
      end,
      duration,
      immediateRender = true,
      once = false,
      scrub = true,
      toggleActions = undefined,
      bodySelector = false,
      customElement = null,
      ...rest
    },
  ) => {
    const element = customElement || (ref ? ref.value : document.body);
    if (!element) {
      return;
    }

    const animationStart = animationStartEntering
      ? `${(element.offsetHeight + window.innerHeight) * (start / 100)} bottom`
      : `${start}% ${start}%`;
    const animationEnd = animationStartEntering
      ? `+=${(element.offsetHeight + window.innerHeight) * ((Math.max(end, start) - start) / 100)}`
      : `+=${element.offsetHeight * ((Math.max(end, start) - start) / 100)}`;

    const targets = className
      ? (bodySelector ? document.body : element).querySelectorAll(className)
      : element;
    const vars = {
      ...to,
      immediateRender,
      scrollTrigger: {
        trigger: element,
        scrub: scrub && !once && !duration,
        start: animationStart,
        end: animationEnd,
        once,
        toggleActions,
      },
      ...rest,
    };
    if (duration) {
      vars.duration = duration;
    }

    return gsap.fromTo(targets, from, vars);
  };

  const animateTo = (
    className,
    {
      to,
      start = 0,
      end = 0,
      duration,
      immediateRender = true,
      once = false,
      scrub = true,
      toggleActions = 'play none none none',
      bodySelector = false,
      customElement = null,
      ...rest
    },
  ) => {
    const element = customElement || (ref ? ref.value : document.body);
    if (!element) {
      return;
    }

    const animationStart = animationStartEntering
      ? `${(element.offsetHeight + window.innerHeight) * (start / 100)} bottom`
      : `${start}% ${start}%`;
    const animationEnd = animationStartEntering
      ? `+=${(element.offsetHeight + window.innerHeight) * ((Math.max(end, start) - start) / 100)}`
      : `+=${element.offsetHeight * ((Math.max(end, start) - start) / 100)}`;

    const targets = className
      ? (bodySelector ? document.body : element).querySelectorAll(className)
      : element;
    const vars = {
      ...to,
      immediateRender,
      scrollTrigger: {
        trigger: element,
        scrub: scrub && !once && !duration,
        start: animationStart,
        end: animationEnd,
        once,
        toggleActions,
      },
      ...rest,
    };

    // eslint-disable-next-line no-unused-expressions
    className === null && console.log(targets, customElement);

    if (duration) {
      vars.duration = duration;
    }
    return gsap.to(targets, vars);
  };

  const animateOpacity = (className, { start, end, to = 1, ...rest }) => {
    animateTo(className, { to: { opacity: to }, start, end, immediateRender: !!to, ...rest });
  };

  return {
    loadAnimation,
    lottieScroll,
    animateFromTo,
    animateTo,
    animateOpacity,
  };
};

export default useAnimation;
