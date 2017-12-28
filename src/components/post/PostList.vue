<template>
  <div class="wrapper">
    <div class="page-content">
      {{getMeta()}}
      <posts-container :postType="postType">
        <transition
          appear
          slot-scope="data"
          @enter="enter"
          :css="false"
        >
          <div class="posts" v-if="!data.isLoading">
            <component 
              :is="Layouts[layoutName]"
              v-for="post in data.posts"
              :post="post"
              :key="post.id"/>
          </div>
        </transition>
      </posts-container>
    </div>
  </div>
</template>

<script>
import PostsContainer from './containers/PostsContainer'
import Layouts from './layouts/layouts'
import {TweenMax, Power4} from 'gsap'
export default {
  name: 'post-list',
  props: ['page'],
  data () {
    return {
      postType: 'post',
      layoutName: 'PostListItem',
      Layouts
    }
  },
  methods: {
    getMeta: function () {
      this.page.post_meta.map(meta => {
        switch (meta.meta_key) {
          case 'post_type':
            this.postType = meta.meta_value
            break
          case 'post_item_component':
            this.layoutName = meta.meta_value
            break
        }
      })
    },
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
    PostsContainer
  }
}
</script>

<style scoped lang="sass">
  .wrapper{
    display: grid;
    background-color: var(--dark-color);
    grid-template-columns: 5% 1fr 5%;
    margin-top: 4rem;
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