<template>
  <div class="wrapper">
    <div class="page-content">
      <posts-container>
        <transition
          appear
          slot-scope="data"
          @enter="enter"
          :css="false"
        >
          <div class="posts" v-if="!data.isLoading">
            <post-list-item v-for="post in data.posts" :key="post.id" :post="post"/>
          </div>
        </transition>
      </posts-container>
    </div>
  </div>
</template>

<script>
import PostsContainer from './containers/PostsContainer'
import PostListItem from './PostListItem'
import {TweenMax, Power4} from 'gsap'
export default {
  name: 'post-list',
  methods: {
    enter: function (el, done) {
      TweenMax.staggerFromTo(el.children, 2, {
        y: 20,
        alpha: 0
      }, {
        y: 0,
        alpha: 1,
        ease: Power4.easeOut,
        onComplete: done
      }, 0.1)
    }
  },
  components: {
    PostsContainer, PostListItem
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