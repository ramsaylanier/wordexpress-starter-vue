<template>
  <div class="post-list-item">
    {{getPostMeta()}}
    <div class="content">
      <router-link class="title" :to="{name: 'Post', params: {postname: post.post_name}}">
        {{post.post_title}}
      </router-link>
      <p class="date">{{formatDate(post.post_date)}}</p>
    </div>
    <div class="meta">
      <a v-if="codeLink.length > 0" target="_blank" :href="codeLink">Code</a>
    </div>
    <ul class="categories">
      <li class="category" v-for="cat in post.categories" :key="cat.name">
        <router-link :to="{name: 'Category', params: {id: cat.term_id}}">{{cat.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import formatDate from '@/helpers/formatDate'
export default {
  name: 'tutorial-list-item',
  props: ['post'],
  data () {
    return {
      articleLink: null,
      codeLink: null
    }
  },
  methods: {
    formatDate,
    getPostMeta: function () {
      this.post.post_meta.map(meta => {
        switch (meta.meta_key) {
          case 'article_link':
            this.articleLink = meta.meta_value
            break
          case 'code_link':
            this.codeLink = meta.meta_value
            break
        }
      })
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../../../styles/colors.scss';

  .post-list-item{
    background-color: darken($dark-color, 3%);
    width: 100%;
    border: 1px solid $secondary-color;
    color: $secondary-color;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "content meta"
      "categories categories";
  }

  .content{
    grid-area: content;
    padding: 1rem;

    a{
      text-decoration: none;

      &:hover{
        color: $primary-color;
      }
    }
  }

  .meta{
    grid-area: meta;
    padding: 1rem;
  }

  .categories{
    grid-area: categories;
    border-top: 1px solid var(--dark-color);
    padding: .5rem 1rem;
    align-self: center;
    display: flex;
  }

  .title{
    margin: 0;
    font-family: var(--heading-font);
    color: var(--secondary-color);
    font-size: 1.7rem;
    font-weight: 300;
  }

  .date{
    margin: 0;
    font-family: var(--copy-font);
    font-weight: 300;
    font-size: .8rem;
  }

  .category{
    margin-right: 1rem;

    a{
      color: $primary-color;
      font-size: .8rem;
      text-decoration: none;
      font-weight: 100;
    }
  }
</style>
