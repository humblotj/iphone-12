<template lang="">
  <a href="" :class="className" @click="click">
    <slot />
  </a>
</template>

<script>
export default {
  props: { className: { type: String, default: '' } },

  setup() {
    const click = (e) => {
      e.preventDefault();
    };

    return {
      click,
    };
  },
};
</script>
