<template>
  <div class="page">
     <transition
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
    <component v-if="!isLoading" :is="getLayout()" :page="post"/>
    </transition>
  </div>
</template>

<script>
import PageQuery from '@/graphql/page.gql'
import Layouts from './layouts/layouts'
import {TweenMax, Power4} from 'gsap'
export default {
  name: 'page',
  props: ['name'],
  data () {
    return {
      post: {},
      isLoading: 0
    }
  },
  watch: {
    '$route.params.name': function (name) {
      this.$apollo.queries.post.refetch({name: name})
    }
  },
  apollo: {
    post () {
      return {
        query: PageQuery,
        loadingKey: 'isLoading',
        prefetch: ({route, name}) => {
          return {
            name: route.params.name || name
          }
        },
        variables: {
          name: this.$route.params.name || this.name
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
      console.log('enter', el)
      TweenMax.to(el, 1, {
        y: 0,
        alpha: 1,
        ease: Power4.easeOut
      })
      done()
    },
    leave: function (el, done) {
      console.log('leave', el)
      TweenMax.to(el, 1, {
        y: 0,
        alpha: 0,
        ease: Power4.easeOut
      })
      done()
    }
  }
}
</script>