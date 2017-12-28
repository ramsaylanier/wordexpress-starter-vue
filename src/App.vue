<template>
  <div id="app">
    <icons/>
    <transition
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enterHeader"
      v-on:leave="leaveHeader"
      v-bind:css="false"
    >
      <router-view name="header"></router-view>
    </transition>
    <div class="main">
      <transition
        appear
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-bind:css="false"
      >
        <router-view name="page"></router-view>
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
      console.log(el)
      TweenMax.to(el, 1, {
        y: 0,
        alpha: 1,
        ease: Power4.easeOut
      })
      done()
    },
    enterHeader: function (el, done) {
      TweenMax.fromTo(el, 1, {
        y: -50
      }, {
        y: 0,
        alpha: 1,
        ease: Power4.easeOut
      })
      done()
    },
    leaveHeader: function (el, done) {
      TweenMax.to(el, 1, {
        y: -50,
        ease: Power4.easeOut,
        onComplete: done
      })
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Oswald:300|Source+Sans+Pro:300,400|Source+Code+Pro:400,700');
@import "styles/reset.css";
@import "styles/typography.css";

*{
  box-sizing: border-box;
}

body{
  font-family: var(--copy-font);
  background-color: var(--dark-color); 
  padding: 0;
  margin: 0;
}

:root{
  --primary-color: #B60FE0;
  --secondary-color: #acf3a7;
  --dark-color: #380436;
  --light-grey-color: #f3f3f3;

  --heading-font: 'Oswald', sans-serif;
  --copy-font: 'Source Sans Pro', sans-serif;
  --mono-font: 'Source Code Pro', monospace;
}
</style>
