<template>
  <div v-if="post.id">
    <div class="header" :style="renderHeaderImage()">
      <div class="wrapper">
        <h2 class="title">{{post.post_title}}</h2>
      </div>
    </div>
    <div class="body">
      <p class="date">{{formatDate(post.post_date)}}</p>
      <post-content :content="post.post_content"/>
    </div>
  </div>
</template>

<script>
import PostContent from './PostContent'
import getThumbnail from '@/helpers/getThumbnail'
import formatDate from '@/helpers/formatDate'

export default {
  name: 'post-single',
  props: ['post'],
  methods: {
    formatDate,
    getThumbnail,
    renderHeaderImage () {
      const imageSrc = this.post.thumbnail
        ? getThumbnail(this.post.thumbnail, 'large')
        : require('@/assets/post_header_bg.png')
      return `backgroundImage: url('${imageSrc}');`
    }
  },
  components: {
    PostContent
  }
}
</script>

<style scoped lang="sass">
  .header{
    width: 100%;
    background-size: cover;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    position: relative;
    z-index: 1;

    .wrapper{
      max-width: 800px;
    }
  }

  .title{
    margin: 0;
    font-size: 4rem;
  }

  .body{
    position: relative;
    max-width: 800px;
    margin: -1.9rem auto 0rem auto;
    z-index: 2;
  }

  .date{
    background-color: var(--dark-color);
    color: white;
    display: inline-block;
    padding: .25rem 1rem;
    margin: 0;
  }

  .post-content{
    padding: 2rem;
    margin-top: 2rem;
    background-color: white;
  }
</style>
