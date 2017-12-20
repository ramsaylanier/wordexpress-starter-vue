<template>
  <div class="wrapper">
    <div class="page-content">
      <h3>{{category.name}} Posts</h3>
      <transition
        appear
        @enter="enter"
        :css="false"
        v-if="category"
      >
        <div class="posts">
          <post-list-item v-for="post in category.posts" :key="post.id" :post="post"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CategoryContainer from './containers/CategoryContainer'
import PostListItem from '@/components/post/PostListItem'
import {TweenMax, Power4} from 'gsap'
export default {
  name: 'category-list',
  props: ['category'],
  methods: {
    enter: function (el, done) {
      TweenMax.staggerFromTo(el.children, 1, {
        y: -10,
        alpha: 0
      }, {
        y: 0,
        alpha: 1,
        ease: Power4.easeOut,
        onComplete: done
      }, 0.05)
    }
  },
  components: {
    CategoryContainer, PostListItem
  }
}
</script>

<style scoped>
  .wrapper{
    display: grid;
    grid-template-columns: 5% 1fr 5%;
  }

  .posts{
    display: grid;
    grid-row-gap: 1rem;
  }

  .page-content{
    grid-column: 2;
    max-width: 980px;
    width: 100%;
    justify-self: center;
    padding: 2rem 0;
  }
</style>