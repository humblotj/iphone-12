<template lang="">
  <a href="" :class="className" @click="click">
    <slot />
  </a>
</template>

<script>
export default {
  props: { className: String },

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
