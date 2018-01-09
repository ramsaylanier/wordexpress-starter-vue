<template>
  <div class="post-content" v-html="$parseContent(content)"/> 
</template>

<script>
import {map} from 'lodash'
import hljs from 'highlightjs'

export default {
  name: 'post-content',
  props: ['content'],
  mounted () {
    const anchors = this.$el.getElementsByTagName('a')
    const r = new RegExp('^(?:[a-z]+:)?//', 'i')
    const m = new RegExp('mailto', 'g')

    // add transitions to all internal links
    map(anchors, anchor => {
      const target = anchor.getAttribute('href')
      if (!r.test(target) && !m.test(target)) {
        anchor.addEventListener('click', (e) => {
          e.preventDefault()
          this.$router.push(target)
        })
      }
    })

    let targets = this.$el.querySelectorAll('pre code')
    targets.forEach((target) => {
      hljs.highlightBlock(target)
    })
  }
}
</script>

<style lang="scss">

  .post-content{
    font-size: 1.15rem;

    .cta{
      display: inline-block;
      margin: 1rem 0;
      padding: .75rem 1.5rem;
      background-color: var(--primary-color);
      color: white;
      border-radius: 3px;
      text-decoration: none;
      font-size: 1.25rem;
      font-family: var(--heading-font);

      &:hover{
        background-color: var(--secondary-color);
      }
    }

    ul{
      list-style-type: square;
      margin-left: 1rem;

      li{
        margin-bottom: 1rem;
      }
    }

    a{
      color: var(--primary-color);
      font-weight: 600;
    }

    blockquote{
      margin-left: 1rem;
      padding: 2rem;
      background-color: var(--light-grey-color);
      font-size: 1.2rem;
      border-left: .5rem solid var(--primary-color);
    }

    figure{
      max-width: 100%;
      padding: 2rem 0;
    }

    img{
      max-width: 100%;
      height: auto;

      &.alignright{
        float: right;
        margin-left: 1rem;
      }

      &.alignleft{
        float: left;
        margin-right: 1rem;
      }

      &.aligncenter{
        display: block;
        margin: 1rem auto;
      }
    }

    figcaption{
      background-color: var(--light-grey-color);
      padding: .25rem;
      margin-top: -7px;
      text-align: center;
    }

    code{
      font-size: .8rem;
      background-color: var(--light-grey-color);
      padding: .1rem;
      font-family: var(--mono-font);
    }

    pre{
      padding: .25rem;
      background-color: var(--light-grey-color);

      code{
        font-size: .9rem;
      }
      
      .hljs{
        top: 0;
      }
    }

    .hljs{
      display: inline-block;
      position: relative;
    }
  }
</style>
