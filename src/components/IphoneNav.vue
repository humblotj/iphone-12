<template>
  <div class="iphone-nav">
    <div class="container container--nav">
      <div class="iphone-nav-content">
        <FakeLink :class-name="'iphone-nav-title'">
          iPhone 12 Pro
        </FakeLink>
        <div class="iphone-nav-menu">
          <FakeLink :class-name="'iphone-nav-link iphone-nav-link--current'">
            Overview
          </FakeLink>
          <FakeLink :class-name="'iphone-nav-link'">
            Tech Specs
          </FakeLink>
          <FakeLink :class-name="'buy-button w-button'">
            Shop
          </FakeLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FakeLink from './FakeLink.vue';

export default {
  name: 'IphoneNav',
  components: {
    FakeLink,
  },
};
</script>

<style scoped>
.iphone-nav {
  position: sticky;
  top: 0px;
  z-index: 9999;
  width: 100%;
  height: 52px;
}

.iphone-nav-content {
  display: flex;
  height: 52px;
  padding-right: 12px;
  padding-left: 12px;
  justify-content: space-between;
  align-items: center;
  color: #f5f5f7;
}

.iphone-nav-title {
  color: #f5f5f7;
  font-size: 21px;
  font-weight: 600;
  text-decoration: none;
}

.iphone-nav-link {
  margin-left: 24px;
  color: #ececec;
  font-size: 12px;
  text-decoration: none;
}

.iphone-nav-link.iphone-nav-link--current {
  color: #aaa;
}

.buy-button {
  margin-left: 24px;
  padding: 4px 11px;
  border-radius: 50px;
  background-color: #0071e3;
  color: #fff;
  font-size: 12px;
}

.buy-button:hover {
  background-color: #1680eb;
}

@media screen and (max-width: 991px) {
  .iphone-nav {
    display: block;
  }

  .iphone-nav-content {
    padding-right: 16px;
    padding-left: 16px;
  }

}

@media screen and (max-width: 479px) {
  .iphone-nav {
    display: block;
  }

  .iphone-nav-content {
    padding-right: 16px;
    padding-left: 16px;
  }

  .iphone-nav-title {
    font-size: 19px;
  }

  .iphone-nav-link {
    display: none;
  }
}
</style>
