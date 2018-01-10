<template>
  <div v-if="post.id">
    <div class="post-header" :style="renderHeaderImage()">
      <h2 class="post-title">{{post.post_title}}</h2>
    </div>

    <post-content :content="post.post_content"/>
  </div>
</template>

<script>
import PostContent from './PostContent'

export default {
  name: 'post-single',
  props: ['post'],
  methods: {
    renderHeaderImage () {
      const imageSrc = this.post.thumbnail
        ? this.$getThumbnail(this.post.thumbnail, 'large')
        : require('assets/post_header_bg.png')
      return `backgroundImage: url('${imageSrc}');`
    }
  },
  components: {
    PostContent
  }
}
</script>

<style scoped>
  .post-header{
    height: 300px;
    width: 100%;
    background-size: cover;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .post-title{
    margin: 0;
    font-size: 4rem;
  }

  .post-content{
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
  }
</style>
