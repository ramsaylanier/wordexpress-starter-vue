<template>
  <div class="page">
     <transition
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <component v-if="post && !isLoading" :is="getLayout()" :page="post"/>
    </transition>
  </div>
</template>

<script>
import PageQuery from '@/graphql/page.gql'
import Layouts from './layouts/layouts'
import {TweenMax, Power4} from 'gsap'
import {willPrefetch} from 'vue-apollo'

export default willPrefetch({
  name: 'page',
  props: ['name'],
  data () {
    return {
      post: {},
      isLoading: 0
    }
  },
  apollo: {
    post: {
      query: PageQuery,
      loadingKey: 'isLoading',
      prefetch: ({route}) => {
        return {
          name: route.params.name || 'homepage'
        }
      },
      variables () {
        return {
          name: this.$route.params.name || 'homepage'
        }
      }
    }
  },
  methods: {
    getLayout: function () {
      const layout = this.post.layout ? this.post.layout.meta_value : 'DefaultPage'
      return Layouts[layout]
    },
    beforeEnter: function (el) {
      TweenMax.set(el, {
        alpha: 0
      })
    },
    enter: function (el, done) {
      TweenMax.to(el, 1, {
        y: 0,
        alpha: 1,
        ease: Power4.easeOut
      })
      done()
    },
    leave: function (el, done) {
      TweenMax.to(el, 1, {
        y: 0,
        alpha: 0,
        ease: Power4.easeOut
      })
      done()
    }
  }
})
</script>

<style scoped>
  .page{
    min-height: 100vh;
    width: 100vw;
    background-color: var(--dark-color);
  }
</style>