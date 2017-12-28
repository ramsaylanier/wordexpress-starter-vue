<template>
  <div id="app">
    <icons/>
    <app-header/>
    <div class="main">
      <transition 
        appear
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-bind:css="false"
      >
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Icons from '@/components/icons/icons'
import AppHeader from '@/components/header/header'
import {TweenMax, Power4} from 'gsap'
export default {
  name: 'app',
  components: {
    Icons, AppHeader
  },
  methods: {
    beforeEnter: function (el) {
      TweenMax.set(el, {
        alpha: 0
      })
    },
    enter: function (el, done) {
      TweenMax.to(el, 1, {
        alpha: 1,
        ease: Power4.easeOut
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Open+Sans:400,700');
@import "styles/reset.css";
@import "styles/typography.css";

*{
  box-sizing: border-box;
}

body{
  font-family: var(--copy-font);
  padding: 0;
  margin: 0;
}

.main{
  margin-top: 40px;
}

:root{
  --primary-color: #7fbd42;
  --secondary-color: #208cbe;
  --dark-color: #380436;
  --light-grey-color: #f3f3f3;

  --heading-font: 'Abril Fatface', serif;
  --copy-font: 'Open Sans', sans-serif;
}
</style>
