<template>
  <div class="nav">
    <div class="container container--nav">
      <div class="nav-menu">
        <div class="mobile-burger">
          <div class="mobile-burger-line" />
          <div class="mobile-burger-line" />
        </div>
        <FakeLink :class-name="'nav-link logo'" />
        <FakeLink :class-name="'nav-link'">
          Mac
        </FakeLink>
        <FakeLink :class-name="'nav-link'">
          iPad
        </FakeLink>
        <FakeLink :class-name="'nav-link'">
          iPhone
        </FakeLink>
        <FakeLink :class-name="'nav-link'">
          Watch
        </FakeLink>
        <FakeLink :class-name="'nav-link'">
          TV
        </FakeLink>
        <FakeLink :class-name="'nav-link'">
          Music
        </FakeLink>
        <FakeLink :class-name="'nav-link'">
          Support
        </FakeLink>
        <FakeLink :class-name="'nav-link search'" />
        <FakeLink :class-name="'nav-link bag'" />
      </div>
    </div>
  </div>
</template>

<script>
import FakeLink from './FakeLink.vue';

export default {
  name: 'Nav',
  components: {
    FakeLink,
  },
};
</script>

<style scoped>
.nav-menu {
  display: flex;
  height: 44px;
  max-height: 44px;
  padding-right: 12px;
  padding-left: 12px;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  display: flex;
  height: 44px;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  transition: opacity 200ms cubic-bezier(.645, .045, .355, 1);
  color: #f5f5f7;
  font-size: 15px;
  text-align: center;
  text-decoration: none;
}

.nav-link:hover {
  opacity: 0.7;
}

.nav-link.bag {
  background-image: url('../assets/bag.svg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.nav-link.search {
  background-image: url('../assets/search.svg');
  background-position: 50% 50%;
  background-size: auto;
  background-repeat: no-repeat;
}

.nav-link.logo {
  background-image: url('../assets/apple-logo.svg');
  background-position: 50% 50%;
  background-size: 16px 44px;
  background-repeat: no-repeat;
}

.nav {
  position: relative;
  z-index: 9999;
  width: 100%;
  height: 44px;
  max-height: 44px;
  background-color: rgba(0, 0, 0, 0.8);
}

.mobile-burger-line {
  width: 60%;
  height: 1px;
  background-color: #fff;
}

.mobile-burger {
  display: none;
  width: 30px;
  height: 30px;
  padding-top: 7px;
  padding-bottom: 7px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

@media screen and (max-width: 991px) {
  .nav-menu {
    padding-right: 16px;
    padding-left: 16px;
  }

  .nav-link {
    display: none;
  }

  .nav-link.bag {
    display: flex;
  }

  .nav-link.logo {
    display: flex;
  }

  .nav {
    display: block;
  }

  .mobile-burger {
    display: flex;
  }
}

@media screen and (max-width: 479px) {
  .nav-link {
    display: none;
  }

  .nav-link.bag {
    display: block;
  }

  .nav-link.search {
    display: none;
  }

  .nav-link.logo {
    display: block;
  }

  .nav {
    display: block;
    background-color: #000;
  }

  .mobile-burger {
    display: flex;
  }
}
</style>
