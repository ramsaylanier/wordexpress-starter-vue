<template>
  <div class="wrapper">
    <div class="body">
      <post-content :content="page.post_content"/> 
    </div>
  </div>
</template>

<script>
import PostContent from '@/components/post/PostContent'
export default {
  name: 'default-page',
  props: ['page'],
  components: {
    PostContent
  }
}
</script>

<style scoped>
  .wrapper{
    display: grid;
    grid-template-columns: 5% 90% 5%;
  }

  .body{
    grid-column: 2;
    position: relative;
    width: 100%;
    max-width: 800px;
    justify-self: center;
    margin: 4rem auto 0rem auto;
    z-index: 2;
  }

  .post-content{
    padding: 2rem;
    margin-top: 2rem;
    background-color: white;
  }
</style>
