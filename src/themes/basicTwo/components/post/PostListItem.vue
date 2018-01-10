<template>
  <div class="post-list-item">
    <router-link class="post-link" :to="{name: 'Post', params: {postname: post.post_name}}">
      <h3 class="post-title">{{post.post_title}}</h3>
      <p class="post-date">{{$formatDate(post.post_date)}}</p>
    </router-link>
    <ul class="post-categories">
      <li class="post-category" v-for="cat in post.categories" :key="cat.name">
        <router-link :to="{name: 'Category', params: {id: cat.term_id}}">{{cat.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'post-list-item',
  props: ['post']
}
</script>

<style scoped>
  .post-list-item{
    background-color: var(--light-grey-color);
    width: 100%;
    display: grid;
    box-shadow: 8px 8px 8px -8px var(--dark-color);
  }

  .post-link:hover .post-title, .post-link:hover .post-date{
    color: var(--primary-color);
  }

  .post-link{
    display: block;
    padding: 2rem;
    text-decoration: none;
  }

  .post-title{
    margin: 0;
  }

  .post-date{
    margin: 0;
  }

  .post-categories{
    border-top: 1px solid var(--dark-color);
    padding: .5rem 2rem;
    align-self: center;
    display: flex;
  }

  .post-category{
    margin-right: 1rem;
  }

  .post-category a{
    text-decoration: none;
    font-size: .8rem;
  }
</style>
