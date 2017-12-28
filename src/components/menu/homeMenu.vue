<template>
  <ul class="menu" @mousemove="handleMouseMove" v-if="menuItems">
    <li 
      :class="['item', `item-${index + 1}`]"
      v-for="(item, index) in menuItems"
      :key="item.id"
      @click="(e) => handleClick(item, e)"
      @mouseenter="(e) => handleEnter(item, e)"
      @mouseleave="handleLeave"
      ref="items">
        <div class="inner" ref="inner"></div>
    </li>
  </ul>
</template>

<script>
import {TweenMax, Power4} from 'gsap'
import { mapActions } from 'vuex'

const AMP = 1

export default {
  name: 'home-menu',
  props: ['menuItems'],
  mounted () {
    this.$refs.items.map((item, index) => {
      const cX = window.innerWidth / 2
      const cY = window.innerHeight / 2
      const x = (cX - (item.offsetWidth / 2))
      const y = (cY - (item.offsetHeight / 2))
      TweenMax.set(item, {
        x: x,
        y: y
      })
    })
  },
  methods: {
    ...mapActions([
      'activeMenuName'
    ]),
    handleClick: function (item, e) {
      this.activeMenuName(null)
      TweenMax.staggerTo(this.$refs.items, 1, {
        scale: 0.95,
        alpha: 0,
        ease: Power4.easeOut
      }, 0.1, () => {
        this.$router.push(item.navitem.post_name)
      })
    },
    handleEnter: function (item, event) {
      this.activeMenuName(item.navitem.post_title)
      const el = event.target.getElementsByClassName('inner')
      TweenMax.to(el, 0.5, {
        scale: 1,
        alpha: 1,
        ease: Power4.easeOut
      })
    },
    handleLeave: function (event) {
      const el = event.target.getElementsByClassName('inner')
      TweenMax.to(el, 0.3, {
        scale: 0.9,
        alpha: 0,
        ease: Power4.easeOut
      })
    },
    handleMouseMove: function (e) {
      const cX = window.innerWidth / 2
      const cY = window.innerHeight / 2
      const l = this.$refs.items.length

      this.$refs.items.map((item, index) => {
        const x = (cX - (item.offsetWidth / 2)) - (((e.clientX - cX) / 40) * (index))
        const y = (cY - (item.offsetHeight / 2)) - (((e.clientY - cY) / 40) * (index))
        const z = (l - index) * 100
        const rY = ((e.clientX - cX) / cX) * AMP * 20
        const rX = ((e.clientY - cY) / cY) * AMP * -20
        const shadow = `${(e.clientX - cX) / cX * -20}px ${((e.clientY - cY) / cY * -20)}px 10px 1px rgba(0, 0, 0, 0.2)`

        TweenMax.to(item, 1, {
          x: x,
          y: y,
          z: z,
          rotationY: rY,
          rotationX: rX,
          boxShadow: shadow,
          ease: Power4.easeOut
        })
      })
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/colors";

  .container{
    background: $dark-color;
  }

  .menu{
    padding: 0;
    transform-style: preserve-3d;
    perspective: 1000px;
    backface-visibility: hidden;
    height: 100vh;
    width: 100vw;
  }

  .item{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform-style: preserve-3d;
    overflow: hidden;
    backface-visibility: hidden;
    border-radius: 50%;
    // background-color: $dark-color;
    cursor: pointer;
  }

  .inner{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    opacity: 0;
    background-color: lighten($dark-color, 2);
    border: 5px solid $dark-color;
  }

  @for $i from 1 through length($colors){
    .item-#{$i}{
      height: $i * 100px + 25px;
      width: $i * 100px + 25px;
      border: 1px solid darken($secondary-color, ($i - 1) * 5);
    }
  }
</style>

