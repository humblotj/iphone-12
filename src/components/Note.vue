<template>
  <div class="note">
    <div class="container">
      <p class="note-text">
        This project was made for educational purposes
        and is not affiliated with Apple in any way.
        All rights of the images, logos, and texts belong to Apple.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note',
};
</script>

<style scoped>
.note {
  position: relative;
  z-index: 999;
  display: flex;
  height: 150px;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
}

.note-text {
  margin-bottom: 0px;
  color: #111;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
}

@media screen and (max-width: 991px) {
  .note {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .note {
    display: none;
  }
}

@media screen and (max-width: 479px) {
  .note {
    display: block;
    height: auto;
    padding-right: 10px;
    padding-left: 10px;
  }

  .note-text {
    font-size: 16px;
  }
}
</style>
