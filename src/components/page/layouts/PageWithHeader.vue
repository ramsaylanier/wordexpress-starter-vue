<template>
  <div class="wrapper">
    <div class="page-header" :style="renderHeaderImage()">
      <div class="page-header-content"  v-html="renderHeader()">
      </div>
    </div>
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
  methods: {
    renderHeader () {
      const header = this.page.post_meta.filter(meta => {
        return meta.meta_key === 'page_header'
      })

      if (header.length > 0) {
        return header[0].meta_value
      }
    },
    renderHeaderImage () {
      const imageSrc = this.page.thumbnail ? this.page.thumbnail : require('@/assets/page_header_bg.png')
      return `backgroundImage: url('${imageSrc}');`
    }
  },
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

  .page-header{
    grid-column: 1 / 4;
    grid-row: 1;
    padding: 2rem;
  }

  .page-header-content{
    max-width: 900px;
    margin: 0 auto;
  }

  .page-content{
    grid-column: 2;
    max-width: 900px;
    justify-self: center;
    padding: 2rem 0;
  }
</style>

<style>
  .page-header h2{
    margin: 0;
    font-weight: 100;
    letter-spacing: .015em;
    /* color: white; */
  }
</style>
