<template>
  <div class="thanks">
    <div class="container container--center">
      <h5 class="thanks-heading">Thanks for scrolling through.</h5>
      <div className="madeby">
        <a
          href="https://webflow.com/website/iPhone-12-Pro-Rebuild"
          target="_blank"
          rel="noreferrer"
          class="open-in-webflow-link w-inline-block"
        >
          <div className="text-block">Based on the workflow project of Moritz Petersen</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.thanks-heading {
  margin-top: 44px;
  margin-bottom: 24px;
  color: #111;
  font-size: 48px;
  line-height: 1.333;
  font-weight: 600;
  text-align: center;
}

.thanks {
  position: relative;
  margin-top: 0px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #fff;
}

.thanks-link {
  display: block;
  margin-top: 30px;
  color: #111;
  font-size: 22px;
  font-weight: 600;
  text-decoration: underline;
}

.text-block {
  color: #000;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
}

.madeby {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.open-in-webflow-link {
  display: flex;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  color: #000;
  text-decoration: underline;
}

@media screen and (max-width: 991px) {
  .thanks {
    display: block;
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media screen and (max-width: 767px) {
  .thanks-heading {
    font-size: 32px;
  }
}

@media screen and (max-width: 479px) {
  .thanks {
    display: block;
  }

  .text-block {
    font-size: 16px;
  }
}
</style>
