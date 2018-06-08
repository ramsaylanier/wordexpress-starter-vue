<template>
  <author-container class="author-page">
    <div class="author-content" slot-scope="data" v-if="data.author">
      <page-header>
        <span slot="title">{{data.author.display_name}}</span>
      </page-header>

      <div class="body">
        <div class="wrapper">
          
          <div class="avatar">
            <img :src="$getAvatarLink(data.author.user_email, 150)" :alt="`${data.author.display_name} Avatar`"/>
          </div>

          <transition
            appear
            @enter="enter"
            :css="false"
          >
            <div class="posts" v-if="!data.isLoading">
              <post-list-item v-for="post in data.author.posts" :key="post.id" :post="post" ref="posts"/>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </author-container>
</template>

<script>
import AuthorContainer from "./containers/AuthorContainer";
import PageHeader from "@/components/page/PageHeader";
import PostListItem from "@/components/post/PostListItem";
import { TweenMax, Power4 } from "gsap";
export default {
  name: "author-single",
  components: {
    AuthorContainer,
    PageHeader,
    PostListItem
  },
  methods: {
    enter: function(el, done) {
      TweenMax.staggerFromTo(
        el.children,
        2,
        {
          y: 20,
          alpha: 0
        },
        {
          y: 0,
          alpha: 1,
          ease: Power4.easeOut,
          onComplete: done
        },
        0.1
      );
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/colors.scss";
.author-header {
  display: flex;
  justify-content: center;
  padding: 4rem 0;
}

.wrapper {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.avatar {
  position: absolute;
  top: -75px;
  right: 0;
  z-index: 2;
  img {
    border-radius: 50%;
    border: 5px solid $dark-color;
    box-sizing: content-box;
  }
}

.posts {
  position: relative;
  display: grid;
  grid-row-gap: 1rem;
  padding-top: 2rem;
  z-index: 1;
}
</style>
