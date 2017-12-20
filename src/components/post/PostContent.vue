<template>
  <div class="post-content" v-html="parseContent(content)"/> 
</template>

<script>
import parseContent from '@/helpers/parseContent'
import {map} from 'lodash'

export default {
  name: 'post-content',
  props: ['content'],
  mounted () {
    const anchors = this.$el.getElementsByTagName('a')
    const r = new RegExp('^(?:[a-z]+:)?//', 'i')

    // add transitions to all internal links
    map(anchors, anchor => {
      const target = anchor.getAttribute('href')

      if (!r.test(target)) {
        anchor.addEventListener('click', (e) => {
          e.preventDefault()
          this.$router.push(target)
        })
      }
    })
  },
  methods: {
    parseContent
  }
}
</script>

<style>

  .post-content{
    font-size: 1.15rem;
  }

  .post-content .cta{
    display: inline-block;
    margin: 1rem 0;
    padding: .75rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: 3px;
    text-decoration: none;
    font-size: 1.25rem;
    font-family: var(--heading-font);
  }

  .post-content .cta:hover{
    background-color: var(--secondary-color);
  }

  .post-content ul{
    list-style-type: square;
    margin-left: 1rem;
  }

  .post-content ul li{
    margin-bottom: 1rem;
  }

  .post-content a{
    color: var(--secondary-color);
    font-weight: 600;
  }

  .post-content pre{
    font-size: 1rem;
    padding: 0;
  }

  .post-content pre code{
    padding: 1rem;
  }

  .post-content blockquote{
    margin-left: 1rem;
    padding: 2rem;
    background-color: var(--light-grey-color);
    font-size: 1.2rem;
    border-left: .5rem solid var(--primary-color);
  }

  .post-content figure{
    max-width: 100%;
    padding: 2rem 0;
  }

  .post-content img{
    max-width: 100%;
    height: auto;
  }

  .post-content img.alignright{
    float: right;
    margin-left: 1rem;
  }

  .post-content img.alignleft{
    float: left;
    margin-right: 1rem;
  }

  .post-content img.aligncenter{
    display: block;
    margin: 1rem auto;
  }

  .post-content figcaption{
    background-color: var(--light-grey-color);
    padding: .25rem;
    margin-top: -7px;
    text-align: center;
  }
</style>
