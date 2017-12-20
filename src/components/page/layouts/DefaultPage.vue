<template>
  <div class="wrapper">
    <div class="page-content">
      <post-content :content="page.post_content"/> 
    </div>
  </div>
</template>

<script>
import PostContent from '@/components/post/PostContent'
export default {
  name: 'front-page',
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

  .page-content{
    grid-column: 2;
    max-width: 900px;
    justify-self: center;
    padding: 2rem 0;
  }
</style>
